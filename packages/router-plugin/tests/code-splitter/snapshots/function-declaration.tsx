const $$splitComponentImporter = () => import('tsr-split:function-declaration.tsx?tsr-split');
import { lazyRouteComponent } from '@tomrehnstrom/react-router';
const $$splitLoaderImporter = () => import('tsr-split:function-declaration.tsx?tsr-split');
import { lazyFn } from '@tomrehnstrom/react-router';
import { createFileRoute } from '@tomrehnstrom/react-router';
export const Route = createFileRoute('/posts')({
  loader: lazyFn($$splitLoaderImporter, 'loader'),
  component: lazyRouteComponent($$splitComponentImporter, 'component', () => Route.ssr)
});