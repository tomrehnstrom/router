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
