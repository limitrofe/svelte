<script>
  export let creditos = [
    { funcao: "Direção de arte", nome: "Fulano de Tal" },
    { funcao: "Desenvolvimento", nome: "Ciclano da Silva" },
    { funcao: "Pesquisa", nome: "Beltrano de Souza" },
    { funcao: "Edição", nome: "Maria Fictícia" }
  ];

  // Props para cor de fundo e de texto
  export let corFundo = "#7CC3F0";
  export let corTextoGeral = "#ffffff";
  export let corFuncao = "#02596C";
  export let corNome = "#077C9C";
</script>

<section
  class="creditos"
  style="background-color: {corFundo}; color: {corTextoGeral};"
>
  <div class="container">
    {#each creditos as c}
      <div class="linha-credito">
        <p class="funcao" style="color: {corFuncao}">{c.funcao}</p>
        <p class="nome" style="color: {corNome}">{c.nome}</p>
      </div>
    {/each}
  </div>
</section>

<style>
  .creditos {
    padding: 5vh 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .container {
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
  }

  .linha-credito {
    margin-bottom: 3rem;
    text-align: center;
  }

  .funcao {
    font-size: 1rem;
    margin: 0;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .nome {
    font-size: 2rem;
    font-weight: 600;
    margin: 0.2rem 0 0;
  }

  @media (max-width: 768px) {
    .nome {
      font-size: 1.5rem;
    }
    .funcao {
      font-size: 0.9rem;
    }
  }
</style>
