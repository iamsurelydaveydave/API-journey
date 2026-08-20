import express, { Express, Request, Response } from 'express';

export function createApp(): Express {
  const app = express();

  app.use(express.json());

  app.get('/health', (_req: Request, res: Response) => {
    res.json({
      status: 'ok',
      uptime: process.uptime(),
      timestamp: new Date().toISOString(),
    });
  });

  app.get('/hello', (_req: Request, res: Response) => {
    res.json({ message: 'Hello, World!' });
  });

  app.get('/pogi', (_req: Request, res: Response) => {
    res.json({ message: 'John the weekend!' });
  });

  app.use((_req: Request, res: Response) => {
    res.status(404).json({ error: 'Not Found' });
  });

  return app;
}
