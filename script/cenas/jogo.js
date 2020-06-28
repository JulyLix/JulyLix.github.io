class Jogos {
    constructor(){
        //loader = new Loader
        this.inimigoAtual = 0
        //mapa = fita.mapa
             
    }
    

    setup(){

        matriz = new Matriz;
        pontuacao = new Pontuacao();
        casas = new Cenario(imgCasas, 5);
        muro = new Cenario(imgMuro, 8);
        vida = new Vida(7, 3)

        personagem = new Personagem(matriz.personagem, imgPersonagem, 0, 30, 170, 200, 440);
        const inimigo = new Inimigo(matriz.inimigo, imgInimigo, width - 135, 30, 125, 125, 540, 540, 10, 100);
        const inimigoGrande = new Inimigo(matriz.inimigoGrande, imgInimigoGrande, width - 52, 30, 220, 220, 1080, 1080, 15, 150)
        const inimigoVoador = new Inimigo(matriz.inimigoVoador, imgInimigoVoador, width - 100, 250, 210, 150, 810, 540, 10, 200)
        
      
        inimigos.push(inimigo)
        inimigos.push(inimigoGrande)
        inimigos.push(inimigoVoador)

    }

    keyPressed(key){
        if (key === 'w') {
            personagem.pula()
            somDoPulo.play()
          }
    }

    draw(){

        casas.exibe();
        muro.exibe();
        vida.draw()
        
        pontuacao.exibe()
        pontuacao.adicionarPonto()
        personagem.exibe();
        personagem.aplicaGravidade();

        //const linhAtual = fita.mapa[this.this.inimigoAtual]
        const inimigo = inimigos[this.inimigoAtual]
        const inimigoVisivel = inimigo.x < -inimigo.largura

        //inimigo.velocidade = this.inimigoAtual.velocidade

        inimigo.exibe()
        inimigo.move()
    
        if (inimigoVisivel){
            this.inimigoAtual++
        if (this.inimigoAtual > 2){
        this.inimigoAtual = 0
        }
        
    }


        if (personagem.estaColidindo(inimigo)) {
            
            vida.perdeVida()
            personagem.tornarInvencivel()
            if (vida.vidas <= 0){
                image(imgGameOver, width/2 - 200, height/3)
                noLoop()
                somDoJogo.stop();
            }
            }
    }
}