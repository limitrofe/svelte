<script>
  import { onMount } from 'svelte';
  import gsap from 'gsap';
  import { ScrollTrigger } from 'gsap/ScrollTrigger';

  export let animacao = {
    desk: false,
    mob: false
  };

  export let start = 'top 85%'; // ✅ agora vai funcionar!
  export let toggleActions = 'play none none reverse';

  export let alturaDesk = '100vh';
  export let alturaMob = '100vh';

  let bloco;
  let elemento;
  let isMobile = false;
  let altura = alturaDesk;

  onMount(() => {
    if (typeof window !== 'undefined') {
      isMobile = window.innerWidth < 768;
      altura = isMobile ? alturaMob : alturaDesk;

      const anim = isMobile ? animacao.mob : animacao.desk;

      if (anim) {
        gsap.registerPlugin(ScrollTrigger);

        const from = anim.from || { opacity: 0, y: 100 };
        const to = anim.to || { opacity: 1, y: 0, duration: 1, ease: 'power2.out' };

        gsap.fromTo(
          elemento,
          from,
          {
            ...to,
            scrollTrigger: {
              trigger: bloco,
              start, // ✅ agora sendo usado corretamente
              toggleActions,
              markers: false
            }
          }
        );
      }
    }
  });
</script>

<style>
  .bloco-visual-animado {
    width: 100vw;
    position: relative;
    overflow: hidden;
  }

  .animado {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    will-change: transform;
  }
</style>

<div class="bloco-visual-animado" bind:this={bloco} style="height: {altura}">
  <div class="animado" bind:this={elemento}>
    <slot />
  </div>
</div>
