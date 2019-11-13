import { hello, goodbye } from './greetings'

describe('hello support', () => {
  it('should append user', () => {
    expect(hello('World')).toEqual('Hello World');
  });
});

describe('goodby support', () => {
  it('should append user', () => {
      expect(goodbye('World')).toEqual('Goodebye World');
  });
});

