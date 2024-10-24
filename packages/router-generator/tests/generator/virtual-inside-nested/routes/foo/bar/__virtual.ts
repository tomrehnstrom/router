import {
  defineVirtualSubtreeConfig,
  index,
  route,
} from '@tomrehnstrom/virtual-file-routes'

export default defineVirtualSubtreeConfig([
  index('home.tsx'),
  route('$id', 'details.tsx'),
])
