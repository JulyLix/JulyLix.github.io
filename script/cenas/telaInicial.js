class TelaInicial {
    constructor(){
        //loader = new Loader()
        this.botao = new BotaoGerenciador('Iniciar', width / 2, height / 2, 'jogo', somTitulo, somDoJogo)
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
        textSize(80)
        fill('#E971DD')
        stroke('#1C1C1C')
        strokeWeight(10)
        text('Chibi World', width / 2, height / 2)
        textSize(40)
        text('Run', width / 2, height / 1.7)
    }

    _botao(){
        this.botao.y = height / 7 * 5
        this.botao.draw()
    }
}