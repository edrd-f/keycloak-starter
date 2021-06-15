# Development

1. Spin up all services:

```sh
docker-compose up
```

2. Disable SSL:

```sh
docker-compose exec postgres psql -U keycloak -c "update REALM set ssl_required = 'NONE'"
```

3. Restart Keycloak:

```sh
docker-compose restart keycloak
```

4. Go to admin console in `localhost:8080` and:
  * Create a realm with name `application` (**must** be lowercase)
    * After creating, go to the "Login" tab and change "Require SSL" to `none`
  * Within the realm, create a client configuration with the following attributes:
    * Client ID: frontend
    * Client Protocol: openid-connect
    * Root URL: http://localhost:9090
  * Create a user

5. Start frontend app with `python3 -m http.server 9090`

7. Navigate to http://localhost:9090 and check the authentication works
