'use strict';

var gato = Object.create(Object.prototype, {
    name: {
        value: 'Garfield',
        enumerable: true,
        writable: true,
        configurable: true
    },
    color: {
        value: 'Amarelo',
        enumerable: true,
        writable: true,
        configurable: true
    }
})

display(gato)