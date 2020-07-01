class GameOver {
    constructor(){

    }

    draw(){
        image(imgGameOver, width/2 - 200, height/3)   
        this._botao()

    }

    _botao(){
        botaoGerenciador.y = height / 7 * 5
        botaoGerenciador.draw()
    }
}