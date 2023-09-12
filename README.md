# Elysia + Buchta App

## Getting started
This is a basic Elysia server with frontend support <br>

## Starting the development server

Create a `.env` file and add `IPAPI_KEY=XXXX` using your valid IPAPI key.

To start development server run.
```bash
bun run index.ts
```

Open http://localhost:5335/ with your browser to see the result.

## Running in PROD

Create a `.env` file and add `IPAPI_KEY=XXXX` using your valid IPAPI key.

Then:

```shell
  docker build -t scammer-catcher:0.1 .
  docker-compose up
```

Open https://your-domain:5335/ with your browser to see the result.

## Understanding file structure

[Buchta](https://github.com/Fire-The-Fox/buchta) is Bun-First integrable build step for frontend. <br>
Which means it can be used in a framework like Elysia, because it has offical integration.
```
index.ts - source code of your server with basic API
buchta.config.ts - basic configuration for Buchta to function
public/ - directory containing your frontend code
.buchta - directory that contains files with which Buchta works with
```

## Configuration

Very basic config for Buchta
```ts
import { BuchtaConfig } from "buchta";

export default {
    port: 3000, // port on which the application + the backend will be served
    rootDir: import.meta.dir, // root directory of your project, meaning you can start the app from where ever you are

    ssr: true, // if you want your web app to be server-side rendered
    plugins: [] // array that contains plugins for buchta to extend support for frameworks and file formats
} as BuchtaConfig;
```

## Built-in plugins
Buchta has plugins to support React, Svelte, Vue & CSS <br>
Some plugins have their own configuration, React for example

### How to use a built-in plugin?
If you want to use Vue. All you have to do is import it and put it in `plugins` array <br>
Just like this:
```ts
// Notice: Buchta supports on Vue 3
import { vue } from "buchta/plugins/vue";
// ...
    plugins: [/* ... */, vue()]
// ...
```
Same principle works for svelte, react and css <br>

For more information, check out Buchta's repository or documentation

## Tips & Tricks
### My project is very large, what should i do?
Simply remove `.buchta` directory with `rm -r .buchta` and your project will be fit again 😄
