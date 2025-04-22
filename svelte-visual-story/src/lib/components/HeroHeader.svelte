<script>
    import { onMount } from 'svelte';
    import gsap from 'gsap';
    import { ScrollTrigger } from 'gsap/ScrollTrigger';
  
    export let titulo = "";
    export let linhaFina = "";
    export let bgImageDesk = "";
    export let bgImageMob = "";
    export let videoDesk = "";
    export let videoMob = "";
    export let posterDesk = "";
    export let posterMob = "";
    export let autoplay = true;
    export let muted = true;
    export let loop = true;
    export let position = "center center";
    export let animacao = "fade";
  
    export let corTitulo = "white";
    export let corLinhaFina = "white";
    export let tamanhoTitulo = "3rem";
    export let tamanhoLinhaFina = "1.25rem";
    export let alturaLinhaTitulo = "1.1";
    export let alturaLinhaTituloMob = "1.2";
    export let alturaLinhaLinhaFina = "1.3";
    export let alturaLinhaLinhaFinaMob = "1.4";

    let textWrapper;
  
    onMount(() => {
      gsap.registerPlugin(ScrollTrigger);
  
      const animacoes = {
        fade: { opacity: 0 },
        fly: { y: 60, opacity: 0 },
        scale: { scale: 0.9, opacity: 0 }
      };
  
      const props = animacoes[animacao] || animacoes.fade;
  
      gsap.from(textWrapper, {
        scrollTrigger: {
          trigger: textWrapper,
          start: "top 80%",
          toggleActions: "play none none none"
        },
        ...props,
        duration: 0.8,
        ease: "power2.out"
      });
    });
  </script>
  
  <section class="hero-header">
    {#if videoDesk}
      <video
        class="bg-video"
        autoplay={autoplay}
        muted={muted}
        loop={loop}
        playsinline
        poster={posterDesk}
      >
        <source src={videoDesk} media="(min-width: 769px)" type="video/mp4" />
        <source src={videoMob} media="(max-width: 768px)" type="video/mp4" />
      </video>
    {:else}
      <picture>
        {#if bgImageMob}
          <source srcset={bgImageMob} media="(max-width: 768px)" />
        {/if}
        <img class="bg-image" src={bgImageDesk} alt="" />
      </picture>
    {/if}
  
    <div
      class="text-wrapper"
      bind:this={textWrapper}
      style="
      --position: {position};
      --cor-titulo: {corTitulo};
      --cor-linha: {corLinhaFina};
      --size-titulo: {tamanhoTitulo};
      --size-linha: {tamanhoLinhaFina};
      --lh-titulo: {alturaLinhaTitulo};
      --lh-titulo-mob: {alturaLinhaTituloMob};
      --lh-linha: {alturaLinhaLinhaFina};
      --lh-linha-mob: {alturaLinhaLinhaFinaMob};"
      >
      {#if titulo}<h1>{titulo}</h1>{/if}
      {#if linhaFina}<p class="linha-fina">{linhaFina}</p>{/if}
    </div>
  </section>
  
  <style>
    .hero-header {
      position: relative;
      width: 100%;
      height: 100vh;
      overflow: hidden;
    }
  
    .bg-image,
    .bg-video {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      z-index: 0;
    }
  
    .text-wrapper {
      position: absolute;
      z-index: 1;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      /* padding: 2rem; */
      text-align: left;
      width: 100%;
      height: 100%;
      
    }
  
    /* Posicionamento dinâmico */
    .text-wrapper[style*="top"] {
      justify-content: flex-start;
    }
  
    .text-wrapper[style*="bottom"] {
      justify-content: flex-end;
    }
  
    .text-wrapper[style*="left"] {
      align-items: flex-start;
      text-align: left;
    }
  
    .text-wrapper[style*="right"] {
      align-items: flex-end;
      text-align: right;
    }
  
    .text-wrapper[style*="center"] {
      align-items: center;
      justify-content: center;
      text-align: center;
    }
  
    h1 {
  margin: 0;
  font-size: var(--size-titulo);
  line-height: var(--lh-titulo, 1.1);
  color: var(--cor-titulo);
}

.linha-fina {
  margin-top: 0rem;
  font-size: var(--size-linha);
  line-height: var(--lh-linha, 1.3);
  color: var(--cor-linha);
}

@media (max-width: 768px) {
  h1 {
    font-size: calc(var(--size-titulo, 3rem) * 0.7);
    line-height: var(--lh-titulo-mob, 1.2);
  }

  .linha-fina {
    font-size: calc(var(--size-linha, 1.25rem) * 0.9);
    line-height: var(--lh-linha-mob, 1.4);
  }
}
  </style>
  