const sayHelloWorldId = require('./sayHelloWorld');

describe('Say Hello tests', () => {
    it('Should say Hello World', () => {
        const response = sayHelloWorldId.sayHello();

        expect(response).toBe('Hello World!');
    });

    it('Should say Hello Hilton', () => {
        const response = sayHelloWorldId.sayHello('Hilton');

        expect(response).toBe('Hello Hilton!');
    });
});