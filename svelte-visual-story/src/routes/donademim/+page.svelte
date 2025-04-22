<script>
    import BirdFlight from '$lib/components/BirdFlight.svelte';
    import StoryTitulo from '$lib/components/StoryTitulo.svelte';
    import TextoLongo from '$lib/components/TextoLongo.svelte';
    import BlocoAnimado from '$lib/components/BlocoAnimado.svelte';
    import TextoNumerado from '$lib/components/TextoNumerado.svelte';
    import Thread from '$lib/components/Thread.svelte';
    import HeroHeader from '$lib/components/HeroHeader.svelte';
    import GloboPlayer from '$lib/components/GloboPlayer.svelte';
    import ImagemFull from '$lib/components/ImagemFull.svelte';

  // Exemplo opcional de GA4
  const ga4 = {
    user_id: '1234567890',
    endpoint_keys: {
      measurement_id: '', // pode deixar vazio
      client_id: '',      // pode deixar vazio
      api_secret: ''      // pode deixar vazio
    },
    event_params: {
      origem: 'pagina-g1'
    },
    user_properties: {
      tema: 'jornalismo'
    }
  };
</script>

<HeroHeader
titulo="Dona de mim"
linhaFina="Saiba tudo sobre a novela das 7"
bgImageDesk="https://s3.glbimg.com/v1/AUTH_8b29beb0cbe247a296f902be2fe084b6/2025/html/gshow/dona-de-mim/pagina/img/header-donademim.jpg"
bgImageMob="https://s3.glbimg.com/v1/AUTH_8b29beb0cbe247a296f902be2fe084b6/2025/html/gshow/dona-de-mim/pagina/img/header-donademim-mob.jpg"
position="end center"
animacao="fly"
corTitulo="var(--cor-preta)"
corLinhaFina="var(--cor-preta)"
tamanhoTitulo="0rem"
tamanhoLinhaFina="3rem"
alturaLinhaTitulo="15"
alturaLinhaTituloMob="1"
alturaLinhaLinhaFina="5"
alturaLinhaLinhaFinaMob="5"
/>

<StoryTitulo
  texto="Dona de mim | Sinopse"
  linhaFina=""
  largura="40%"
  alinhamento="left"
  vertical="top"
  cor="orange"
  peso="800"
  tamanhoDesktop="4rem"
  tamanhoMobile="3rem"
  lineHeightDesktop="1.1"
  lineHeightMobile="1.05"
  corLinhaFina="var(--cor-cinza-claro)"
  tamanhoLinhaFinaDesktop="1.2rem"
  tamanhoLinhaFinaMobile="1.6rem"
  lineHeightLinhaFinaDesktop="2"
  lineHeightLinhaFinaMobile="1.3"
  exibirLinha={true}
  corLinha="orange"
  larguraLinha="100px"
  alturaLinha="3px"
/>
<TextoLongo
texto="<p>A felicidade sempre encontra um caminho. E todo mundo tem feridas que só o amor consegue remendar. Moradora do bairro de São Cristóvão, na Zona Norte do Rio de Janeiro, Leona era estudante de Publicidade, quando ia se casar com Marlon, grávida de seis meses de Sophya, sua primeira filha, viu seu mundo desabar. Desde a perda do bebê, nada mais foi igual. Agora, sete anos depois, ela ocupa a cabeça enquanto tenta equilibrar as contas da casa em que mora com a avó Yara e irmã Stephany.</p><p>Leo, então, consegue emprego como babá na mansão da família Boaz, donos da tradicional marca de lingerie de fabricação própria, também em São Cristóvão. É assim que ela conhece Sofia, a filha de oito anos do patrão, Abel, e uma das herdeiras da fortuna da família Boaz. Empoderada e dona de si, Leo sempre tem boas intenções, mas acaba se metendo em diversas enrascadas.</p>"
largura="70%"
alinhamento="left"
tamanhoFonte="1.2rem"
entrelinha="1.9"
animar={true}
/> 

<GloboPlayer
  videoId="13491851"
  full={true}
  autoPlay={true}
  startMuted={true}
  skipDFP={true}
  ga4={ga4}
/>


<BirdFlight
imagemDesk="img/donademim-mob.jpg"
imagemMob="img/donademim-mob.jpg"
pontosDesk={[
  { x: 0, y: 0 },
  { x: 1000, y: 0 },
  { x: 2000, y: 0 },
  { x: 3000, y: 0 },
  { x: 4000, y: 0 },
  { x: 5000, y: 0 }
]}
pontosMob={[
  { x: 0, y: 0 },
  { x: 300, y: 0 },
  { x: 600, y: 0 },
  { x: 900, y: 0 },
  { x: 1200, y: 0 },
  { x: 1500, y: 0 },
  { x: 1800, y: 0 },
  { x: 2100, y: 0 },
  { x: 2400, y: 0 },
  { x: 2700, y: 0 },
  { x: 3000, y: 0 },
  { x: 3300, y: 0 },
  { x: 3600, y: 0 },
  { x: 3940, y: 0 }
]}
/>


<ImagemFull
  srcDesk="img/continua.jpg"
  srcMob="img/continua.jpg"
/>





  <TextoLongo
  texto="<p>O componente TextoLongo serve para contar a história, e nele vc vai aplicando os textos entre as tags P conforem as suas necessidades. </p><p>Você pode controlar a largura da caixa de texto se vai ser 60% ou mais ou menos de acordo com a sua necessidade, definir o alinhamento se é esquerda, direita ou centro e se vai ser animado ou não usando False ou True.</p>"
  largura="70%"
  alinhamento="left"
  tamanhoFonte="1.2rem"
  entrelinha="1.9"
  animar={true}
