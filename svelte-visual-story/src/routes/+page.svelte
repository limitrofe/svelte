<script>
  import StoryTitulo from '$lib/components/StoryTitulo.svelte';
  import TextoLongo from '$lib/components/TextoLongo.svelte';
  import ScrollVideoT from '$lib/components/ScrollVideoT.svelte';  
      import Creditos from '$lib/components/Creditos.svelte';
      import ImagemSequencia from '$lib/components/ImagemSequencia.svelte';

</script>


<main>
 
  <!-- <HeroHeader
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
    position="bottom bottom"
    corTitulo="#ffffff"
    corLinhaFina="#f4e7c4"
    tamanhoTitulo="4rem"
    tamanhoLinhaFina="1.4rem"
  />
  <TextoLongo
  texto="<p>O plástico está por toda parte: nos oceanos, nos alimentos, no ar.</p><p>Mas o que podemos fazer diante de uma ameaça invisível?</p>"
  largura="60%"
  alinhamento="left"
  animar={true}
/>
  <ScrollBloco
    texto="Você provavelmente nunca viu um microplástico. Eles são invisíveis a olho nu, flutuam por oceanos, rios e até no ar que respiramos. Mas são uma ameaça real — persistente, invisível e cada vez mais presente no nosso cotidiano. Essa é a história de como pequenas partículas estão mudando o futuro do planeta."
    animacao="fly"
    y={20}
    delay={0.2}
  />
  <TextoLongo
  texto="<p>Você provavelmente nunca viu um microplástico. Eles são invisíveis a olho nu, flutuam por oceanos, rios e até no ar que respiramos. Mas são uma ameaça real — persistente, invisível e cada vez mais presente no nosso cotidiano. Essa é a história de como pequenas partículas estão mudando o futuro do planeta. Você provavelmente nunca viu um microplástico. Eles são invisíveis a olho nu, flutuam por oceanos, rios e até no ar que respiramos. Mas são uma ameaça real — persistente, invisível e cada vez mais presente no nosso cotidiano. Essa é a história de como pequenas partículas estão mudando o futuro do planeta.</p>"
  largura="60%"
  alinhamento="left"
  animar={true}
/>
<FraseVisual
  texto="Design é quando <span class='branco'>função</span> encontra <span class='branco'>forma</span>."
  autor="Jared Spool"
  fonte="Web Site Usability: A Designer's Guide"
  corFundo="var(--cor-vermelha)"
  corTexto="var(--cor-preta)"
  corDestaque="var(--cor-preta)"
  corStroke="var(--cor-vermelha-clara)"
  corAssinatura="var(--cor-branca)"
  animar={true}
/>


<TextoLongo
  texto="<p>O plástico está por toda parte: nos oceanos, nos alimentos, no ar.</p><p>Mas o que podemos fazer diante de uma ameaça invisível?</p>"
  largura="60%"
  alinhamento="left"
  animar={true}
/> -->


  <!-- TÍTULO SEÇÃO 1 -->
  <StoryTitulo
  texto="A rua do brasileiro"
  linhaFina="Maioria da população de áreas urbanas vive em vias pavimentadas e iluminadas, com calçadas com obstáculos e sem rampas para cadeirantes e ciclovias, mostra IBGE."
  largura="70%"
  alinhamento="left"
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


  <!-- IMAGEM COM LEGENDA -->
  <!-- <ScrollImagem
    srcDesk="https://s3.glbimg.com/v1/AUTH_8b29beb0cbe247a296f902be2fe084b6/2025/html/especiais/plastico/mapas/belem-desk.jpg"
    srcMob="https://s3.glbimg.com/v1/AUTH_8b29beb0cbe247a296f902be2fe084b6/2025/html/especiais/plastico/mapas/belem-mob.jpg"
    alt="Rede de pesca flutuando"
    legenda="Rede de pesca abandonada à deriva na costa atlântica"
    credito="Foto: Ocean Watchers / G1"
    animacao="fly"
    largura="80%"     
    y={60}
    delay={0.4}
  />
  <TextoLongo
  texto="<p>O plástico está por toda parte: nos oceanos, nos alimentos, no ar.</p><p>Mas o que podemos fazer diante de uma ameaça invisível?</p>"
  largura="60%"
  alinhamento="left"
  animar={true}
