function preload () {
    imgPersonagem = loadImage('imagens/personagem/chibigirl.png');
    imgCasas = loadImage('imagens/cenario/casas.png');
    imgMuro = loadImage('imagens/cenario/muro.png');
    imgInimigo = loadImage('imagens/inimigos/inimigo.png');
    imgInimigoGrande = loadImage('imagens/inimigos/grande.png')
    imgInimigoVoador = loadImage('imagens/inimigos/voador.png')
    imgGameOver = loadImage('imagens/assets/game-over.png')
    imgTelaInicial = loadImage('imagens/assets/telaInicial.png')
    fonteTelaInicial = loadFont('imagens/assets/fonteTelaInicial.otf')
    imgVida = loadImage('imagens/assets/vida.png')
    imgMoeda = loadImage('imagens/assets/moeda.png')
    fita = loadJSON('fita/fita.json')
    
    somDoJogo = loadSound('sons/game.mp3');
    somTitulo = loadSound('sons/title.mp3')
    somDoPulo = loadSound('sons/somPulo.mp3');
}