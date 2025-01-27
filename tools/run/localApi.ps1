#Build images
docker kill fb-api-local 

#Remove existance containers
docker rm fb-api-local 

#Remove existance images
docker rmi fb/api-local

#Build images
docker build --progress=plain -t fb/api-local -f Dockerfile.api .

#Run container 
docker run --network fb-network -d -e 'DB_SERVER=fb-db-local' -e 'DB_PORT=1433' -p 1402:1434 --name 'fb-api-local' fb/api-local
