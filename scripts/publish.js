// @ts-check

import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { publish } from '@tanstack/config/publish'

const __dirname = fileURLToPath(new URL('.', import.meta.url))

await publish({
  packages: [
    {
      name: '@tomrehnstrom/history',
      packageDir: 'packages/history',
    },
    {
      name: '@tomrehnstrom/react-router',
      packageDir: 'packages/react-router',
    },
    {
      name: '@tomrehnstrom/react-router-with-query',
      packageDir: 'packages/react-router-with-query',
    },
    {
      name: '@tomrehnstrom/router-zod-adapter',
      packageDir: 'packages/router-zod-adapter',
    },
    {
      name: '@tomrehnstrom/router-valibot-adapter',
      packageDir: 'packages/router-valibot-adapter',
    },
    {
      name: '@tomrehnstrom/router-arktype-adapter',
      packageDir: 'packages/router-arktype-adapter',
    },
    {
      name: '@tomrehnstrom/router-devtools',
      packageDir: 'packages/router-devtools',
    },
    {
      name: '@tomrehnstrom/router-generator',
      packageDir: 'packages/router-generator',
    },
    {
      name: '@tomrehnstrom/virtual-file-routes',
      packageDir: 'packages/virtual-file-routes',
    },
    {
      name: '@tomrehnstrom/router-cli',
      packageDir: 'packages/router-cli',
    },
    {
      name: '@tomrehnstrom/router-plugin',
      packageDir: 'packages/router-plugin',
    },
    {
      name: '@tomrehnstrom/router-vite-plugin',
      packageDir: 'packages/router-vite-plugin',
    },
    {
      name: '@tomrehnstrom/react-cross-context',
      packageDir: 'packages/react-cross-context',
    },
    {
      name: '@tomrehnstrom/start',
      packageDir: 'packages/start',
    },
    {
      name: '@tomrehnstrom/start-vite-plugin',
      packageDir: 'packages/start-vite-plugin',
    },
    {
      name: '@tomrehnstrom/create-router',
      packageDir: 'packages/create-router',
    },
    {
      name: '@tomrehnstrom/eslint-plugin-router',
      packageDir: 'packages/eslint-plugin-router',
    },
  ],
  branchConfigs: {
    main: {
      prerelease: false,
    },
    'better-blocker-router': {
      prerelease: false,
    },
    alpha: {
      prerelease: true,
    },
    beta: {
      prerelease: true,
    },
  },
  rootDir: resolve(__dirname, '..'),
  branch: process.env.BRANCH,
  tag: process.env.TAG,
})

process.exit(0)
