const $$splitLoaderImporter = () => import('tsr-split:react-memo-imported-component.tsx?tsr-split');
import { lazyFn } from '@tomrehnstrom/react-router';
const $$splitComponentImporter = () => import('tsr-split:react-memo-imported-component.tsx?tsr-split');
import { lazyRouteComponent } from '@tomrehnstrom/react-router';
import { createFileRoute } from '@tomrehnstrom/react-router';
export const Route = createFileRoute('/')({
  component: lazyRouteComponent($$splitComponentImporter, 'component', () => Route.ssr),
  loader: lazyFn($$splitLoaderImporter, 'loader')
});