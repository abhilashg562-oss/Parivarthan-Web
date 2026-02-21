import { RouterProvider, createRouter, createRoute, createRootRoute, Outlet } from '@tanstack/react-router';
import LandingPage from './pages/LandingPage';
import AboutApplicationPage from './pages/AboutApplicationPage';
import UserManualPage from './pages/UserManualPage';
import ReviewCentrePage from './pages/ReviewCentrePage';
import ComplaintBoxPage from './pages/ComplaintBoxPage';
import DownloadAPKPage from './pages/DownloadAPKPage';
import Header from './components/Header';
import Footer from './components/Footer';

// Layout component with Header and Footer
function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

// Define routes
const rootRoute = createRootRoute({
  component: Layout,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: LandingPage,
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/about',
  component: AboutApplicationPage,
});

const manualRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/manual',
  component: UserManualPage,
});

const reviewsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/reviews',
  component: ReviewCentrePage,
});

const complaintsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/complaints',
  component: ComplaintBoxPage,
});

const downloadRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/download',
  component: DownloadAPKPage,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  aboutRoute,
  manualRoute,
  reviewsRoute,
  complaintsRoute,
  downloadRoute,
]);

const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
