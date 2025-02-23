# Skill Tree

## How to run

Configure the `.env` file with the supabase credentials `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY`.

```sh
npm install
npm run start
```

## How to develop

Configure `.env` with supabase credentials `NEXT_PUBLIC_SUPABASE_URL`, and `NEXT_PUBLIC_SUPABASE_ANON_KEY`. 
Configure your supabase database with the schema in `./db/schema.sql`.

```sh
npm install
```

```sh
npm run lint
```

```sh
npm run test
```

```sh
npm run dev
```

## Project Requirements

- [ ] Has a README and appropriate documentation.
- [ ] Provides a Frontend Architecture Diagram
  - [ ] including providers, services, etc.
- [x] Uses Continuous Integration (such as GitHub Actions).
- [ ] Deploys with CD on your platform of choice. (It's going to be Vercel)

## Code Requirements

- [x] Is written in TypeScript with good code standards, such as eslint, prettier, typechecking in CI, etc.
- [x] Has good code organization, with modlets, shared code, aliases, etc.
- [ ] At least one modlet of each type has smoke tests.
- [ ] Comprehensive tests in at least:
  - [ ] one complex component modlets
  - [ ] one complex service modlet

## Feature Requirements

- [ ] Integrates at least one external backend service, such as Auth, CMS, Database, etc.
  - [x] Alberto (Auth with Supabase)
  - [ ] Manuel (Graph data handling with Supabase)
- [ ] Creates part of a Design System, using a 3rd party Component Library.
  - [ ] Alberto
  - [x] Manuel
- [ ] Uses server-side data fetching. (In the API)
  - [ ] Alberto
  - [ ] Manuel
- [ ] Uses client-side data fetching with Suspense (any trigger).
  - [ ] Alberto (GET)
  - [ ] Manuel (POST)
- [ ] Exposes at least one API Route.
  - [ ] Alberto (POST)
  - [ ] Manuel (GET)
- [x] Uses both Client and Server components. (Next.js)
  - [x] Alberto
  - [x] Manuel
- [ ] Uses a future-proofed Context.
  - [ ] Alberto
  - [ ] Manuel
- [ ] Implements Services as Hooks.
  - [ ] Alberto
  - [ ] Manuel
- [ ] Uses Suspense in at least one place.
  - [ ] Alberto
  - [ ] Manuel
- [ ] Uses Error Boundaries in at least one place.
  - [ ] Alberto
  - [ ] Manuel

## Content

- [ ] Graph
  - [x] Skill nodes
  - [ ] Checkpoint nodes
  - [x] Can mark skill nodes as completed iff all dependencies are fullfilled
  - [ ] Automatically marks completed checkpoint nodes with all dependencies fullfilled
  - [ ] Can collapse checkpoint nodes, hiding all skill nodes between this checkpoint and the next (Optional)
  - [ ] edges
- [ ] User
  - [x] Register
  - [x] Login
  - [x] Logout
  - [ ] (Optional) Delete account
- [ ] User Graph Interaction
  - [ ] Get graph with your checks
  - [ ] Store graph on change (send full)
  - [ ] Poll to synchronize multiple devices
- [ ] User Dashboard
  - [ ] Obtained checks out of total
  - [ ] Farthest boundary node
