# Keycloak connect + express

**Template example** of real app using [Keycloak connect](https://github.com/keycloak/keycloak-nodejs-connect) + express together with sequelize as bônus.

- Use standard as lint
- Nodemon to reloads scripts and lint itself
- Keycloak connect to protect routes
- Includes some useful functions (AllowMethods, validateMethodByKcRole), all methods are documented inside itself

## Installation

Use the package manager npm

```bash
npm install
```

Configure all environments variables in .env file

| Name                          | Default               | Description                                                                                |
|-------------------------------|-----------------------|--------------------------------------------------------------------------------------------|
| PORT                          | 3000                  | API port                                                                                   |
| LOG_LEVEL                     | debug                 | Log level to pino see more about it in [Pino documentation](https://getpino.io/)           |
| DATABASE_HOST                 | http://localhost      | Host do database. Default database is mysql                                                |
| DATABASE_SCHEMA               | test                  | Database name                                                                              |
| DATABASE_USER                 | root                  | Username to login into DB                                                                  |
| DATABASE_PASSWORD             | root                  | Password for his login into DB                                                             |
| DATABASE_MAX_POOL_CONNECTIONS | 60                    | [Sequelize max pool connections](https://sequelize.org/master/manual/connection-pool.html) |
| KC_AUTH_SERVER_URL            | http://localhost/auth | Auth url to keycloak oauth2 credentials                                                    |
| KC_REALM                      | master                | [Keycloak Realm](https://www.keycloak.org/docs/latest/server_admin/#admin-console)         |
| KC_CLIENT_ID                  | api                   | [Keycloak Clients](https://www.keycloak.org/docs/latest/server_admin/#_clients)            |

 
## Usage

To run it in development mode

```bash
npm run dev
```
