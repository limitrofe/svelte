<script>
    import BirdFlight from '$lib/components/BirdFlight.svelte';
    import StoryTitulo from '$lib/components/StoryTitulo.svelte';
    import TextoLongo from '$lib/components/TextoLongo.svelte';
    import BlocoAnimado from '$lib/components/BlocoAnimado.svelte';
    import TextoNumerado from '$lib/components/TextoNumerado.svelte';
    import Tweet from '$lib/components/Tweet.svelte';
    import Thread from '$lib/components/Thread.svelte';
    import TikTokEmulator from '$lib/components/TikTokEmulator.svelte';
    import HeroHeader from '$lib/components/HeroHeader.svelte';

const meusVideos = [
  'https://s3.glbimg.com/v1/AUTH_8b29beb0cbe247a296f902be2fe084b6/2025/html/0estudos/svelte/templates/videos/1.mp4',
  'https://s3.glbimg.com/v1/AUTH_8b29beb0cbe247a296f902be2fe084b6/2025/html/0estudos/svelte/templates/videos/2.mp4'  
  
];
</script>
<BirdFlight
imagemDesk="img/bird.png"
imagemMob="img/bird-mob.jpg"
pontosDesk={[
  { x: 0, y: 0 },
  { x: 800, y: 400 },
  { x: 600, y: 1000 },
  { x: 2600, y: 1400 },
  { x: 4000, y: 2400 },
  { x: 3000, y: 3000 },
  { x: 2500, y: 4500 },
  { x: 3000, y: 4000 }
]}
pontosMob={[
  { x: 0, y: 0 },
  { x: 300, y: 200 },
  { x: 1000, y: 800 },
  { x: 900, y: 1200 },
  { x: 1200, y: 1000 },
  { x: 300, y: 200 },
  { x: 1000, y: 800 },
  { x: 900, y: 1200 },
  { x: 1200, y: 1000 }
]}
/>


<StoryTitulo
  texto="StoryTitulo - é o componente do svelte"
  linhaFina="Aqui vc aplica a linha fina, define a largura do componente, os tamanhos dos textos e entrelinhas, além do alinhamento."
  largura="60%"
  alinhamento="center"
  vertical="top"
  cor="var(--cor-vermelha)"
  peso="800"
  tamanhoDesktop="6rem"
  tamanhoMobile="3rem"
  corLinhaFina="var(--cor-cinza-claro)"
  tamanhoLinhaFinaDesktop="1.8rem"
  tamanhoLinhaFinaMobile="1.6rem"
  exibirLinha={true}
  corLinha="var(--cor-vermelha)"
  larguraLinha="100px"
  alturaLinha="3px"
/>



  <TextoLongo
  texto="<p>O componente TextoLongo serve para contar a história, e nele vc vai aplicando os textos entre as tags P conforem as suas necessidades. </p><p>Você pode controlar a largura da caixa de texto se vai ser 60% ou mais ou menos de acordo com a sua necessidade, definir o alinhamento se é esquerda, direita ou centro e se vai ser animado ou não usando False ou True.</p>"
  largura="60%"
  alinhamento="left"
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



<TikTokEmulator videos={meusVideos}  />


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
