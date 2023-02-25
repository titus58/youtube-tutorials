## Install a free Let's Encrypt certificate to Spring Boot
This is the companion content for the Youtube video. You can find my gradle build file and production properties in this directory.

Command for converting the certificate to PKCS12 format (replace the crt and key files with yours)
```shell
$ openssl pkcs12 -export -in boot-ssl.vladsave.com.crt -inkey boot-ssl.vladsave.com.key -out server.p12
```
## URLs
- [Let's Encrypt](https://letsencrypt.org/)
- [Tomcat SSL](https://tomcat.apache.org/tomcat-9.0-doc/ssl-howto.html)
- [Spring Boot SSL](https://docs.spring.io/spring-cloud-skipper/docs/1.0.0.BUILD-SNAPSHOT/reference/html/configuration-security-enabling-https.html)