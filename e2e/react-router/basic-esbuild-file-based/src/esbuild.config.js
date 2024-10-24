import { TanStackRouterEsbuild } from '@tomrehnstrom/router-plugin/esbuild'

export default {
  // ...
  plugins: [
    TanStackRouterEsbuild({
      autoCodeSplitting: true,
    }),
  ],
}
