const { Circle } = require('../lib/shapes.js');

describe('Circle', () => {
    it('render() should return the correct circle string', () => {
        const circle = new Circle();
        circle.setColor(this.color);
        expect(circle.render()).toEqual(`<circle cx="150" cy="100" r="80" fill="${this.color}" />`)
    })
})