---
sidebar_position: 3
---

# Configuration

Configure InfoPlug Self-Hosted to fit your needs.

## Environment Variables

InfoPlug can be configured using environment variables:

| Variable | Description | Default |
|----------|-------------|---------|
| `PORT` | Server port | `3000` |
| `NODE_ENV` | Environment mode | `development` |
| `DATABASE_URL` | Database connection string | SQLite local |

## Configuration File

You can also use a configuration file at `config/default.json`:

```json
{
  "server": {
    "port": 3000,
    "host": "0.0.0.0"
  },
  "database": {
    "type": "sqlite",
    "path": "./data/infoplug.db"
  }
}
```

## Database Options

InfoPlug supports multiple database backends:

### SQLite (Default)

No additional configuration required. Data is stored locally.

### PostgreSQL

```json
{
  "database": {
    "type": "postgres",
    "host": "localhost",
    "port": 5432,
    "database": "infoplug",
    "username": "user",
    "password": "password"
  }
}
```

## Security Settings

For production deployments, ensure you configure:

- HTTPS/TLS termination
- Secure session secrets
- Authentication providers
