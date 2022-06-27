# s3-secure-bucket-cdk-construct

Created for learning purposes whilst checking out [projen](https://projen.io/). 

A CDK construct that creates a KMS encrypted S3 bucket.

## Installation

> npm i @ma11hewthomas/s3-secure-bucket-cdk-construct

Add the following to your stack:

``` typescript
import { SecureBucket } from '@ma11hewthomas/s3-secure-bucket-cdk-construct';

new SecureBucket(this, 'S3SecureBucketCdkConstruct');
```


