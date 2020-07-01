class TelaInicial {
    constructor(){
        //loader = new Loader()
        //this.botao = new BotaoGerenciador('Iniciar', width / 2, height / 2, 'jogo', somTitulo, somDoJogo)
    }

    draw(){
        this._imagemDeFundo()
        this._textocontrole()
        this._texto()   
        this._botao()

    }

    _imagemDeFundo(){
        image(imgTelaInicial, 0, 0, width, height)
    }

    _textocontrole(){
        textAlign(CENTER)
        textSize(25)
        fill('#ffffff')
        stroke('#1c1c1c')
        strokeWeight(2)
        text('Use ESPACO para pular', 700, 55)
    }

    _texto(){
        textFont(fonteTelaInicial)
        textAlign(CENTER)
        textSize(80)
        fill('#E971DD')
        stroke('#1C1C1C')
        strokeWeight(10)
        text('Chibi World', width / 2, height / 2)
        textSize(40)
        text('Run', width / 2, height / 1.7)
    }

    _botao(){
        botaoGerenciador.y = height / 7 * 5
        botaoGerenciador.draw()
    }
}