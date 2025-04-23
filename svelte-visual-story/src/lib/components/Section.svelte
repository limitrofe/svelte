<script>
    export let fundo = "transparent";
    export let padding = "4rem 0";
    export let largura = "100vw";
  </script>
  
  <div
    class="section"
    style="
      background: {fundo};
      padding: {padding};
      width: {largura};
    "
  >
    <slot />
  </div>
  
  <style>
    .section {
      position: relative;
      margin: 0 auto;
      overflow: hidden;
    }
  </style>
  