<script>
  import { fly, fade } from 'svelte/transition';

  export let texto = "";
  export let autor = "";
  export let fonte = "";

  export let corFundo = "var(--cor-preta)";
  export let corTexto = "var(--cor-vermelha-clara)";
  export let corDestaque = "var(--cor-branca)";
  export let corStroke = corTexto;
  export let corAssinatura = "var(--cor-branca)";

  export let animar = true; // ativar/desativar animação
</script>

<style>
  .blockquote-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 4rem 1rem;
  }

  .blockquote {
    position: relative;
    font-family: var(--fonte-primaria);
    max-width: 900px;
    width: 100%;
  }

  .blockquote h1 {
    font-family: var(--fonte-primaria);
    font-style: italic;
    font-weight: 400;
    font-size: 2rem;
    line-height: 1.3;
    margin: 0;
    border: 2px solid var(--stroke);
    border-radius: 20px;
    padding: 30px;
    position: relative;
    color: var(--texto);
  }

  .blockquote h1 span.branco {
    color: var(--destaque);
  }

  .blockquote h1:after {
    content: "";
    position: absolute;
    border: 2px solid var(--stroke);
    border-radius: 0 100% 0 0;
    width: 60px;
    height: 60px;
    bottom: -62px;
    left: 50px;
    border-bottom: none;
    border-left: none;
    z-index: 3;
  }

  .blockquote h1:before {
    content: "";
    position: absolute;
    width: 80px;
    border: 6px solid var(--fundo);
    bottom: -3px;
    left: 50px;
    z-index: 2;
  }

  .blockquote h4 {
    font-family: var(--fonte-primaria);
    font-style: italic;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.5;
    margin: 0;
    padding-top: 30px;
    margin-left: 150px;
    padding-left: 12px;
    z-index: 1;
    color: var(--assinatura);
  }

  .blockquote h4:first-letter {
    margin-left: -12px;
  }

  @media (min-width: 600px) {
    .blockquote h1 {
      font-size: 2.4rem;
      line-height: 1.4;
    }

    .blockquote h4 {
      font-size: 1.1rem;
    }
  }
</style>

{#if animar}
  <div
    class="blockquote-wrapper"
    style="
      --fundo: {corFundo};
      --texto: {corTexto};
      --destaque: {corDestaque};
      --stroke: {corStroke};
      --assinatura: {corAssinatura};
      background-color: {corFundo};
    "
    in:fly={{ y: 40, duration: 600 }}
    out:fade={{ duration: 300 }}
  >
    <div class="blockquote">
      <h1>{@html texto}</h1>
      <h4>— {autor}<br /><em>{fonte}</em></h4>
    </div>
  </div>
{:else}
  <div
    class="blockquote-wrapper"
    style="
      --fundo: {corFundo};
      --texto: {corTexto};
      --destaque: {corDestaque};
      --stroke: {corStroke};
      --assinatura: {corAssinatura};
      background-color: {corFundo};
    "
  >
    <div class="blockquote">
      <h1>{@html texto}</h1>
      <h4>— {autor}<br /><em>{fonte}</em></h4>
    </div>
  </div>
{/if}
