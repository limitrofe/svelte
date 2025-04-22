<script>
    import HeroHeader from '$lib/components/HeroHeader.svelte';
    import BlocoAnimado from '$lib/components/BlocoAnimado.svelte';
    import TextoNumerado from '$lib/components/TextoNumerado.svelte';

  </script>
  
  <HeroHeader
  titulo="Como são escolhidos os filmes da ‘Sessão da Tarde’?"
  linhaFina="Uma jornada visual pelas tardes do brasileiro"
  bgImageDesk="/img/bg-desk.jpg"
  bgImageMob="/img/bg-mob.jpg"
  videoDesk="/videos/terra-desk.mp4"
  videoMob="/videos/terra-mob.mp4"
  posterDesk="/img/poster-desk.jpg"
  posterMob="/img/poster-mob.jpg"
  position="center center"
  animacao="fly"
  corTitulo="var(--cor-preta)"
  corLinhaFina="var(--cor-preta)"
  tamanhoTitulo="4rem"
  tamanhoLinhaFina="1.5rem"
  alturaLinhaTitulo="2"
  alturaLinhaTituloMob="1"
  alturaLinhaLinhaFina="2"
  alturaLinhaLinhaFinaMob="1.2"
/>

<TextoNumerado
  numero="1"
  texto="A equipe da Globo tem um catálogo de filmes, que são tagueados por gêneros e temas."
  alinhamento="right"

  animacao={{
    from: { opacity: 0, y: 80 },
    to: { opacity: 1, y: 0, duration: 1.3, ease: 'power3.out' },
    start: 'top 85%'
  }}
/>

  <BlocoAnimado
    animacao={{
      from: { scale: 0.5, opacity: 0, rotate: -15, y: 200 },
      to: { scale: 1, opacity: 1, rotate: 0, y: 0, duration: 1.5, ease: 'power3.out' }
    }}
    start="top 120%"
  >
    <img src="img/img1.png" alt="Imagem animada" style="width: 100%; height: auto;" />
  </BlocoAnimado>
<TextoNumerado
  numero="2"
  texto="Com esse catálogo, a ideia é manter uma programação diversa, incluindo filmes de vários países, animações e obras nacionais."
  animacao={{
    from: { opacity: 0, y: 80 },
    to: { opacity: 1, y: 0, duration: 1.3, ease: 'power3.out' },
    start: 'top 85%'
  }}
/>

  <BlocoAnimado
    animacao={{
      from: { scale: 0.5, opacity: 0, rotate: -15, y: 50, x: -300 },
      to: { scale: 1.5, opacity: 1, rotate: 0, y: 0, x: 20, duration: 6.5, ease: 'power3.out' }
    }}
    start="top 120%"
  >
    <img src="img/img2.png" alt="Imagem animada" style="width: 60%; height: auto;display: block; margin: 0 auto;" />
  </BlocoAnimado>
  
<TextoNumerado
  numero="3"
  texto="A equipe vê os índices de audiência, resultados de pesquisas de consumidores e começa a escolha."
  alinhamento="center"

  animacao={{
    from: { opacity: 0, y: 80 },
    to: { opacity: 1, y: 0, duration: 1.3, ease: 'power3.out' },
    start: 'top 85%'
  }}
/>

  <BlocoAnimado
    animacao={{
      from: { scale: 0.5, opacity: 0, rotate: -15, y: 200, x: 200 },
      to: { scale: 1, opacity: 1, rotate: 0, y: 0, x: 0, duration: 1.5, ease: 'power3.out' }
    }}
    start="top 120%"
  >
    <img src="img/img3.png" alt="Imagem animada" style="width: 100%; height: auto;" />
  </BlocoAnimado>
  
  
<TextoNumerado
  numero="4"
  texto="Então, é feito um planejamento anual, selecionando mais ou menos 300 filmes para exibir ao longo do ano. Essa programação é revisada no início de cada trimestre."
  alinhamento="left"

  animacao={{
    from: { opacity: 0, y: 80 },
    to: { opacity: 1, y: 0, duration: 1.3, ease: 'power3.out' },
    start: 'top 85%'
  }}
