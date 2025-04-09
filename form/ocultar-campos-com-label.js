<script type="text/javascript">
function hidePreviousElementByName(name) {
  var elements = document.querySelectorAll(name);
  elements.forEach(function(element) {
    var previousElement = element.previousElementSibling;
    if (previousElement) {
      previousElement.style.display = 'none';
    }

    var parentElement = element.parentElement;
    if (parentElement) {
      parentElement.style.display = 'none';
    }
  });
}

// Chame a função para cada campo UTM
hidePreviousElementByName('[name="custom_fields[2704668]"]'); // utm_term
hidePreviousElementByName('[name="custom_fields[2704671]"]'); // utm_content
hidePreviousElementByName('[name="custom_fields[2704662]"]'); // utm_medium
hidePreviousElementByName('[name="custom_fields[2704665]"]'); // utm_campaign
hidePreviousElementByName('[name="custom_fields[2694055]"]'); // utm_source
</script>
