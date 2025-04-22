<script>
  import GloboPlayer from '$lib/components/GloboPlayer.svelte';

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


<GloboPlayer
  videoId="5964532"
  full={true}
  autoPlay={true}
  startMuted={true}
  skipDFP={false}
  ga4={ga4}
/>
