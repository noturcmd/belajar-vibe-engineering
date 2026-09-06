# Vibe Engineering Backend

Project backend menggunakan **Bun**, **ElysiaJS**, **Drizzle ORM**, dan **MySQL**.

## Tech Stack
- **Runtime**: [Bun](https://bun.sh)
- **Framework**: [ElysiaJS](https://elysiajs.com)
- **ORM**: [Drizzle ORM](https://orm.drizzle.team)
- **Database Driver**: [mysql2](https://github.com/sidorares/node-mysql2)

---

## Konfigurasi Lingkungan (.env)

Salin `.env.example` menjadi `.env` lalu sesuaikan kredensial MySQL Anda:

```bash
PORT=3000
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=
DB_NAME=vibe_db
```

---

## Menjalankan Project

### 1. Instalasi Dependensi
```bash
bun install
```

### 2. Mode Pengembangan (Hot-reload)
```bash
bun run dev
```

### 3. Menjalankan Server Produksi
```bash
bun run start
```

### 4. Menjalankan Unit Testing
```bash
bun test
```

---

## Perintah Database (Drizzle)

- **Generate Migration**:
  ```bash
  bun run db:generate
  ```
- **Jalankan Migration**:
  ```bash
  bun run db:migrate
  ```
- **Push Skema Langsung ke DB** (Development):
  ```bash
  bun run db:push
  ```
- **Buka Drizzle Studio**:
  ```bash
  bun run db:studio
  ```

---

## Endpoints Tersedia

- `GET /`: Sambutan / status dasar server
- `GET /health`: Health check server
- `GET /api/users`: Mengambil semua daftar pengguna dari database
- `POST /api/users`: Menambahkan pengguna baru (JSON: `{ "name": "...", "email": "..." }`)
