# API Journey

A minimal Node.js + Express + TypeScript API.

## Setup

```bash
npm install
```

## Run

```bash
npm run dev    # development with hot reload
npm run build  # compile to dist/
npm start      # run compiled output
```

Server defaults to port `3000` (override with `PORT`).

## Endpoints

| Method | Path      | Description                        |
| ------ | --------- | ---------------------------------- |
| GET    | `/health` | Health check — status, uptime, timestamp |
| GET    | `/hello`  | Returns `{ "message": "Hello, World!" }` |
