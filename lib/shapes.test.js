const { Circle } = require('../lib/shapes.js');

describe('Circle', () => {
    it('render() should return the correct circle string', () => {
        const circle = new Circle();
        circle.setColor(this.color);
        expect(circle.render()).toEqual(`<circle cx="150" cy="100" r="80" fill="${this.color}" />`)
    })
})

const { Square } = require('../lib/shapes.js');
describe('Square', () => {
    it('render() should return the correct circle string', () => {
        const square = new Square();
        square.setColor(this.color);
        expect(square.render()).toEqual(`<rect x="50" y="50" width="200" height="200" fill="${this.color}" />`)
    })
})

const { Triangle } = require('../lib/shapes.js');
describe('Triangle', () => {
    it('render() should return the correct circle string', () => {
        const triangle = new Triangle();
        triangle.setColor(this.color);
        expect(triangle.render()).toEqual(`<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`)
    })
})