<script>
    import Section from '$lib/components/Section.svelte';

    import BirdFlight from '$lib/components/BirdFlight.svelte';
    import StoryTitulo from '$lib/components/StoryTitulo.svelte';
    import TextoLongo from '$lib/components/TextoLongo.svelte';
    import BlocoAnimado from '$lib/components/BlocoAnimado.svelte';
    import TextoNumerado from '$lib/components/TextoNumerado.svelte';
    import HeroHeader from '$lib/components/HeroHeader.svelte';
    import GloboPlayer from '$lib/components/GloboPlayer.svelte';
    import ImagemFull from '$lib/components/ImagemFull.svelte';
    import GaleriaExpandivel from '$lib/components/GaleriaExpandivel.svelte';
    import Creditos from '$lib/components/Creditos.svelte';

const imagens = [
  'img/ft1.png', 'img/ft2.png', 'img/ft3.png', 'img/ft4.png', 'img/ft5.png'
];
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
  { x: 5300, y: 0 }
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
  { x: 3940, y: 0 },
  { x: 4200, y: 0 },
  { x: 4540, y: 0 },
  { x: 4900, y: 0 },
  { x: 5240, y: 0 }
]}
/>


<ImagemFull
  srcDesk="img/continua.jpg"
  srcMob="img/continua.jpg"
/>

<Section fundo="#25604b" padding="6rem 0">
  <StoryTitulo
    texto="AMBIENTES DA TRAMA"
    linhaFina=""
    largura="40%"
    alinhamento="center"
    vertical="top"
    cor="#ffe0bb"
    peso="100"
    tamanhoDesktop="4rem"
    tamanhoMobile="3rem"
    lineHeightDesktop="1.1"
    lineHeightMobile="1.05"
    corLinhaFina="#ffe0bb"
    tamanhoLinhaFinaDesktop="1.2rem"
    tamanhoLinhaFinaMobile="1.6rem"
    lineHeightLinhaFinaDesktop="2"
    lineHeightLinhaFinaMobile="1.3"
    exibirLinha={true}
    corLinha="#ffe0bb"
    larguraLinha="100px"
    alturaLinha="3px"
  />
    <TextoLongo
    texto="<p>Clique nas fotos para ampliar</p>"
    largura="70%"
    cor="#ffe0bb"
    alinhamento="center"
    tamanhoFonte="1.2rem"
    entrelinha="1.9"
    animar={true}
  />   

  <GaleriaExpandivel {imagens} />


</Section>

<ImagemFull
  srcDesk="img/curiosidades.jpg"
  srcMob="img/curiosidades.jpg"
/>

<Section fundo="#ffe0bb" padding="6rem 0">
  <StoryTitulo
    texto="CURIOSIDADES"
    linhaFina=""
    largura="40%"
    alinhamento="center"
    vertical="top"
    cor="#d64d50"
    peso="100"
    tamanhoDesktop="4rem"
    tamanhoMobile="3rem"
    lineHeightDesktop="1.1"
    lineHeightMobile="1.05"
    corLinhaFina="#d64d50"
    tamanhoLinhaFinaDesktop="1.2rem"
    tamanhoLinhaFinaMobile="1.6rem"
    lineHeightLinhaFinaDesktop="2"
    lineHeightLinhaFinaMobile="1.3"
    exibirLinha={true}
    corLinha="#d64d50"
    larguraLinha="100px"
    alturaLinha="3px"
  />
   

  <BlocoAnimado
  alturaDesk="400px"
  alturaMob="300px"
  start="top 50%"
  animacao={{
    desk: {
      from: { scale: 0.1, opacity: 1, rotate: 0, y: 0, x: 215 },
      to: { scale: 3, opacity: 1, rotate: 0, y: 0, x: 0, duration: 0.5, ease: 'expoScale(0.5,7,none)' }
    },
    mob: {
      from: { opacity: 0, rotate: 0, y: 0, x: -500, scale: 0.3 },
      to: { opacity: 1, rotate: 0, scale: 4, y: 0, x: 200, duration: 1, ease: 'expoScale(0.5,7,none)' }
    }
  }}
>
  <img src="img/protagonista.png" alt="Imagem animada" style="width: 30%; height: auto;" />
</BlocoAnimado>


