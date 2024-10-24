import { copyTemplateFiles } from './utils/copyTemplateFiles'
import type { ApplyParams, PeerDependency } from './types'

export const dependencies = [
  '@tomrehnstrom/react-router',
  '@tomrehnstrom/router-devtools',
  'react',
  'react-dom',
] as const satisfies Array<PeerDependency>
export const devDependencies = [
  '@types/react',
  '@types/react-dom',
  '@tomrehnstrom/router-plugin',
] as const satisfies Array<PeerDependency>

export const scripts = {
  typecheck: 'tsc --noEmit',
}

export async function apply({ targetFolder }: ApplyParams) {
  await copyTemplateFiles({ file: '**/*', sourceFolder: 'core', targetFolder })
  return {
    dependencies,
    devDependencies,
    scripts,
  }
}
