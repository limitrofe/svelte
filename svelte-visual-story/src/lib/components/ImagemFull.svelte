<script>
    export let srcDesk = '';
    export let srcMob = '';
  </script>
  
  <style>
    :global(body) {
      margin: 0;
      padding: 0;
    }
  
    .imagem-full {
      width: 100vw;
      height: auto;
      overflow: hidden;
    }
  
    .imagem-full img {
      width: 100%;
      height: auto;
      object-fit: cover;
      display: block;
    }
  </style>
  
  <div class="imagem-full">
    <picture>
      <source srcset={srcMob} media="(max-width: 768px)" />
      <source srcset={srcDesk} media="(min-width: 769px)" />
      <img src={srcDesk} alt="" loading="lazy" />
    </picture>
  </div>
  