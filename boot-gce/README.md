## URLs used in the video
### Spring Initializer

https://start.spring.io/

### Spring Boot Actuator Endpoints

https://docs.spring.io/spring-boot/docs/2.1.7.RELEASE/reference/html/production-ready-endpoints.html

### Gradle Jib Docker plugin 
https://github.com/GoogleContainerTools/jib/tree/master/jib-gradle-plugin

### Authenticate your Docker client to Google Cloud
https://cloud.google.com/container-registry/docs/advanced-authentication#docker_credential_helper

### Google Cloud Console
https://console.cloud.google.com/

### Jib Maven Plugin
https://github.com/GoogleContainerTools/jib/tree/master/jib-maven-plugin

## Commands

### List docker images with a name
```shell
$ docker images gcr.io/focus-healer-369819/hello-world
```

### Run container with Docker
```shell
$ docker run -p 9099:8080 gcr.io/focus-healer-369819/hello-world
```

### Push the docker image to Google Container Registry
```shell
$ docker push gcr.io/focus-healer-369819/hello-world
```