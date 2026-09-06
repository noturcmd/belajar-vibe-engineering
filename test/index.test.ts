import { describe, expect, it } from "bun:test";
import { app } from "../src/index";

describe("Elysia Server Endpoints", () => {
  it("GET / returns 200 with hello world message", async () => {
    const response = await app.handle(new Request("http://localhost:3000/"));
    expect(response.status).toBe(200);

    const data = (await response.json()) as { status: string; message: string };
    expect(data.status).toBe("ok");
    expect(data.message).toContain("Hello World!");
  });

  it("GET /health returns healthy status", async () => {
    const response = await app.handle(new Request("http://localhost:3000/health"));
    expect(response.status).toBe(200);

    const data = (await response.json()) as { status: string };
    expect(data.status).toBe("healthy");
  });
});
