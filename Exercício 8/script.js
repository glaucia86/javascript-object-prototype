'use strict';

var gato = {
    name: { first: 'Garfield', last: 'Preguiça' },
    color: 'Amarelo'
}

Object.defineProperty(gato, 'name', { writable: false })

cat.name.first = 'Feio!'

display(gato.name);