/> -->

<TextoLongo
texto="<p>Dados do Censo 2022 divulgados nesta quinta-feira (17) mostram que 19% dos brasileiros vivem em vias com calçadas livres, e 15%, com acesso a cadeirantes. Um em cada três não têm nenhuma árvore no entorno de casa, e mais da metade das cidades não tem vias para ciclistas.  </p><p>Os dados levam em conta os 86% da população brasileira, ou 174 milhões de pessoas, que vivem em cidades e áreas urbanizadas, mesmo que na zona rural. </p>"
largura="60%"
alinhamento="left"
animar={true}
/> 
<!-- PARÁGRAFO LONGO -->
  <!-- <ScrollBloco
    texto="O Instituto Brasileiro de Geografia e Estatística (IBGE) divulgou nesta quinta-feira (17) os dados da pesquisa <em>Características Urbanísticas do Entorno dos Domicílios</em>, realizada com base no Censo 2022. O levantamento mostra as condições das vias onde vivem os brasileiros. "
    animacao="fly"
    x={-100}
    delay={0.3}
  /> -->

  <!-- TRANSIÇÃO COM IMAGENS -->
  <!-- <section class="scrolly-wrapper">

  <ScrollEtapasTransicao
    grupos={[
      {
        imagem: "https://s3.glbimg.com/v1/AUTH_8b29beb0cbe247a296f902be2fe084b6/2025/html/especiais/foz-do-amazonas/g1_esp_foz-amazonas_abre.png",
        textos: [
          "abc"
        ]
      },
      {
        imagem: "https://s3.glbimg.com/v1/AUTH_8b29beb0cbe247a296f902be2fe084b6/2025/html/especiais/foz-do-amazonas/g1_esp_foz-amazonas_tela_01.png",
        textos: ["abc"
        ]
      },
      {
        imagem: "https://s3.glbimg.com/v1/AUTH_8b29beb0cbe247a296f902be2fe084b6/2025/html/especiais/foz-do-amazonas/g1_esp_foz-amazonas_tela_02.png",
        textos: [
          "abc"
        ]
      },
      {
        imagem: "https://s3.glbimg.com/v1/AUTH_8b29beb0cbe247a296f902be2fe084b6/2025/html/especiais/foz-do-amazonas/g1_esp_foz-amazonas_tela_03.png",
        textos: [
          "abc"
        ]
      },
      {
        imagem: "https://s3.glbimg.com/v1/AUTH_8b29beb0cbe247a296f902be2fe084b6/2025/html/especiais/foz-do-amazonas/g1_esp_foz-amazonas_tela_04.png",
        textos: [
          "abc"
        ]
      },
      {
        imagem: "https://s3.glbimg.com/v1/AUTH_8b29beb0cbe247a296f902be2fe084b6/2025/html/especiais/foz-do-amazonas/g1_esp_foz-amazonas_tela_05.png",
        textos: [
          "abc"
        ]
      },
      {
        imagem: "https://s3.glbimg.com/v1/AUTH_8b29beb0cbe247a296f902be2fe084b6/2025/html/especiais/foz-do-amazonas/g1_esp_foz-amazonas_tela_06.png",
        textos: [
          "abc"
        ]
      },
      {
        imagem: "https://s3.glbimg.com/v1/AUTH_8b29beb0cbe247a296f902be2fe084b6/2025/html/especiais/foz-do-amazonas/g1_esp_foz-amazonas_tela_07.png",
        textos: [
          "abc"
        ]
      }
    ]}
  />
  <TextoLongo
  texto="<p>O plástico está por toda parte: nos oceanos, nos alimentos, no ar.</p><p>Mas o que podemos fazer diante de uma ameaça invisível?</p>"
  largura="60%"
  alinhamento="left"
  animar={true}
