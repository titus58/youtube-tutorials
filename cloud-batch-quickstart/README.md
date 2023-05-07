
# Google Cloud Batch

Batch is a feature from Google Cloud that allows us to run batch processing jobs. Each job can be split into multiple tasks allowing us to parallelize our workload. In this video we are going to quickly compare Cloud Batch with 2 other Google Cloud alternatives: Compute Engine and Cloud Run; then we will deploy a simple Docker image to Cloud Batch

## URLs
- [Cloud Batch Documentation](https://cloud.google.com/batch/docs/get-started)
- [Add environment variables to Cloud Batch](https://cloud.google.com/batch/docs/create-run-basic-job#create-job-environment-variables)

## Commands

Dockerize project and push to Container registry
```shell
docker build -t gcr.io/{YOUR_PROJECT_ID}/batch-quickstart
docker push gcr.io/{YOUR_PROJECT_ID}/batch-quickstart
```

Change project in gcloud
```shell
gcloud config  set project {YOUR_PROJECT_ID}
```

Launch batch job from the gcloud CLI
```shell
gcloud batch jobs submit batch-with-env \
  --location us-central1 \
  --config batch-job.json
```