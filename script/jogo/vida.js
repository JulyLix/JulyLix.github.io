class Vida {
    constructor(total, inical){
        this.total = total
        this.inical = inical
        this.vidas = this.inical

        this.largura = 50
        this.altura = 50
        this.xInicial = 20
        this.y = 20

        //loader = new Loader()
    }

    draw(){

        for(let i = 0; i < this.vidas; i++){
            const margem = i * 20
            const posicao = this.xInicial * (1 + i)

            image(imgVida, posicao + margem, this.y, this.largura, this.altura)
        }        
    }

    ganhaVida() {
        if(this.vidas < total ){
            this.vidas++
        }
    }

    perdeVida(){
        this.vidas--
    }
}