//function preload() {
  //loader = new Loader()
//}

function setup() {
  createCanvas(windowWidth, windowHeight);

  somTitulo.play()
  frameRate(40)
  jogo = new Jogos
  telaInicial = new TelaInicial
  jogo.setup()
  cenas = {
    jogo,
    telaInicial
  }
  botaoGerenciador = new BotaoGerenciador('Iniciar', width / 2, height / 2)
}

function keyPressed() {
  jogo.keyPressed(key)
}

function draw() {
  
  cenas[cenaAtual].draw()

  
}