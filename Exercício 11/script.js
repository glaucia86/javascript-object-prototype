'use strict';

var gato = {
    name: { first: 'Garfield', last: 'Preguiça' },
    color: 'Amarelo'
}

Object.defineProperty(gato, 'name', { enumerable: false })

display(gato['name'])