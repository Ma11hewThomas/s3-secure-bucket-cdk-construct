import { Bucket, BucketProps, BucketEncryption } from "aws-cdk-lib/aws-s3";
import { Construct } from "constructs";

export class SecureBucket extends Bucket {
  constructor(scope: Construct, id: string, props: BucketProps = {}) {
    super(scope, id, {
      ...props,
      encryption: BucketEncryption.KMS,
    });
  }
}
