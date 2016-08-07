'use strict';

class Gato {
    constructor(name, color) {
        this.name = name
        this.color = color
    }

    falar() {
        display('Miaaaaauuuu!')
    }
}

var gato = new Gato('Garfield', 'Amarelo')

display(gato)
gato.falar()