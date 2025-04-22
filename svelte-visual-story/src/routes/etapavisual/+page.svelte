<script>
    import EtapaVisual from '$lib/components/EtapaVisual.svelte';
  </script>
  
  <EtapaVisual
  numero="1"
  imagem="img/img1.png"
  altura="100vh"
  larguraImagem="100%"
  alturaImagem="auto"
  posicaoTexto="sobreposto"
  posicaoTextoManual="top-left"
  layoutMobile="horizontal"
  posicaoImagemManual="top top"
  corNumero="var(--cor-vermelha)"
  corTexto="var(--cor-preta)"
  tamanhoNumero="6rem"
  tamanhoTexto="1.25rem"
  animacaoTexto={{
    from: { opacity: 0, x: -100 },
    to: { opacity: 1, x: 0, duration: 1.3, ease: 'power3.out' }
  }}
  animacaoImagem={{
    from: { opacity: 0, scale: 0.5, y: 100 },
    to: { opacity: 1, scale: 1, y: 0, duration: 1.5, ease: 'power2.out' }
  }}
  startTexto="top 80%"
  startImagem="top 90%"
>
  <p>A equipe da Globo tem um catálogo de filmes, que são tagueados por gêneros e temas. </p>
</EtapaVisual>
  


<EtapaVisual
  numero="2"
  imagem="img/img2.png"
  altura="100vh"
  larguraImagem="100%"
  alturaImagem="auto"
  posicaoTexto="sobreposto"
  posicaoTextoManual="bottom-left"
  layoutMobile="horizontal"
  posicaoImagemManual="top top"
  corNumero="var(--cor-vermelha)"
  corTexto="var(--cor-preta)"
  tamanhoNumero="6rem"
  tamanhoTexto="1.25rem"
  animacaoTexto={{
    from: { opacity: 0, x: -100 },
    to: { opacity: 1, x: 0, duration: 1.3, ease: 'power3.out' }
  }}
  animacaoImagem={{
    from: { opacity: 0, scale: 0.5, y: 100 },
    to: { opacity: 1, scale: 1, y: 0, duration: 1.5, ease: 'power2.out' }
  }}
  startTexto="top 80%"
  startImagem="top 90%"
>
  <p>Com esse catálogo, a ideia é manter uma programação diversa, incluindo filmes de vários países, animações e obras nacionais.

  </p>
</EtapaVisual>



  <EtapaVisual
  numero="3"
  imagem="/img/img3.png"
  altura="100vh"
  larguraImagem="100%"
  alturaImagem="auto"
  posicaoTexto="sobreposto"
  posicaoTextoManual="top-right"
  layoutMobile="horizontal"
  posicaoImagemManual="top top"
  corNumero="var(--cor-vermelha)"
  corTexto="var(--cor-preta)"
  tamanhoNumero="6rem"
  tamanhoTexto="1.25rem"
  animacaoTexto={{
    from: { opacity: 0, x: -100 },
    to: { opacity: 1, x: 0, duration: 1.3, ease: 'power3.out' }
  }}
  animacaoImagem={{
    from: { opacity: 0, scale: 0.5, y: 100 },
    to: { opacity: 1, scale: 1, y: 0, duration: 1.5, ease: 'power2.out' }
  }}
  startTexto="top 80%"
  startImagem="top 90%"
>
  <p>A equipe vê os índices de audiência, resultados de pesquisas de consumidores e começa a escolha.</p>
</EtapaVisual>
  
  <EtapaVisual
  numero="4"
  imagem="img/img4.png"
  altura="100vh"
  larguraImagem="100%"
  alturaImagem="auto"
  posicaoTexto="sobreposto"
  posicaoTextoManual="bottom-left"
  layoutMobile="horizontal"
  posicaoImagemManual="top top"
  corNumero="var(--cor-vermelha)"
  corTexto="var(--cor-preta)"
  tamanhoNumero="6rem"
  tamanhoTexto="1.25rem"
  animacaoTexto={{
    from: { opacity: 0, x: -100, y: 100 },
    to: { opacity: 1, x: 0, y: 100, duration: 1.3, ease: 'power3.out' }
  }}
  animacaoImagem={{
    from: { opacity: 0, scale: 0.5, y: 100 },
    to: { opacity: 1, scale: 1, y: 0, duration: 1.5, ease: 'power2.out' }
  }}
  startTexto="top 80%"
  startImagem="top 90%"
