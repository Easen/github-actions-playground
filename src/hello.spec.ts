import { hello } from './hello'

it('should append user', () => {
  expect(hello('World')).toEqual('Hello World');
});