'use strict';

var gato = {
    name: { first: 'Garfield', last: 'Preguiça' },
    color: 'Amarelo'
}

Object.defineProperty(gato, 'name', { configurable: false })

delete gato.name

display(gato.name)