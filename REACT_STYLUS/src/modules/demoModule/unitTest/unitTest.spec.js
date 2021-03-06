import DemoService from '../DemoService';

describe('Basic unit test', function () {

  let adder = function (x, y) {
    return x + y;
  };

  it('should add two numbers together', function () {
    expect(adder(2, 3)).toEqual(5);
  });
});


describe('Test imported module', function () {
  let demoService = DemoService;

  it('should have a demoService with a demo method', function () {
    expect(typeof demoService.demo).toEqual('function');
  });

  it('should return a message when demo() is called', function () {
    expect(demoService.demo('abc')).toEqual('Message from demoService.demo():abc');
  });
});
