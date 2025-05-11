npx typeorm-model-generator `
  -h localhost `
  -p 1401 `
  -d LocalDatabase `
  -u sa `
  -x Dat20112011 `
  -e mssql `
  -o ./src/infra/databases/models `
  --noConfig
