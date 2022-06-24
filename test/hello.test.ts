import { Stack } from 'aws-cdk-lib';

test('Test created by a template', () => {
  const stack = new Stack();
  expect(stack).toBe(stack);
});
