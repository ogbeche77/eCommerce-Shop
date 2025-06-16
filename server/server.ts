import apicache from "apicache";
import express, { Application } from "express";
import { createProxyMiddleware } from "http-proxy-middleware";

const app: Application = express();
const cache = apicache.middleware;

const proxy = createProxyMiddleware({
  target: "https://www.home24.de",
  changeOrigin: true,
  logLevel: "debug",
});

app.post("/graphql", cache("5 minutes"), proxy);
app.listen(3001);
