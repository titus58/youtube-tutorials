# Deploy Express.js to Compute Engine

## URLs

- [Winston library NPM](https://www.npmjs.com/package/winston)
- [Dockerhub Node image](https://hub.docker.com/_/node)
- [Google Cloud Console](https://console.cloud.google.com/)
- [GCP Logging Agent](https://cloud.google.com/container-optimized-os/docs/how-to/logging)
- [Add GCP Logging to Winston](https://cloud.google.com/logging/docs/samples/logging-winston-quickstart)
- [Load Balancer Pricing](https://cloud.google.com/vpc/network-pricing#lb)

## The Load Balancer Route for /ig

```yaml
defaultService: projects/solar-attic-388519/global/backendServices/neg-backend
name: path-matcher-1
pathRules:
- paths:
  - /ig
  service: projects/solar-attic-388519/global/backendServices/instance-group-be
  routeAction:
    urlRewrite:
      pathPrefixRewrite: /
```