//function preload() {
  //loader = new Loader()
//}

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  somTitulo.loop()
  frameRate(40)
  jogo = new Jogos
  telaInicial = new TelaInicial
  jogo.setup()
  cenas = {
    jogo,
    telaInicial,
    gameOver
  }
  botaoGerenciador = new BotaoGerenciador('Iniciar', width / 2, height / 2, somTitulo, somDoJogo)
  
}

function keyPressed() {
  jogo.keyPressed(key)
}

function draw() {
  
  cenas[cenaAtual].draw()

  
}