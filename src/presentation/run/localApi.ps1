docker kill fb-api-local 

docker rm fb-api-local 

docker rmi fb/api-local

docker build --progress=plain -t fb/api-local -f Dockerfile.api .

docker run -p 8080:8080 --name 'fb-api-local' fb/api-local
