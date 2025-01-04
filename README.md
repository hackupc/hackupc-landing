# HackUPC Landing Page

[![NPM 10.2.5](https://img.shields.io/badge/npm-10.2.5-blue.svg)](https://www.npmjs.com/package/npm/v/10.2.5)
[![Node.js 20.10.0](https://img.shields.io/badge/node-20.10.0-green.svg)](https://nodejs.org/en/download/releases/)
[![Netlify Status](https://api.netlify.com/api/v1/badges/5865fbbe-4f1a-41b2-ac97-b787dd7feb3c/deploy-status)](https://app.netlify.com/sites/roaring-valkyrie-eb612f/deploys)
[![](https://github.com/hackupc/new_hackupc/actions/workflows/hackupc_ci.yml/badge.svg)](https://github.com/hackupc/new_hackupc/actions/workflows/hackupc_ci.yml)

> Welcome to HackUPC's landing page source code, made in [Next.js](https://nextjs.org/).

> This repository is live since the 10th edition of HackUPC in 2024, you can see the old releases in [Old repository]()

## How to set up the project

### Prerequisites

- Install [Node.js](https://nodejs.org/en/download/) (v20.10.0 or newer) in your computer.
- Have a text editor or IDE installed, like [Visual Studio Code](https://code.visualstudio.com/) or [WebStorm](https://www.jetbrains.com/webstorm/).

### Installation

1. Clone the repository

   ```bash
    git clone https://github.com/hackupc/hackupc-landing.git
   ```

2. Install the dependencies

   ```bash
   npm install
   ```

### Run the project for development

1. Run the development server

   ```bash
   npm run dev
   ```

2. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

> The page auto-updates as you edit the file. If it's not working maybe you need to check your configurations, it's for sure working in Chrome (mac and windows) and mozilla (linux)

## Linting and formatting

We are using `eslint` and `prettier` to lint and format the code, you can run the following commands to check if the code is correctly formatted and linted:

```bash
npm run lint
```

```bash
npm run format
```

This commands will make changes in your code, if you simply want to check if the code is correctly formatted and linted, you can run the following commands:

```bash
npm run check-lint
```

```bash
npm run check-format
```

## Deployment

The app is being deployed in [Netlify](https://www.netlify.com/), the deployment is automatic when a new commit is pushed to the `master` branch. But it's generating previews for every pull request, so you can see the changes before merging.
