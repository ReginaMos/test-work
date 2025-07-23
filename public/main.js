function createButtons(container) {
    const buttons = [
        '7',
        '8',
        '9',
        '/',
        '4',
        '5',
        '6',
        '*',
        '1',
        '2',
        '3',
        '-',
        '0',
        '.',
        '=',
        '+',
        'C'
    ];

    const buttonsContainer = $('<div></div>');
    buttonsContainer.addClass('buttons-container');
    container.append(buttonsContainer)

    buttons.forEach((label) => {
        const button = $('<button></button>').text(label);
        button.addClass('button');
        if (label === 'C') {
            button.addClass('clear');
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
    let expression = "";

    $('.calculator .button').on('click', function () {
        const value = $(this).text();

        if (value === '=') {
            try {
                expression = eval(expression).toString();
            } catch {
                expression = 'Error';
            }
        } else if (value === 'C') {
            expression = '';
        } else {
            expression += value;
        }

        $('.expression').text(expression);
    });
});
