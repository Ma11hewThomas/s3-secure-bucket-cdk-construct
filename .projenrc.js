const { awscdk } = require('projen');
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Matthew Thomas',
  authorAddress: 'matthewthomasgb@gmail.com',
  cdkVersion: '2.1.0',
  defaultReleaseBranch: 'main',
  name: 's3-secure-bucket-cdk-construcjt',
  repositoryUrl: 'https://github.com/Ma11hewThomas/s3-secure-bucket-cdk-construct.git',
  bundledDeps: ['@types/jest@27.4.1'],

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  packageName: '@ma11hewthomas/s3-secure-bucket-cdk-construct', /* The "name" in package.json. */
  npmAccess: 'public'      /* The npm access level of this project. */
});
project.synth();
