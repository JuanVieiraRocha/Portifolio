document.getElementById("button").addEventListener("click", function(){
    document.querySelector(".popup").style.display = "flex";
})

document.querySelector(".close").addEventListener("click", function(){
    document.querySelector(".popup").style.display = "none" 
})

const gato = document.getElementById('gato');


let x = 0;

// Velocidade do gato (pixels por quadro)
const velocidade = 10;

function atualizarGato() {
  // Atualiza a posição do gato
  x += velocidade;

  // Define a posição do gato na tela
  gato.style.left = x + 'px';

  // Verifica se o gato chegou ao final da tela e reinicia a animação
  if (x > window.innerWidth) {
    x = -gato.width; // Reinicia fora da tela à esquerda
  }

  // Repete a animação em 60 quadros por segundo
  requestAnimationFrame(atualizarGato);
  
}

// Inicia a animação
atualizarGato();