/> -->
  <!-- TÍTULO SEÇÃO 2 -->
  <!-- <StoryTitulo texto="Capítulo 2: Um Cardápio Plástico" /> -->

  <!-- IMAGEM E TEXTO RELACIONADO -->
  <!-- <ScrollImagem
    srcDesk="https://s3.glbimg.com/v1/AUTH_8b29beb0cbe247a296f902be2fe084b6/2025/html/especiais/plastico/mapas/capa-desk.jpg"
    srcMob="https://s3.glbimg.com/v1/AUTH_8b29beb0cbe247a296f902be2fe084b6/2025/html/especiais/plastico/mapas/capa-mob.jpg"
    alt="Peixe aberto com plástico dentro"
    legenda="Peixes no litoral paulista com microplásticos no estômago"
    credito="Foto: Coletivo Verde Mar"
    animacao="fly"
    largura="100%"     
    y={80}
    delay={0.5}
  />

  <ScrollBloco
    texto="Os plásticos não afetam apenas o meio ambiente: eles já chegaram ao nosso prato. Em 2023, pesquisadores da USP encontraram resíduos plásticos em 88% dos peixes vendidos em feiras livres de São Paulo. O ciclo alimentar foi invadido. E, quanto menor o peixe, maior a chance de conter partículas — afinal, eles se alimentam da base da cadeia, onde o plástico se acumula."
    animacao="scale"
  /> -->

  <!-- TEXTO DRAMÁTICO EM PALAVRAS -->
  <!-- <ScrollBloco
    texto="Estamos ingerindo o equivalente a um cartão de crédito por semana."
    palavraPorPalavra={true}
    delay={0.3}
  /> -->
 

  
  <!-- TÍTULO SEÇÃO 3 -->
  <!-- <StoryTitulo texto="Capítulo 3: Um Futuro Embalado" />

  <ScrollBloco
    texto="Hoje, estima-se que mais de 268 milhões de toneladas de plástico sejam lançadas nos oceanos anualmente. Mesmo com políticas públicas e campanhas de redução, a produção global de plásticos segue crescendo — e o tempo de decomposição permanece inalterado: 450 anos, em média."
    animacao="fly"
    y={70}
  /> -->


  <!-- ENCERRAMENTO -->
  <!-- <ScrollImagem
    srcDesk="https://s3.glbimg.com/v1/AUTH_8b29beb0cbe247a296f902be2fe084b6/2025/html/especiais/plastico/mapas/belem-desk.jpg"
    srcMob="https://s3.glbimg.com/v1/AUTH_8b29beb0cbe247a296f902be2fe084b6/2025/html/especiais/plastico/mapas/belem-mob.jpg"
    alt="Montanha de garrafas PET"
    legenda="Em 2050, haverá mais plástico do que peixes nos oceanos — em peso."
    credito="Foto: Arquivo G1"
    animacao="scale"
    largura="60%"     
    delay={0.4}
  />

  <ScrollBloco
    texto="A pergunta que fica: até quando vamos ignorar o problema?"
    palavraPorPalavra={true}
    delay={0.2}
  />
  <TextoLongo
  texto="<p>O plástico está por toda parte: nos oceanos, nos alimentos, no ar.</p><p>Mas o que podemos fazer diante de uma ameaça invisível?</p>"
  largura="60%"
  alinhamento="left"
  animar={true}
/>
  <TextoLongo
  texto="<p>O plástico está por toda parte: nos oceanos, nos alimentos, no ar.</p><p>Mas o que podemos fazer diante de uma ameaça invisível?</p>"
  largura="60%"
  alinhamento="left"
  animar={true}
/> -->
<!-- controla até onde o scroll move o vídeo -->
<!-- <ScrollVideoT
  videoDesk="https://s3.glbimg.com/v1/AUTH_8b29beb0cbe247a296f902be2fe084b6/2025/html/especiais/censo-logradouros/videos/censo-desk_1-final2.mp4"
  videoMob="https://s3.glbimg.com/v1/AUTH_8b29beb0cbe247a296f902be2fe084b6/2025/html/especiais/censo-logradouros/videos/censo-mob_1-final2.mp4"
  posterDesk="https://s3.glbimg.com/v1/AUTH_8b29beb0cbe247a296f902be2fe084b6/2025/html/especiais/censo-logradouros/img/censo-desk.jpg"
  posterMob="https://s3.glbimg.com/v1/AUTH_8b29beb0cbe247a296f902be2fe084b6/2025/html/especiais/censo-logradouros/img/censo-mob.jpg"
  duration={17}
  scrollyDuration={35000}
/> -->


