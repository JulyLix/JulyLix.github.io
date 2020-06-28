class Moedas{
  constructor(imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite, velocidade, delay){
    
    this.velocidade = velocidade;
    this.delay = delay
    this.x = width + this.delay
    this. imagem = imagem
    this.variacaoY = variacaoY
    this.largura =larguraSprite
    this.altura = altura
    this.larguraSprite = larguraSprite
    this.alturaSprite = alturaSprite
  }
  
  exibe() {
    image(this.imagem, this.x, this.variacaoY, this.largura, this.altura, this.larguraSprite, this.alturaSprite);
    }

  move(){
    this.x = this.x - this.velocidade
    
    if(this.x < -this.largura - this.delay){
      this.x = width
    }
  }

}