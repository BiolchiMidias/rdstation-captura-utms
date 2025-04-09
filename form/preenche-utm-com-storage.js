<script type="text/javascript">
  // Captura parâmetros da URL
  function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
  }

  // Salva UTMs no localStorage
  function saveUtmsToStorage() {
    const utms = {
      'utm_source': getUrlParameter('utm_source'),
      'utm_campaign': getUrlParameter('utm_campaign'),
      'utm_medium': getUrlParameter('utm_medium'),
      'utm_term': getUrlParameter('utm_term'),
      'utm_content': getUrlParameter('utm_content')
    };

    for (const key in utms) {
      if (utms[key]) {
        localStorage.setItem(key, utms[key]);
      }
    }
  }

  // Preenche os campos com os nomes corretos (custom_fields do RD)
  function fillUtmFields() {
    const map = {
      'custom_fields[2694055]': localStorage.getItem('utm_source'),
      'custom_fields[2704665]': localStorage.getItem('utm_campaign'),
      'custom_fields[2704662]': localStorage.getItem('utm_medium'),
      'custom_fields[2704668]': localStorage.getItem('utm_term'),
      'custom_fields[2704671]': localStorage.getItem('utm_content')
    };

    for (const field in map) {
      if (map[field]) {
        const inputs = document.querySelectorAll(`input[name="${field}"]`);
        inputs.forEach(function(input) {
          input.value = map[field];
        });
      }
    }
  }

  // Roda ao carregar
  document.addEventListener("DOMContentLoaded", function () {
    saveUtmsToStorage();
    fillUtmFields();
  });

  // Garante que vai preencher mesmo se o popup carregar depois
  setInterval(fillUtmFields, 1000); // repete a cada 1 segundo por segurança

</script>
