import * as yargs from 'yargs'
import { getConfig } from '@tomrehnstrom/router-generator'
import { generate } from './generate'
import { watch } from './watch'

main()

export function main() {
  yargs
    // @ts-expect-error
    .scriptName('tsr')
    .usage('$0 <cmd> [args]')
    .command('generate', 'Generate the routes for a project', async () => {
      const config = getConfig()
      await generate(config)
    })
    .command(
      'watch',
      'Continuously watch and generate the routes for a project',
      () => {
        watch()
      },
    )
    .help().argv
}
