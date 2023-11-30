const inquirer = require ('inquirer');

const { confirmText, confirmColor } = require('../index.js')

describe('User Input Confirmation', () => {
    describe('Confirm text character amount', () => {
        it('Text should be up to 3 chars', () => {
            const textConfirmation = confirmText('123');
            expect(textConfirmation).toBe(true)

            const invalidTextConfirmation = confirmText('1234')
            expect(invalidTextConfirmation).toBe(false);
        });
    });
});