<script>
    import { onMount } from 'svelte';
    import { gsap } from 'gsap';
    import { ScrollTrigger } from 'gsap/ScrollTrigger';
  
    gsap.registerPlugin(ScrollTrigger);
  
    export let imagemDesk = '';
    export let imagemMob = '';
    export let pontosDesk = [];
    export let pontosMob = [];
    export let alturaMaskDesktop = 900;
    export let alturaMaskMobile = 600;
    export let margemFinal = 0;
  
    let container;
    let imagemEl;
    let scrollArea;
  
    let imagemAtual = '';
    let pontosAtuais = [];
  
    function lerp(a, b, t) {
      return a + (b - a) * t;
    }
  
    function getPositionFromProgress(p, pontos) {
      const total = pontos.length - 1;
      const indexFloat = p * total;
      const index = Math.floor(indexFloat);
      const t = indexFloat - index;
  
      if (index >= total) return pontos[total];
  
      const atual = pontos[index];
      const prox = pontos[index + 1];
  
      return {
        x: lerp(atual.x, prox.x, t),
        y: lerp(atual.y, prox.y, t)
      };
    }
  
    onMount(() => {
      const isMobile = window.innerWidth <= 768;
      const alturaMask = isMobile ? alturaMaskMobile : alturaMaskDesktop;
  
      imagemAtual = isMobile ? imagemMob : imagemDesk;
      pontosAtuais = isMobile ? pontosMob : pontosDesk;
  
      const scrollDuration = pontosAtuais.length * 800;
      scrollArea.style.height = `${scrollDuration + margemFinal}px`;
  
      ScrollTrigger.create({
        trigger: container,
        start: 'top top',
        end: `+=${scrollDuration}`,
        pin: true,
        scrub: true,
        onUpdate: self => {
          const { x, y } = getPositionFromProgress(self.progress, pontosAtuais);
          gsap.set(imagemEl, { x: -x, y: -y });
        }
      });
    });
  </script>
  
  <style>
    .birdflight-wrapper {
      position: relative;
      width: 100%;
    }
  
    .birdflight-container {
      position: relative;
      overflow: hidden;
      width: 100%;
      height: 100vh;
      max-width: 100vw;
      margin: 0 auto;
    }
  
    .birdflight-imagem {
      position: absolute;
      top: 0;
      left: 0;
      width: auto;
      height: 100vh;
      will-change: transform;
    }
  
    @media (max-width: 768px) {
      .birdflight-container {
        height: 100vh;
        width: 100vw;
      }
    }
  
    .scrollarea {
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
      pointer-events: none;
      z-index: -1;
    }
  </style>
  
  <div class="birdflight-wrapper">
    <div class="birdflight-container" bind:this={container}>
      <img bind:this={imagemEl} class="birdflight-imagem" src={imagemAtual} alt="Sobrevoo" />
    </div>
    <div class="scrollarea" bind:this={scrollArea}></div>
  </div>
  