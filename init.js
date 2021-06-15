function initKeycloak() {
  var keycloak = new Keycloak({
    url: "http://localhost:8080/auth",
    realm: "application",
    clientId: "frontend",
  });
  keycloak
    .init({
      onLoad: "login-required",
    })
    .then(function (authenticated) {
      if (authenticated) {
        location.href = "/success.html";
      }
    })
    .catch(function (e) {
      alert("Failed to initialize");
      console.log(e);
    });
}
