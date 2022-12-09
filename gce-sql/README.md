## URLs
- [Google Cloud Console](https://console.cloud.google.com)
- [Cloud SQL Pricing](https://cloud.google.com/sql/pricing)
- [Networking Pricing](https://cloud.google.com/vpc/network-pricing)
- [Cloud SQL Proxy](https://cloud.google.com/sql/docs/mysql/sql-proxy)

## Commands

Install tools with apt-get
```shell
$ sudo apt-get install mariadb-client
$ sudo apt-get install wget
```

Connect to MySQL instance via IP
```shell
$ mariadb -u root -p -h 127.0.0.1
```

Install `cloud_sql_proxy`
```shell
$ wget https://dl.google.com/cloudsql/cloud_sql_proxy.linux.amd64 -O cloud_sql_proxy
$ chmod +x cloud_sql_proxy
```

Create proxy to Cloud SQL instance
```shell
$ ./cloud_sql_proxy -instances=rock-drake-371100:us-west4:gce-sql=tcp:3306 &
```
