
window.onload = function() {
  //<editor-fold desc="Changeable Configuration Block">

  var query = location.search.split(/[?&]/)[1];
  var fileName = query.split('=')[1];
  console.log(fileName);

  // the following lines will be replaced by docker/configurator, when it runs in a docker-container
  window.ui = SwaggerUIBundle({
    // url: "https://raw.githubusercontent.com/littleplanet-co/test_docs/main/logme_service_back-end_openapi.json",
    url: "https://raw.githubusercontent.com/littleplanet-co/test_docs/main/docs/" + fileName + ".json",
    dom_id: '#swagger-ui',
    deepLinking: true,
    presets: [
      SwaggerUIBundle.presets.apis,
      SwaggerUIStandalonePreset
    ],
    plugins: [
      SwaggerUIBundle.plugins.DownloadUrl
    ],
    layout: "StandaloneLayout"
  });

  //</editor-fold>
};
