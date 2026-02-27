---
sidebar_position: 2
---

# Installation

This guide covers different methods to install InfoPlug Self-Hosted.

## Docker Installation (Recommended)

The easiest way to get started is using Docker.

### Prerequisites

- Docker 20.10 or higher
- Docker Compose 2.0 or higher

### Quick Start

1. Create a `docker-compose.yml` file:

```yaml
version: '3.8'
services:
  infoplug:
    image: infoplug/infoplug:latest
    ports:
      - "3000:3000"
    volumes:
      - infoplug_data:/app/data
    environment:
      - NODE_ENV=production

volumes:
  infoplug_data:
```

2. Start the container:

```bash
docker-compose up -d
```

3. Access InfoPlug at `http://localhost:3000`

## Manual Installation

For manual installation without Docker.

### Prerequisites

- Node.js 20.x or higher
- npm 10.x or higher

### Steps

1. Clone the repository:

```bash
git clone https://github.com/infoplug/infoplug.git
cd infoplug
```

2. Install dependencies:

```bash
npm install
```

3. Build the application:

```bash
npm run build
```

4. Start the server:

```bash
npm start
```

## Next Steps

After installation, proceed to [Configuration](./configuration) to customize your instance.
