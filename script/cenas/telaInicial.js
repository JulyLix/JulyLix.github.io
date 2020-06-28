class TelaInicial {
    constructor(){
        //loader = new Loader()
    }

    draw(){
        this._imagemDeFundo()
        this._texto()
        this._botao()

    }

    _imagemDeFundo(){
        image(imgTelaInicial, 0, 0, width, height)
    }

    _texto(){
        textFont(fonteTelaInicial)
        textAlign(CENTER)
        textSize(50)
        text('Chibi World', width / 2, height / 2)
        textSize(40)
        text('Run', width / 2, height / 1.7)
    }

    _botao(){
        botaoGerenciador.y = height / 7 * 5
        botaoGerenciador.draw()
    }
}