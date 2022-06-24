const { awscdk } = require('projen');
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Matthew Thomas',
  authorAddress: 'matthewthomasgb@gmail.com',
  cdkVersion: '2.1.0',
  defaultReleaseBranch: 'main',
  name: 'projen-first-attempt',
  repositoryUrl: 'https://github.com/Ma11hewThomas/s3-secure-bucket-cdk-construct.git',
  bundledDeps: ['@types/jest@27.4.1']

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});
project.synth();