<TextoNumerado
  numero="PROTAGONISTA"
  texto="Dona de Mim marca a primeira protagonista de Clara Moneke. A atriz de 26 anos estreou na Globo em outra trama de Rosane Svartman, o sucesso Vai na Fé, como Kate, e foi Caridade em No Rancho Fundo, dirigida por Allan Fiterman."
  alinhamento="right"
  alinhamentoTexto="left"
  tamanhoNumeroDesk="2rem"
  tamanhoTextoDesk="1.1rem"
  tamanhoNumeroMob="1rem"
  tamanhoTextoMob="0.9rem"
  animacao={{
    desk: {
      from: { x: 215, y: 0, scale: 1, opacity: 0 },
      to: { x: 0, y: 0, scale: 1, opacity: 1, duration: 2, ease: 'power3.out' }
    },
    mob: {
      from: { x: 0, y: 0, opacity: 0 },
      to: { x: 60, y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
    }
  }}
/> 

  <BlocoAnimado
  alturaDesk="400px"
  alturaMob="300px"
  start="top 50%"
  animacao={{
    desk: {
      from: { scale: 0.1, opacity: 1, rotate: 0, y: 0, x: -300 },
      to: { scale: 3, opacity: 1, rotate: 0, y: 0, x: 300, duration: 0.5, ease: 'expoScale(0.5,7,none)' }
    },
    mob: {
      from: { opacity: 0, rotate: 0, y: 0, x: 500, scale: 0.3 },
      to: { opacity: 1, rotate: 0, scale: 4, y: 0, x: 0, duration: 1, ease: 'expoScale(0.5,7,none)' }
    }
  }}
>
  <img src="img/retornos.png" alt="Imagem animada" style="width: 30%; height: auto;" />
</BlocoAnimado>


<TextoNumerado
  numero="RETORNOS"
  texto="Dona de Mim marca a volta de Cláudia Abreu às novelas depois de nove anos, quando fez A Lei do Amor, de 2016. Como ela, Marcos Pasquim também volta a Globo. A última novela do ator havia sido O Tempo Não Pára, em 2018."
  alinhamento="right"
  alinhamentoTexto="left"
  tamanhoNumeroDesk="2rem"
  tamanhoTextoDesk="1.1rem"
  tamanhoNumeroMob="1rem"
  tamanhoTextoMob="0.9rem"
  animacao={{
    desk: {
      from: { x: 0, y: 0, scale: 1, opacity: 0 },
      to: { x: 300, y: 0, scale: 1, opacity: 1, duration: 2, ease: 'power3.out' }
    },
    mob: {
      from: { x: 0, y: 0, opacity: 0 },
      to: { x: 60, y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
    }
  }}
/> 
  <BlocoAnimado
  alturaDesk="200px"
  alturaMob="150px"
  start="top 50%"
  animacao={{
    desk: {
      from: { scale: 0.1, opacity: 1, rotate: 0, y: 0, x: 215 },
      to: { scale: 3, opacity: 1, rotate: 0, y: 0, x: 0, duration: 0.5, ease: 'expoScale(0.5,7,none)' }
    },
    mob: {
      from: { opacity: 0, rotate: 0, y: 0, x: -500, scale: 0.3 },
      to: { opacity: 1, rotate: 0, scale: 4, y: 0, x: 200, duration: 1, ease: 'expoScale(0.5,7,none)' }
    }
  }}
>
  <img src="img/referencias.png" alt="Imagem animada" style="width: 30%; height: auto;" />
</BlocoAnimado>


<TextoNumerado
  numero="REFERÊNCIAS"
  texto="Dona de Mim faz referências a diversas novelas da Globo, principalmente às também escritas por Rosane Svartman. E até atores de Vai na Fé vão voltar com os mesmos personagens!"
  alinhamento="right"
  alinhamentoTexto="left"
  tamanhoNumeroDesk="2rem"
  tamanhoTextoDesk="1.1rem"
  tamanhoNumeroMob="1rem"
  tamanhoTextoMob="0.9rem"
  animacao={{
    desk: {
      from: { x: 215, y: 0, scale: 1, opacity: 0 },
      to: { x: 0, y: 0, scale: 1, opacity: 1, duration: 2, ease: 'power3.out' }
    },
    mob: {
      from: { x: 0, y: 0, opacity: 0 },
      to: { x: 60, y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
    }
  }}
/> 

  <BlocoAnimado
  alturaDesk="400px"
  alturaMob="300px"
  start="top 50%"
  animacao={{
    desk: {
      from: { scale: 0.1, opacity: 1, rotate: 0, y: 0, x: -300 },
      to: { scale: 3, opacity: 1, rotate: 0, y: 0, x: 300, duration: 0.5, ease: 'expoScale(0.5,7,none)' }
    },
    mob: {
      from: { opacity: 0, rotate: 0, y: 0, x: 500, scale: 0.3 },
      to: { opacity: 1, rotate: 0, scale: 4, y: 0, x: 0, duration: 1, ease: 'expoScale(0.5,7,none)' }
    }
  }}
>
  <img src="img/estreia.png" alt="Imagem animada" style="width: 30%; height: auto;" />
</BlocoAnimado>


<TextoNumerado
  numero="ESTREIA DE PESO"
  texto="Ao mesmo tempo em que conta com veteranos consagrados, como Tony Ramos, Dona de Mim marcará a estreia de novatos. Astro do rap nacional, L7nnon será Ryan, em sua primeira novela. Na trama ele participa de batalhas de rimas."
  alinhamento="right"
  alinhamentoTexto="left"
  tamanhoNumeroDesk="2rem"
  tamanhoTextoDesk="1.1rem"
  tamanhoNumeroMob="1rem"
  tamanhoTextoMob="0.9rem"
  animacao={{
    desk: {
      from: { x: 0, y: 0, scale: 1, opacity: 0 },
      to: { x: 300, y: 0, scale: 1, opacity: 1, duration: 2, ease: 'power3.out' }
    },
    mob: {
      from: { x: 0, y: 0, opacity: 0 },
      to: { x: 60, y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
    }
  }}
/> 
  <BlocoAnimado
  alturaDesk="300px"
  alturaMob="150px"
  start="top 50%"
  animacao={{
    desk: {
      from: { scale: 0.1, opacity: 1, rotate: 0, y: 0, x: 215 },
      to: { scale: 3, opacity: 1, rotate: 0, y: 0, x: 0, duration: 0.5, ease: 'expoScale(0.5,7,none)' }
    },
    mob: {
      from: { opacity: 0, rotate: 0, y: 0, x: -500, scale: 0.3 },
      to: { opacity: 1, rotate: 0, scale: 4, y: 0, x: 200, duration: 1, ease: 'expoScale(0.5,7,none)' }
    }
  }}
>
  <img src="img/assuntos.png" alt="Imagem animada" style="width: 30%; height: auto;" />
</BlocoAnimado>


<TextoNumerado
  numero="ASSUNTOS DIVERSOS"
  texto="Dona de Mim fala sobre traumas, maternidade, amor, família, traição, envelhecimento, kickboxing, periferia, música, polícia, superação. Ufa! Entre muitos outros."
  alinhamento="right"
  alinhamentoTexto="left"
  tamanhoNumeroDesk="2rem"
  tamanhoTextoDesk="1.1rem"
  tamanhoNumeroMob="1rem"
  tamanhoTextoMob="0.9rem"
  animacao={{
    desk: {
      from: { x: 215, y: 0, scale: 1, opacity: 0 },
      to: { x: 0, y: 0, scale: 1, opacity: 1, duration: 2, ease: 'power3.out' }
    },
    mob: {
      from: { x: 0, y: 0, opacity: 0 },
      to: { x: 60, y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
    }
  }}
/> 

  <BlocoAnimado
  alturaDesk="400px"
  alturaMob="300px"
  start="top 50%"
  animacao={{
    desk: {
      from: { scale: 0.1, opacity: 1, rotate: 0, y: 0, x: -300 },
      to: { scale: 3, opacity: 1, rotate: 0, y: 0, x: 300, duration: 0.5, ease: 'expoScale(0.5,7,none)' }
    },
    mob: {
      from: { opacity: 0, rotate: 0, y: 0, x: 500, scale: 0.3 },
      to: { opacity: 1, rotate: 0, scale: 4, y: 0, x: 0, duration: 1, ease: 'expoScale(0.5,7,none)' }
    }
  }}
>
  <img src="img/mansao.png" alt="Imagem animada" style="width: 30%; height: auto;" />
</BlocoAnimado>


<TextoNumerado
  numero="MANSÃO BOAZ"
  texto="A mansão dos Boaz é ambientada na região carioca da Barra da Tijuca na trama, mas a locação escolhida para as gravações com o núcleo, porém, fica no Alto da Boa Vista. Trata-se de um casarão colonial cercado de Mata Atlântica, em um terreno de aproximadamente 35 mil metros quadrados. Na cena do casamento de Abel (Tony Ramos) e Filipa (Cláudia Abreu), em um flashback, cerca de 230 pessoas trabalharam no set ao longo dos dois dias de gravação da cerimônia."
  alinhamento="right"
  alinhamentoTexto="left"
  tamanhoNumeroDesk="2rem"
  tamanhoTextoDesk="1.1rem"
  tamanhoNumeroMob="1rem"
  tamanhoTextoMob="0.9rem"
  animacao={{
    desk: {
      from: { x: 0, y: 0, scale: 1, opacity: 0 },
      to: { x: 300, y: 0, scale: 1, opacity: 1, duration: 2, ease: 'power3.out' }
    },
    mob: {
      from: { x: 0, y: 0, opacity: 0 },
      to: { x: 60, y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
    }
  }}
/> 

  </Section>
  <Section fundo="#fead00" padding="6rem 0">
    <StoryTitulo
    texto="CRÉDITOS"
    linhaFina=""
    largura="40%"
    alinhamento="center"
    vertical="top"
    cor="#6b6b6c"
    peso="100"
    tamanhoDesktop="4rem"
    tamanhoMobile="3rem"
    lineHeightDesktop="1.1"
    lineHeightMobile="1.05"
    corLinhaFina="#6b6b6c"
    tamanhoLinhaFinaDesktop="1.2rem"
    tamanhoLinhaFinaMobile="1.6rem"
    lineHeightLinhaFinaDesktop="2"
    lineHeightLinhaFinaMobile="1.3"
    exibirLinha={true}
    corLinha="#6b6b6c"
    larguraLinha="100px"
    alturaLinha="3px"
  />
  <Creditos
  corFundo="#fead00"
  corTextoGeral="#6b6b6c"
  corFuncao="#003659"
  corNome="#003659"
  creditos={[
    { funcao: "Conteúdo", nome: "Renata Domingues" },
    { funcao: "Design", nome: "Juan Silva" },
    { funcao: "Desenvolvimento", nome: "Guilherme Gomes" },
    { funcao: "Coordenação", nome: "Davi Padovani e Guilherme Gomes" }
  ]}

/>

</Section>