<script>
    import { onMount, onDestroy } from 'svelte';
  
    // Props obrigatórias e opcionais
    export let videoId;
    export let autoPlay = true;
    export let startMuted = true;
    export let skipDFP = false;
    export let ga4 = null;
  
    // Controle de tamanho
    export let full = false;
    export let width = '100%';
    export let height = '100%';
  
    let playerElement;
    let playerInstance;
  
    function createPlayer() {
      if (!window.WM || !window.WM.Player) {
        console.error('WM.Player ainda não está disponível.');
        return;
      }
  
      const config = {
        videosIDs: videoId,
        autoPlay,
        startMuted,
        skipDFP,
        width: full ? '100vw' : width,
        height: full ? '100vh' : height,
      };
  
      if (ga4) config.ga4 = ga4;
  
      playerInstance = new WM.Player(config);
      playerInstance.attachTo(playerElement);
    }
  
    onMount(() => {
      if (!videoId) {
        console.error('⚠️ É necessário informar o videoId!');
        return;
      }
  
      if (!window.WM) {
        const script = document.createElement('script');
        script.src = 'https://s3.glbimg.com/v1/AUTH_e1b09a2d222b4900a437a46914be81e5/api/stable/web/api.min.js';
        script.async = true;
        script.onload = () => {
          WM.playerAvailable.then(createPlayer);
        };
        document.body.appendChild(script);
      } else {
        WM.playerAvailable.then(createPlayer);
      }
    });
  
    onDestroy(() => {
      if (playerInstance?.destroy) {
        playerInstance.destroy();
      }
    });
  </script>
  
  <style>
    .player-wrapper {
      width: 100%;
      height: 100%;
    }
  
    .full {
      width: 100vw;
      height: 100vh;
      position: relative;
    }
  </style>
  
  <div class="player-wrapper {full ? 'full' : ''}" bind:this={playerElement}></div>
  