/> 

<BlocoAnimado
  alturaDesk="500px"
  alturaMob="50px"
  start="top 10%"
  animacao={{
    desk: {
      from: { scale: 0.1, opacity: 1, rotate: 0, y: 0, x: -1500 },
      to: { scale: 3, opacity: 1, rotate: 0, y: 0, x: 400, duration: 0.5, ease: 'expoScale(0.5,7,none)' }
    },
    mob: {
      from: { opacity: 0, rotate: 0, y: 0, x: -500, scale: 0.3 },
      to: { opacity: 1, rotate: 0, scale: 0.3, y: 0, x: 50, duration: 1, ease: 'expoScale(0.5,7,none)' }
    }
  }}
>
  <img src="https://s3.glbimg.com/v1/AUTH_8b29beb0cbe247a296f902be2fe084b6/2025/html/0estudos/svelte/templates/img/bala_1.gif" alt="Imagem animada" style="width: 100%; height: auto;" />
</BlocoAnimado>


<TextoNumerado
  numero="1 mi"
  texto="balas por diabalas por diabalas por diabalas por diabalas por diabalas por diabalas por dia"
  alinhamento="right"
  alinhamentoTexto="left"
  tamanhoNumeroDesk="8rem"
  tamanhoTextoDesk="2rem"
  tamanhoNumeroMob="3rem"
  tamanhoTextoMob="1.2rem"
  animacao={{
    desk: {
      from: { x: 215, y: 0, scale: 1, opacity: 0 },
      to: { x: 0, y: 0, scale: 1, opacity: 1, duration: 2, ease: 'power3.out' }
    },
    mob: {
      from: { x: 100, y: 0, opacity: 0 },
      to: { x: 160, y: 0, opacity: 1, duration: 1 }
    }
  }}
/> 


<TextoLongo
texto="<p>Dados do Censo 2022 divulgados nesta quinta-feira (17) mostram que 19% dos brasileiros vivem em vias com calçadas livres, e 15%, com acesso a cadeirantes. Um em cada três não têm nenhuma árvore no entorno de casa, e mais da metade das cidades não tem vias para ciclistas.  </p><p>Os dados levam em conta os 86% da população brasileira, ou 174 milhões de pessoas, que vivem em cidades e áreas urbanizadas, mesmo que na zona rural. </p>"
largura="60%"
alinhamento="left"
animar={true}
/> 

<Thread tweets={[
  {
    autor: "G1",
    usuario: "@g1",
    avatar: "/g1.png",
    verificado: true,
    texto: "🚨 O Brasil tem 1,7 milhão de ruas. Só 38% têm calçada, diz IBGE.",
    imagem: "/censo1.jpg",
    data: "10:32 · 17 de abr de 2025",
    respostas: 320,
    reposts: 1.200,
    curtidas: 3.900,
    views: "285 mil"
  },
  {
    autor: "G1",
    usuario: "@g1",
    avatar: "/g1.png",
    verificado: true,
    texto: "🧵 Veja os dados por tipo de pavimentação, iluminação e localização urbana.",
    imagem: "/censo2.jpg",
    data: "10:33 · 17 de abr de 2025",
    respostas: 110,
    reposts: 800,
    curtidas: 2.300,
    views: "193 mil"
  }
]} />





<TextoLongo
texto="<p>Dados do Censo 2022 divulgados nesta quinta-feira (17) mostram que 19% dos brasileiros vivem em vias com calçadas livres, e 15%, com acesso a cadeirantes. Um em cada três não têm nenhuma árvore no entorno de casa, e mais da metade das cidades não tem vias para ciclistas.  </p><p>Os dados levam em conta os 86% da população brasileira, ou 174 milhões de pessoas, que vivem em cidades e áreas urbanizadas, mesmo que na zona rural. </p>"
largura="60%"
alinhamento="left"
animar={true}
/> 

<Thread tweets={[
  {
    autor: "G1",
    usuario: "@g1",
    avatar: "/g1.png",
    verificado: true,
    texto: "🚨 O Brasil tem 1,7 milhão de ruas. Só 38% têm calçada, diz IBGE.",
    imagem: "/censo1.jpg",
    data: "10:32 · 17 de abr de 2025",
    respostas: 320,
    reposts: 1.200,
    curtidas: 3.900,
    views: "285 mil"
  },
  {
    autor: "G1",
    usuario: "@g1",
    avatar: "/g1.png",
    verificado: true,
    texto: "🧵 Veja os dados por tipo de pavimentação, iluminação e localização urbana.",
    imagem: "/censo2.jpg",
    data: "10:33 · 17 de abr de 2025",
    respostas: 110,
    reposts: 800,
    curtidas: 2.300,
    views: "193 mil"
  }
]} />


  <HeroHeader
    titulo="Oceano Invisível"
    linhaFina="Como os microplásticos estão tomando conta dos nossos mares — e por que isso importa"
    videoDesk="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
    videoMob="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
    posterDesk="https://s3.glbimg.com/v1/AUTH_8b29beb0cbe247a296f902be2fe084b6/2025/html/especiais/plastico/mapas/capa-desk.jpg"
    posterMob="https://s3.glbimg.com/v1/AUTH_8b29beb0cbe247a296f902be2fe084b6/2025/html/especiais/plastico/mapas/capa-mob.jpg"
    autoplay={true}
    muted={true}
    loop={true}
    animacao="fade"
    position="center center"
    corTitulo="#ffffff"
    corLinhaFina="#f4e7c4"
    tamanhoTitulo="4rem"
    tamanhoLinhaFina="1.4rem"
  />
