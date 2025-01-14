h1 "Build DB Image"
docker build --progress=plain -t fb/db-local -f Dockerfile.db .

h1 "Run DB Container"
docker run -e 'ACCEPT_EULA=Y' \
-e 'MSSQL_SA_PASSWORD=Dat20112011' \
-p 1401:1433 \
--name fb-db-local \
fb/db-local