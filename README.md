<img src="./public/logo.png" alt="Caisim" width="50" />

# Caisim

Personal site for groceries

## Stack

- [Nuxt](https://nuxt.com/)
- [Drizzle](https://orm.drizzle.team/)
- [Turso](https://turso.tech/)
- [Bun](https://bun.sh/)
- [Vercel](https://vercel.com/)

## Setup

- Setup a new database on Turso.
- Create a `.env` file based on `.env.example`.
- Fill the database url and token in `.env` based on newly added database.
- Fill the session and app password with any string.
- Run `bun install` to install the dependencies.
- Run `bun run db:push` to create tables based on the schema provided.

## Development

Start the development server on http://localhost:3000:

```bash
bun run dev
```

You can use Drizzle studio to see the database content:

```bash
bun run db:studio
```

## Production

Build the application for production:

```bash
bun run build
```

Locally preview production build:

```bash
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
