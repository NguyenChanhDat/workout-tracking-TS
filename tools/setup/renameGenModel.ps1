# Script to rename model files, update their import/export statements, class references, add nullable operators, and add userId column for ManyToOne relationships

# Define the directory containing the model files
$modelsDir = ".\src\infra\databases\models"

# First pass: Rename files and update internal references
$files = Get-ChildItem -Path $modelsDir -Filter "*.ts"

foreach ($file in $files) {
    # Extract the base name (without extension)
    $baseName = [System.IO.Path]::GetFileNameWithoutExtension($file.Name)

    # Skip if the file already ends with Model
    if ($baseName -like "*Model") {
        continue
    }
    
    # Create new file name with Model suffix
    $newBaseName = "${baseName}Model"
    $newFileName = "${newBaseName}.ts"
    $newFilePath = Join-Path $modelsDir $newFileName
    
    # Read the content of the file
    $content = Get-Content $file.FullName -Raw
    
    # Replace export class name
    $content = $content -replace "export class ${baseName}", "export class ${newBaseName}"
    
    # Replace import statements (both class name and file name)
    $content = $content -replace "import { ${baseName} } from `"./${baseName}`"", "import { ${newBaseName} } from `"./${newBaseName}`""
    
    # Replace class references in the file (e.g., in @ManyToOne, type annotations)
    $content = $content -replace "\(\) => ${baseName}", "() => ${newBaseName}"
    $content = $content -replace "${baseName}\[\]", "${newBaseName}[]"
    $content = $content -replace "${baseName};", "${newBaseName};"
    
    # Write the modified content to a new file
    Set-Content -Path $newFilePath -Value $content
    
    # Remove the old file
    Remove-Item $file.FullName
    
    Write-Host "Processed: $($file.Name) -> $newFileName"
}

# Second pass: Update cross-file imports and references
$files = Get-ChildItem -Path $modelsDir -Filter "*.ts"
foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw
    $modified = $false
    
    # Update imports and references for all known model files
    foreach ($otherFile in $files) {
        $otherBaseName = [System.IO.Path]::GetFileNameWithoutExtension($otherFile.Name)
        if ($otherBaseName -notlike "*Model") {
            continue
        }
        $originalName = $otherBaseName -replace "Model$", ""
        if ($originalName -ne $otherBaseName) {
            # Update import statements
            $content = $content -replace "import { ${originalName} } from `"./${originalName}`"", "import { ${otherBaseName} } from `"./${otherBaseName}`""
            # Update class references
            $content = $content -replace "\(\) => ${originalName}", "() => ${otherBaseName}"
            # Update class references
            $content = $content -replace "${originalName}\[\]", "${otherBaseName}[]"
            $content = $content -replace "${originalName};", "${otherBaseName};"
            $modified = $true
        }
    }
    
    if ($modified) {
        Set-Content -Path $file.FullName -Value $content
        Write-Host "Updated cross-file references in: $($file.Name)"
    }
}

# Third pass: Add ? or ! operators and add userId column for ManyToOne relationships
Write-Host "Starting nullable operator and userId column updates..."

$files = Get-ChildItem -Path $modelsDir -Filter "*.ts"
foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw
    $modified = $false

    $lines = Get-Content $file.FullName
    $newLines = @()
    $i = 0

    while ($i -lt $lines.Length) {
        $line = $lines[$i]
        $isNullable = $false
        $joinColumnName = $null

        # Check for Column, PrimaryGeneratedColumn, or ManyToOne decorators
        if ($line -match '@(Column|PrimaryGeneratedColumn|ManyToOne|OneToMany|OneToOne|ManyToMany)\(') {
            $decoratorLine = $line
            # Check for nullable: true in the decorator
            $isNullable = $decoratorLine -match 'nullable:\s*true'

            # For ManyToOne, we may need to check subsequent lines for JoinColumn or nullable
            if ($decoratorLine -match '@ManyToOne\(' -and '@OneToMany\(' -and '@OneToOne\('-and '@ManyToMany\(') {
                $j = $i + 1
                while ($j -lt $lines.Length -and $lines[$j].Trim() -match '^@') {
                    if ($lines[$j] -match 'nullable:\s*true') {
                        $isNullable = $true
                    }
                    if ($lines[$j] -match '@JoinColumn\(\[\s*{\s*name:\s*"([^"]+)"') {
                        $joinColumnName = $matches[1]
                    }
                    $j++
                }
            }

            # Look for the next non-empty, non-decorator line (should be the property)
            $j = $i + 1
            while ($j -lt $lines.Length) {
                $nextLine = $lines[$j].Trim()
                if ($nextLine -and $nextLine -notmatch '^@' -and $nextLine -match '^\s*(\w+):.*;') {
                    $propertyLine = $lines[$j]
                    # Add userId column for ManyToOne with JoinColumn
                    if ($decoratorLine -match '@ManyToOne\(' -and $joinColumnName) {
                        # Check if userId column already exists
                        $userIdExists = $lines | Where-Object { $_ -match "@Column.*${joinColumnName}\s*:" }
                        if (-not $userIdExists) {
                            $newLines += "  @Column({ type: 'int', nullable: false })"
                            $newLines += "  ${joinColumnName}!: number;"
                            $modified = $true
                        }
                    }
                    # Check if the property already has ? or !
                    if ($propertyLine -notmatch '\w+\s*(\?|!):') {
                        # Extract property name and type
                        if ($propertyLine -match '^\s*(\w+)\s*:\s*([^;]+);') {
                            $propName = $matches[1]
                            $propType = $matches[2]
                            # Add ? for nullable, ! for non-nullable
                            if($operator = $isNullable){$operator= '?'}else{$operator='!'}
                            # Use ${} to properly delimit variable names
                            $newPropertyLine = $propertyLine -replace '^\s*(\w+)\s*:\s*([^;]+);', "  ${propName}${operator}: ${propType};"
                            $lines[$j] = $newPropertyLine
                            $modified = $true
                        }
                    }
                    break
                }
                $j++
            }
        }
        # Add the current line to newLines
        $newLines += $line
        $i++
    }

    if ($modified) {
        # Write the modified content back to the file
        Set-Content -Path $file.FullName -Value $newLines
        Write-Host "Updated nullable operators and/or added userId column in: $($file.Name)"
    }
}

Write-Host "All updates (renaming, cross-file references, nullable operators, and userId columns) complete!"