>
  <p>Então, é feito um planejamento anual, selecionando mais ou menos 300 filmes para exibir ao longo do ano. Essa programação é revisada no início de cada trimestre.</p>
</EtapaVisual>
  


<EtapaVisual
  numero="5"
  imagem="img/img5.png"
  altura="100vh"
  larguraImagem="100%"
  alturaImagem="auto"
  posicaoTexto="sobreposto"
  posicaoTextoManual="bottom-left"
  layoutMobile="horizontal"
  posicaoImagemManual="top top"
  corNumero="var(--cor-vermelha)"
  corTexto="var(--cor-preta)"
  tamanhoNumero="6rem"
  tamanhoTexto="1.25rem"
  animacaoTexto={{
    from: { opacity: 0, x: -100 },
    to: { opacity: 1, x: 0, duration: 1.3, ease: 'power3.out' }
  }}
  animacaoImagem={{
    from: { opacity: 0, scale: 0.5, y: 100 },
    to: { opacity: 1, scale: 1, y: 0, duration: 1.5, ease: 'power2.out' }
  }}
  startTexto="top 80%"
  startImagem="top 90%"
>
  <p>Aliás, é proibido reprisar um título em 6 meses na “Sessão da Tarde”.  </p>
</EtapaVisual>




  <EtapaVisual
  numero="6"
  imagem="img/img6.png"
  altura="100vh"
  larguraImagem="100%"
  alturaImagem="auto"
  posicaoTexto="sobreposto"
  posicaoTextoManual="top-right"
  layoutMobile="horizontal"
  posicaoImagemManual="top top"
  corNumero="var(--cor-vermelha)"
  corTexto="var(--cor-preta)"
  tamanhoNumero="6rem"
  tamanhoTexto="1.25rem"
  animacaoTexto={{
    from: { opacity: 0, x: -100 },
    to: { opacity: 1, x: 0, duration: 1.3, ease: 'power3.out' }
  }}
  animacaoImagem={{
    from: { opacity: 0, scale: 0.5, y: 100 },
    to: { opacity: 1, scale: 1, y: 0, duration: 1.5, ease: 'power2.out' }
  }}
  startTexto="top 80%"
  startImagem="top 90%"
>
  <p>A época do ano também faz diferença. No início do ano, filmes leves e esperançosos vão bem; já em julho e dezembro, época de férias, é bom priorizar animações e obras para toda a família.</p>
</EtapaVisual>


  <EtapaVisual
  numero="7"
  imagem="img/img7.png"
  altura="100vh"
  larguraImagem="100%"
  alturaImagem="auto"
  posicaoTexto="sobreposto"
  posicaoTextoManual="top-left"
  layoutMobile="horizontal"
  posicaoImagemManual="top top"
  corNumero="var(--cor-vermelha)"
  corTexto="var(--cor-preta)"
  tamanhoNumero="6rem"
  tamanhoTexto="1.25rem"
  animacaoTexto={{
    from: { opacity: 0, x: -100 },
    to: { opacity: 1, x: 0, duration: 1.3, ease: 'power3.out' }
  }}
  animacaoImagem={{
    from: { opacity: 0, scale: 2, y: 100 },
    to: { opacity: 1, y:200, scale: 1, duration: 1.5, ease: 'power2.out' }
  }}
  startTexto="top 80%"
  startImagem="top 90%"
>
  <p>Semanalmente, a equipe revê o planejamento de acordo com o noticiário, e pode haver alterações. Por exemplo, quando Fernanda Torres foi indicada ao Oscar, a “Sessão da Tarde” alterou a programação para exibir “Tapas e Beijos”.</p>
</EtapaVisual>
