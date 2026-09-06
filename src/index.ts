import { Elysia, t } from "elysia";
import { db } from "./db";
import { users } from "./db/schema";

const port = Number(process.env.PORT) || 3000;

export const app = new Elysia()
  .get("/", () => ({
    message: "Hello World! ElysiaJS with Drizzle & MySQL is running.",
    status: "ok",
    timestamp: new Date().toISOString(),
  }))
  .get("/health", () => ({
    status: "healthy",
    uptime: process.uptime(),
  }))
  .group("/api", (app) =>
    app
      .get("/users", async () => {
        try {
          const result = await db.select().from(users);
          return {
            success: true,
            data: result,
          };
        } catch (error: any) {
          return {
            success: false,
            message: "Database query failed. Ensure MySQL server is running and configured properly.",
            error: error?.message,
          };
        }
      })
      .post(
        "/users",
        async ({ body, set }) => {
          try {
            await db.insert(users).values({
              name: body.name,
              email: body.email,
            });
            set.status = 201;
            return {
              success: true,
              message: "User created successfully",
            };
          } catch (error: any) {
            set.status = 500;
            return {
              success: false,
              message: "Failed to create user",
              error: error?.message,
            };
          }
        },
        {
          body: t.Object({
            name: t.String(),
            email: t.String(),
          }),
        }
      )
  )
  .listen(port);

console.log(`🦊 Elysia is running at http://${app.server?.hostname}:${app.server?.port}`);
