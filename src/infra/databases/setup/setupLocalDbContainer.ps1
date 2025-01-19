docker kill fb-db-local 

docker rm fb-db-local 

docker rmi fb/db-local 

docker build --progress=plain -t fb/db-local -f Dockerfile.db .

docker run -d -e 'ACCEPT_EULA=Y' -e 'MSSQL_SA_PASSWORD=Dat20112011' -p 1401:1433 --name 'fb-db-local' fb/db-local

Write-Host "Waiting for SQL Server to initialize..."
Start-Sleep -Seconds 10
Write-Host "SQL Server is ready!"
