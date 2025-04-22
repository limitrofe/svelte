<script>
  import { fade } from 'svelte/transition';

  export let texto = ""; // texto em HTML
  export let largura = "60%"; // largura no desktop
  export let alinhamento = "left"; // left | center | right
  export let animar = false;
  export let tamanhoFonte = "1.2rem";
  export let entrelinha = "1.7";
</script>

<style>
  .texto-longo {
    font-family: var(--fonte-primaria);
    color: var(--cor-preta);
    margin: 3rem auto;
    white-space: pre-line;
    width: 90%;
    text-wrap: balance;
    font-size: var(--tamanho-fonte, 1.2rem);
    line-height: var(--entrelinha, 1.7);
  }

  @media (min-width: 768px) {
    .texto-longo {
      width: var(--largura-desktop);
    }
  }

  .texto-longo :global(p) {
    margin-bottom: 1.2rem;
    text-wrap: balance;
  }

  .texto-longo :global(b),
  .texto-longo :global(strong) {
    font-weight: bold;
  }

  .texto-longo :global(i),
  .texto-longo :global(em) {
    font-style: italic;
  }

  .texto-longo :global(u) {
    text-decoration: underline;
  }

  .texto-longo :global(a) {
    color: var(--cor-link, blue);
    text-decoration: underline;
  }
</style>

{#if animar}
  <div
    class="texto-longo"
    style="
      --largura-desktop: {largura};
      --tamanho-fonte: {tamanhoFonte};
      --entrelinha: {entrelinha};
      text-align: {alinhamento};
    "
    in:fade={{ duration: 500 }}
  >
    {@html texto}
  </div>
{:else}
  <div
    class="texto-longo"
    style="
      --largura-desktop: {largura};
      --tamanho-fonte: {tamanhoFonte};
      --entrelinha: {entrelinha};
      text-align: {alinhamento};
    "
  >
    {@html texto}
  </div>
{/if}
