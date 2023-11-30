const fs = require('fs')
const inquirer = require('inquirer')
const { Circle, Square, Triangle} = require('./lib/shapes')

class SVG {
    constructor(){
        this.textEl = ''
        this.shapeEl =''
    }
    render(){
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
        message: 'What colore would you like the text to be?',
        name: 'color'
    },
    {
        type: 'list',
        message: 'What shape would you like?',
        choices: ['Circle', 'Square', 'Triangle'],
        name: 'shape'
    },
    {
        type: 'input',
        message: 'What color would you like the background to be?',
        name: 'background'
    }
]