const fs = require('fs');
const inquirer = require('inquirer');
const { Circle, Square, Triangle } = require('./lib/shapes');

class SVG {
    constructor() {
        this.textEl = ''
        this.shapeEl = ''
    }
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        ${this.shapeEl}
        ${this.textEl}
        </svg>`;
    }
    setTextEl(text, color) {
        this.textEl = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`;
    }
    setShapeEl(shape) {
        this.shapeEl = shape.render()
    }
};

const questions = [
    {
        type: 'input',
        message: 'What text would you like on your logo? Enter 3 characters max.',
        name: 'text'
    },
    {
        type: 'input',
        message: 'What color would you like the text to be?',
        name: 'color'
    },
    {
        type: 'list',
        message: 'What shape would you like?',
        choices: ['circle', 'square', 'triangle'],
        name: 'shape'
    },
    {
        type: 'input',
        message: 'What color would you like the background to be?',
        name: 'background'
    }
];

function createSVG(response) {
    const svgString = `
    <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${response.shapeEl}
    ${response.textEl}
</svg>`;

    fs.writeFile('./examples/logo.svg', svgString, (err) => {
        if (err) {
            console.error('Error writing file:', err);
        } else {
            console.log('Congratulations! A new logo was created! Check the examples folder.')
        }
    });
};

async function init() {
    const response = await inquirer.prompt(questions);
    const svg = new SVG();

    if (!confirmText(response.text)) {
        console.log('Error: Text must be a max of 3 characters.');
        return;
    }

    svg.setTextEl(response.text, response['color']);

    let shape;
    if (response.shape === 'circle') {
        shape = new Circle();
    } else if (response.shape === 'square') {
        shape = new Square();
    } else if (response.shape === 'triangle') {
        shape = new Triangle();
    }
  
    shape.setColor(response['shape-color']);
    svg.setShapeEl(shape);

  
    createSVG(svg);

};

function confirmText(text) {
    return text.length <= 3;
}

module.exports = {
    confirmText
}

init();