/>

  <BlocoAnimado
    animacao={{
      from: { scale: 0.5, opacity: 0, rotate: -15, y: -10, x: -30 },
      to: { scale: 1, opacity: 1, rotate: 0, y: 0, x: 0, duration: 1.5, ease: 'power3.out' }
    }}
    start="top 100%"
  >
    <img src="img/img4.png" alt="Imagem animada" style="width: 100%; height: auto;" />
  </BlocoAnimado>



  <TextoNumerado
  numero="5"
  texto="Aliás, é proibido reprisar um título em 6 meses na “Sessão da Tarde”."
  alinhamento="right"

  animacao={{
    from: { opacity: 0, y: 80 },
    to: { opacity: 1, y: 0, duration: 1.3, ease: 'power3.out' },
    start: 'top 85%'
  }}
/>

  <BlocoAnimado
    animacao={{
      from: { scale: 0.5, opacity: 0, rotate: -55, y: -50, x: 0 },
      to: { scale: 1, opacity: 1, rotate: 0, y: 0, x: 0, duration: 1.5, ease: 'power3.out' }
    }}
    start="top 100%"
  >
    <img src="img/img5.png" alt="Imagem animada" style="width: 100%; height: auto;" />
  </BlocoAnimado>
  
  <TextoNumerado
  numero="6"
  texto="A época do ano também faz diferença. No início do ano, filmes leves e esperançosos vão bem; já em julho e dezembro, época de férias, é bom priorizar animações e obras para toda a família."
  alinhamento="center"

  animacao={{
    from: { opacity: 0, y: 80 },
    to: { opacity: 1, y: 0, duration: 1.3, ease: 'power3.out' },
    start: 'top 85%'
  }}
/>

  <BlocoAnimado
    animacao={{
      from: { scale: 0.5, opacity: 0, rotate: -15, y: -10, x: 330 },
      to: { scale: 1, opacity: 1, rotate: 0, y: 0, x: 0, duration: 1.5, ease: 'power3.out' }
    }}
    start="top 100%"
  >
    <img src="img/img6.png" alt="Imagem animada" style="width: 100%; height: auto;" />
  </BlocoAnimado>
  
  <TextoNumerado
  numero="7"
  texto="Semanalmente, a equipe revê o planejamento de acordo com o noticiário, e pode haver alterações. Por exemplo, quando Fernanda Torres foi indicada ao Oscar, a “Sessão da Tarde” alterou a programação para exibir “Tapas e Beijos”."
  alinhamento="center"

  animacao={{
    from: { opacity: 0, y: 80 },
    to: { opacity: 1, y: 0, duration: 1.3, ease: 'power3.out' },
    start: 'top 85%'
  }}
/>

  <BlocoAnimado
    animacao={{
      from: { scale: 0.5, opacity: 0, rotate: -15, y: -200, x: -130 },
      to: { scale: 1, opacity: 1, rotate: 0, y: 0, x: 0, duration: 1.5, ease: 'power3.out' }
    }}
    start="top 100%"
  >
    <img src="img/img7.png" alt="Imagem animada" style="width: 100%; height: auto;" />
  </BlocoAnimado>
  

  <style>
:root {
  /* Cores da marca */
  --cor-preta: #272a3f;
  --cor-vermelha: #e73e8f;
  --cor-vermelha-clara: #e73e8f;
  --cor-vermelha-escura: #fdd86a;
  --cor-branca: #708db1;

  /* Tipografia */
  --fonte-primaria: 'Globotipo', sans-serif;
}


body {
  font-family: var(--fonte-primaria);
  background-color: var(--cor-branca); /* ✅ fundo da página */
  color: var(--cor-preta);              /* ✅ texto padrão */
  margin: 0;
  padding: 0;
  line-height: 1.6;
}

h1, h2, h3, .destaque {
  color: var(--cor-vermelha);          /* ✅ cor padrão de título/destaque */
  font-weight: 700;
  font-family: var(--fonte-primaria);
  margin-top: 0;
}

p {
  font-size: 1.125rem;
  font-weight: 400;
}

  </style>