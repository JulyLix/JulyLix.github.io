class BotaoGerenciador {
    constructor(texto, x, y, cena, musica, musicaS){
        this.texto = texto
        this.x = x
        this.y = y
        this.cena =cena
        this.musica = musica
        this.musicaS = musicaS
        this.botao = createButton(this.texto)
        this.botao.mousePressed(() => this._alteraCena())
        this.botao.addClass('botao-tela-inicial')
    }

    draw(){
        this.botao.position(this.x, this.y)
        this.botao.center('horizontal')
    }

    _alteraCena(){
        cenaAtual = this.cena
        this.botao.remove()
        this.musica.stop()
        this.musicaS.loop() 
        
    }
}