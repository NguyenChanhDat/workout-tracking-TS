#Kill any runnning container
docker kill zookeeper
docker kill kafka
docker kill debezium

#Remove existance containers 
docker rm zookeeper
docker rm kafka
docker rm debezium

#Remove existance images
docker rmi i/zookeeper
docker rmi i/kafka
docker rmi i/debezium

#Build images
docker build --progress=plain -t i/zookeeper -f Dockerfile.zookeeper .
docker build --progress=plain -t i/kafka -f Dockerfile.kafka .
docker build --progress=plain -t i/debezium -f Dockerfile.debezium .

#Run container for services images
docker run --network fb-network -d `
  -p 2181:2181 `
  --name zookeeper `
  i/zookeeper

docker run --network fb-network -d `
  -p 9092:9092 `
  --link zookeeper:zookeeper `
  --name kafka `
  i/kafka

docker run --network fb-network -d `
  -p 8083:8083 `
  -e GROUP_ID=1 `
  -e CONFIG_STORAGE_TOPIC=my_connect_configs `
  -e OFFSET_STORAGE_TOPIC=my_connect_offsets `
  -e STATUS_STORAGE_TOPIC=my_connect_statuses `
  --link kafka:kafka `
  --link mssql:fb-db-local `
  --name debezium `
  i/debezium