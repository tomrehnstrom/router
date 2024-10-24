const $$splitComponentImporter = () => import('tsr-split:imported-default-component.tsx?tsr-split');
import { lazyRouteComponent } from '@tomrehnstrom/react-router';
import { createFileRoute } from '@tomrehnstrom/react-router';
export const Route = createFileRoute('/')({
  component: lazyRouteComponent($$splitComponentImporter, 'component', () => Route.ssr)
});