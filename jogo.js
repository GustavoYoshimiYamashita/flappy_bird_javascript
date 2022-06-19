console.log('Flappy Bird');

const sprites = new Image()
sprites.src = 'sprites.png';

const canvas = document.querySelector('canvas')
const contexto = canvas.getContext('2d');

const planoDeFundo = {
    spriteX: 390,
    spriteY: 0,
    largura: 275,
    altura: 204,
    x: 0,
    y: canvas.height - 204,
    desenha(){
        contexto.fillStyle = '#70c5ce';
        contexto.fillRect(0,0, canvas.width, canvas.height);

        contexto.drawImage(
            sprites,
            planoDeFundo.spriteX, planoDeFundo.spriteY, // Posição X e Y na imagem
            planoDeFundo.largura, planoDeFundo.altura, // Posição X2 e Y2 na imagem
            planoDeFundo.x, planoDeFundo.y, // Aonde começar a imagem no canvas
            planoDeFundo.largura, planoDeFundo.altura, // Tamanho da imagem
        );

        contexto.drawImage(
            sprites,
            planoDeFundo.spriteX, planoDeFundo.spriteY, // Posição X e Y na imagem
            planoDeFundo.largura, planoDeFundo.altura, // Posição X2 e Y2 na imagem
            (planoDeFundo.x + planoDeFundo.largura), planoDeFundo.y, // Aonde começar a imagem no canvas
            planoDeFundo.largura, planoDeFundo.altura, // Tamanho da imagem
        );
    },
};

const chao = {
    spriteX: 0,
    spriteY: 610,
    largura: 224,
    altura: 112,
    x: 0,
    y: canvas.height - 112,
    desenha(){
        contexto.drawImage(
            sprites,
            chao.spriteX, chao.spriteY, // Posição X e Y na imagem
            chao.largura, chao.altura, // Posição X2 e Y2 na imagem
            chao.x, chao.y, // Aonde começar a imagem no canvas
            chao.largura, chao.altura, // Tamanho da imagem
        );

        contexto.drawImage(
            sprites,
            chao.spriteX, chao.spriteY, // Posição X e Y na imagem
            chao.largura, chao.altura, // Posição X2 e Y2 na imagem
            (chao.x + chao.largura), chao.y, // Aonde começar a imagem no canvas
            chao.largura, chao.altura, // Tamanho da imagem
        );
    },
};

const flappyBird = {
    spriteX: 0,
    spriteY: 0,
    largura: 33,
    altura: 24,
    x: 10,
    y: 50,  
    velocidade: 1,
    gravidade: 0.25,
    atualiza(){
        flappyBird.velocidade = flappyBird.velocidade + flappyBird.gravidade
        flappyBird.y = flappyBird.velocidade;
    },
    desenha(){
        contexto.drawImage(
            sprites,
            flappyBird.spriteX, flappyBird.spriteY, // Posição X e Y na imagem
            flappyBird.largura, flappyBird.altura, // Posição X2 e Y2 na imagem
            flappyBird.x, flappyBird.y, // Aonde começar a imagem no canvas
            flappyBird.largura, flappyBird.altura, // Tamanho da imagem
        );
    }
}


function loop(){
    planoDeFundo.desenha();
    chao.desenha();
    flappyBird.desenha();

    flappyBird.atualiza();

    requestAnimationFrame(loop);
}

loop();