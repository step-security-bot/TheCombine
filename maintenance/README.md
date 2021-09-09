# Maintenance container for The Combine

This Docker image is created to be deployed in a Kubernetes cluster.

It is designed to be the image that is used in Jobs or CronJobs to perform regular maintenance tasks. The current
supported tasks are:

- Backup _The Combine_ to AWS S3
- Restore _The Combine_ from a previous backup in AWS S3