# Google Cloud Build Quickstart

In this video we will use Cloud Build on a Dockerized project for pushing an image to Container Registry. Then, in the second part, we will see how we can optize builds by caching from previously built images.

Depending on the name of your virtual environment, you might need to adjust the `.gcloudignore` file to include that directory.

## Commands

Build  and run Docker image locally
```shell
docker build -t build-quickstart .
docker run build-quickstart
```

Submit project to Cloud Build without `cloudbuild.yaml` file
```shell
gcloud builds submit -t gcr.io/[YOUR_PROJECT_ID]/builds-quickstart --async
```

Submit project to Cloud Build with `cloudbuild.yaml` file
```shell
gcloud builds submit . --async
```

## URLs
- [Setting up Google Cloud Logging in Python](https://cloud.google.com/logging/docs/setup/python)
- [Google Cloud Builders](https://cloud.google.com/build/docs/cloud-builders)
- [Using cached Docker Images](https://cloud.google.com/build/docs/optimize-builds/speeding-up-builds#using_a_cached_docker_image)
