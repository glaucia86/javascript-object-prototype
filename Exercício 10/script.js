'use strict';

var gato = {
    name: { first: 'Garfield', last: 'Preguiça' },
    color: 'Amarelo'
}

Object.defineProperty(gato, 'fullName', {
    get: function() {
        return this.name.first + ' ' + this.name.last
    },
    set: function(value) {
        var nameParams = value.split(' ')
        this.name.first = nameParams[0]
        this.name.last = nameParams[1]
    }
})

gato.fullName = 'Felix Teimoso'

display(gato.fullName)
display(gato.name.first)
display(gato.name.last)