# HackUPC Landing Page

[![pnpm 12.21.0](https://img.shields.io/badge/pnpm-12.21.0-orange.svg)](https://pnpm.io/)
[![Node.js 22.23.4](https://img.shields.io/badge/node-22.23.4-green.svg)](https://nodejs.org/en/download/releases/)
[![Netlify Status](https://api.netlify.com/api/v1/badges/5865fbbe-4f1a-41b2-ac97-b787dd7feb3c/deploy-status)](https://app.netlify.com/sites/roaring-valkyrie-eb612f/deploys)
[![](https://github.com/hackupc/new_hackupc/actions/workflows/hackupc_ci.yml/badge.svg)](https://github.com/hackupc/new_hackupc/actions/workflows/hackupc_ci.yml)

> Welcome to HackUPC's landing page source code, made in [Next.js](https://nextjs.org/).

> This repository is live since the 10th edition of HackUPC in 2024, you can see the old releases in [Old repository]()

## How to set up the project

### Prerequisites

- Install [Node.js](https://nodejs.org/en/download/) (v22.23.4 or newer) in your computer. The repo has a `.nvmrc`, so with [nvm](https://github.com/nvm-sh/nvm) you can just run `nvm install`.
- Enable [pnpm](https://pnpm.io/) through Corepack: `corepack enable` (if your Node.js does not ship Corepack, run `npm install -g corepack` first). The pnpm version is pinned in `package.json`.
- Have a text editor or IDE installed, like [Visual Studio Code](https://code.visualstudio.com/) or [WebStorm](https://www.jetbrains.com/webstorm/).

### Installation

1. Clone the repository

   ```bash
    git clone https://github.com/hackupc/hackupc-landing.git
   ```

2. Install the dependencies

   ```bash
   pnpm install
   ```

### Run the project for development

1. Run the development server

   ```bash
   pnpm dev
   ```

2. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

> The page auto-updates as you edit the file. If it's not working maybe you need to check your configurations, it's for sure working in Chrome (mac and windows) and mozilla (linux)

## Linting and formatting

We are using `eslint` and `prettier` to lint and format the code, you can run the following commands to check if the code is correctly formatted and linted:

```bash
pnpm lint
```

```bash
pnpm format
```

This commands will make changes in your code, if you simply want to check if the code is correctly formatted and linted, you can run the following commands:

```bash
pnpm check-lint
```

```bash
pnpm check-format
```

## Deployment

The app is being deployed in [Netlify](https://www.netlify.com/), the deployment is automatic when a new commit is pushed to the `master` branch. But it's generating previews for every pull request, so you can see the changes before merging.

The site is built as a [static export](https://nextjs.org/docs/app/guides/static-exports) (`output: "export"` in `next.config.js`): `pnpm build` generates plain HTML/CSS/JS in the `out/` folder, which is what Netlify publishes. No Next.js server runs in production, so server-only features (API routes, Server Actions, middleware, image optimization, etc.) are not available.

To preview the production build locally:

```bash
pnpm build
pnpm start
```
