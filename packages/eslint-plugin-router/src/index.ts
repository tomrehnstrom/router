import { rules } from './rules'
import type { ESLint, Linter } from 'eslint'
import type { RuleModule } from '@typescript-eslint/utils/ts-eslint'

type RuleKey = keyof typeof rules

interface Plugin extends Omit<ESLint.Plugin, 'rules'> {
  rules: Record<RuleKey, RuleModule<any, any, any>>
  configs: {
    recommended: ESLint.ConfigData
    'flat/recommended': Array<Linter.FlatConfig>
  }
}

const plugin: Plugin = {
  meta: {
    name: '@tomrehnstrom/eslint-plugin-router',
  },
  configs: {} as Plugin['configs'],
  rules,
}

// Assign configs here so we can reference `plugin`
Object.assign(plugin.configs, {
  recommended: {
    plugins: ['@tomrehnstrom/eslint-plugin-router'],
    rules: {
      '@tomrehnstrom/router/create-route-property-order': 'warn',
    },
  },
  'flat/recommended': [
    {
      plugins: {
        '@tomrehnstrom/router': plugin,
      },
      rules: {
        '@tomrehnstrom/router/create-route-property-order': 'warn',
      },
    },
  ],
})

export default plugin
