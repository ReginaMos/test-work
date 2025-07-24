function createButtons(container) {
    const buttons = [
        'C',
        '⇐',
        '/',
        '*',
        '+',
        '-',
        '7',
        '8',
        '9',
        '4',
        '5',
        '6',
        '1',
        '2',
        '3',
        '0',
        '.',
        '='
    ];

    const buttonsContainer = $('<div></div>');
    buttonsContainer.addClass('buttons-container');
    container.append(buttonsContainer);

    buttons.forEach((label) => {
        const button = $('<button></button>').text(label);
        button.addClass('button');
        if (label === 'C') {
            button.addClass('clear');
        } else if (label === '0') {
            button.addClass('zero-btn');
        } else if (label === '=') {
            button.addClass('equal-btn');
        }

        buttonsContainer.append(button);
    });
}

function createLayout() {
    const mainContainer = $('<main></main>');
    mainContainer.addClass('calculator');
    $('body').append(mainContainer);

    const inputPart = $('<div></div>');
    inputPart.addClass('expression');
    mainContainer.append(inputPart);

    createButtons(mainContainer);
}

$(document).ready(function () {
    createLayout();
    let expression = '';
    const mathSymbols = ['+', '-', '/', '*'];

    $('.calculator .button').on('click', function () {
        const value = $(this).text();

        if (value === '=') {
            try {
                expression = eval(expression).toString();
            } catch {
                expression = 'Incorrect expression';
            }
        } else if (value === 'C') {
            expression = '';
        } else if (value === '⇐') {
            expression = expression.slice(0, -1);
        } else {
            if (
                mathSymbols.includes(value) &&
                expression[expression.length - 1] === value
            )
                return;
            expression += value;
        }

        $('.expression').text(expression);
    });
});
