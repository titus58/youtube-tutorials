## URLS
- [MEAN Blueprint Quick Start](https://docs.bitnami.com/aws/infrastructure/mean/get-started/get-started/)
- [Apache Virtual Hosts](https://httpd.apache.org/docs/2.4/vhosts/examples.html)

## Commands

`Forever` command for making our Node server into a daemon
```shell
$ forever start index.js
$ forever restart 0
$ forever restartall
```

Reconfigure Apache server
```shell
$ # List virtual hosts
$ apachectl -S 
$ # Check configuration has correct syntax
$ apachectl configtest 
$ # Restart Apache for reloading the new configuration
$ sudo /opt/bitnami/ctlscript.sh restart apache
```