<ImagemSequencia
totalFrames={511}
scrollyDuration={8000}
pathDesk="https://s3.glbimg.com/v1/AUTH_8b29beb0cbe247a296f902be2fe084b6/2025/html/especiais/censo-logradouros/img/desk"
pathMob="https://s3.glbimg.com/v1/AUTH_8b29beb0cbe247a296f902be2fe084b6/2025/html/especiais/censo-logradouros/sequencia-img"
posterDesk="https://s3.glbimg.com/v1/AUTH_8b29beb0cbe247a296f902be2fe084b6/2025/html/especiais/censo-logradouros/img/desk/frame_0000.jpg"
posterMob="https://s3.glbimg.com/v1/AUTH_8b29beb0cbe247a296f902be2fe084b6/2025/html/especiais/censo-logradouros/sequencia-img/frame_0000.jpg"
/>

<!-- <ScrollVideoT
src="https://s3.glbimg.com/v1/AUTH_8b29beb0cbe247a296f902be2fe084b6/2025/html/especiais/censo-logradouros/teste-video.mp4"
poster="https://s3.glbimg.com/v1/AUTH_8b29beb0cbe247a296f902be2fe084b6/2025/html/especiais/plastico/mapas/belem-mob.jpg"
duration={15}
scrollyDuration={5000}
/>  -->

<!-- <TextoLongo
texto="<p>O plástico está por toda parte: nos oceanos, nos alimentos, no ar.</p><p>Mas o que podemos fazer diante de uma ameaça invisível?O plástico está por toda parte: nos oceanos, nos alimentos, no ar. O plástico está por toda parte: nos oceanos, nos alimentos, no ar. O plástico está por toda parte: nos oceanos, nos alimentos, no ar. O plástico está por toda parte: nos oceanos, nos alimentos, no ar.</p>"
largura="60%"
alinhamento="left"
animar={true}
/>
<ScrollVideoTexto
  videoDesk="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
  videoMob="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
  poster="https://s3.glbimg.com/v1/AUTH_8b29beb0cbe247a296f902be2fe084b6/2025/html/especiais/plastico/mapas/belem-mob.jpg"
  duration={5}
  scrollyDuration={5000}
  tempoTexto={500} 
  pausas={[
    { time: 2, text: 'Você sabia que...' },
    { time: 3.5, text: 'Impacto direto nos oceanos' },
    { time: 5, text: 'E o que fazer agora?' }
  ]}
/>

<TextoLongo
texto="<p>O plástico está por toda parte: nos oceanos, nos alimentos, no ar.</p><p>Mas o que podemos fazer diante de uma ameaça invisível?O plástico está por toda parte: nos oceanos, nos alimentos, no ar. O plástico está por toda parte: nos oceanos, nos alimentos, no ar. O plástico está por toda parte: nos oceanos, nos alimentos, no ar. O plástico está por toda parte: nos oceanos, nos alimentos, no ar.</p>"
largura="60%"
alinhamento="left"
animar={true}
/>
<TextoLongo
texto="<p>O plástico está por toda parte: nos oceanos, nos alimentos, no ar.</p><p>Mas o que podemos fazer diante de uma ameaça invisível?O plástico está por toda parte: nos oceanos, nos alimentos, no ar. O plástico está por toda parte: nos oceanos, nos alimentos, no ar. O plástico está por toda parte: nos oceanos, nos alimentos, no ar. O plástico está por toda parte: nos oceanos, nos alimentos, no ar.</p>"
largura="60%"
alinhamento="left"
animar={true}
/>
 -->
<Creditos
  creditos={[
    { funcao: "", nome: "Créditos" },
    { funcao: "Conteúdo", nome: "Judite Cypreste, Camila da Silva, Felipe Turioni, Gustavo Petró e Matheus Moreira." },
    { funcao: "Design", nome: "Brunza Azevedo e Thalita Ferraz" },
    { funcao: "Motion", nome: "Thalita Ferraz" },
    { funcao: "Desenvolvimento", nome: "Guilherme Gomes" },
    { funcao: "Coordenação de Conteúdo", nome: "Vitor Sorano" },
    { funcao: "Coordenação de Design e Desenvolvimento", nome: "Guilherme Gomes" }
  ]}
/>

</main>
