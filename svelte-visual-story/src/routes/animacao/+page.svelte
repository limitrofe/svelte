<script>
    import ScrollAnimacao from '$lib/components/ScrollAnimacao.svelte';
  
    const animacoes = [
      {
        alvo: '.img1',
        start: 'top 90%',
        animacao: {
          from: { x: -200, opacity: 0 },
          to: { x: 0, opacity: 1, duration: 1 }
        }
      },
      {
        alvo: '.img2',
        start: 'top 80%',
        animacao: {
          from: { y: 200, opacity: 0 },
          to: { y: 0, opacity: 1, duration: 1 }
        }
      },
      {
        alvo: '.img3',
        start: 'top center',
        animacao: {
          from: { x: 200, opacity: 0 },
          to: { x: 0, opacity: 1, duration: 1 }
        }
      },
      {
        alvo: '.img4',
        start: 'top 70%',
        animacao: {
          from: { scale: 0.5, opacity: 0 },
          to: { scale: 1, opacity: 1, duration: 1 }
        }
      }
    ];
  </script>
  
  <ScrollAnimacao
    alturaDesktop={5000}
    alturaMobile={4000}
    animacoesDesktop={animacoes}
    animacoesMobile={animacoes}
  >
  
    <img class="img1" src="img/img1.png" alt="" />
    <img class="img2" src="img/img2.png" alt="" />
    <img class="img3" src="img/img3.png" alt="" />
    <img class="img4" src="img/img4.png" alt="" />
  </ScrollAnimacao>
  
  <style>
    :global(body) {
      background-color: #748db1;
      margin: 0;
    }
  
    img {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      width: 300px;
    }
  
    .img1 { top: 500px; }
    .img2 { top: 1200px; }
    .img3 { top: 2000px; }
    .img4 { top: 2800px; }
  </style>
  