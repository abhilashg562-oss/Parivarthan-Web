import { RouterProvider, createRouter, createRoute, createRootRoute, Outlet } from '@tanstack/react-router';
import LandingPage from './pages/LandingPage';
import AboutApplicationPage from './pages/AboutApplicationPage';
import UserManualPage from './pages/UserManualPage';
import ReviewCentrePage from './pages/ReviewCentrePage';
import ComplaintBoxPage from './pages/ComplaintBoxPage';
import DownloadAPKPage from './pages/DownloadAPKPage';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import ProviderProfilePage from './pages/ProviderProfilePage';
import MapViewPage from './pages/MapViewPage';
import Header from './components/Header';
import Footer from './components/Footer';
import BottomNav from './components/BottomNav';
import NeonParticles from './components/NeonParticles';

// Layout component with cyberpunk theme + particles
function Layout() {
  return (
    <div
      className="min-h-screen flex flex-col relative"
      style={{ background: '#0f0f1a' }}
    >
      {/* Floating particle animation overlay */}
      <NeonParticles />

      {/* Centered mobile container */}
      <div
        className="relative z-10 flex flex-col flex-1 w-full mx-auto"
        style={{ maxWidth: '420px' }}
      >
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
        <BottomNav />
      </div>
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

// New demo routes
const loginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/login',
  component: LoginPage,
});

const dashboardRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/dashboard',
  component: DashboardPage,
});

const providerRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/provider',
  component: ProviderProfilePage,
});

const mapRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/map',
  component: MapViewPage,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  aboutRoute,
  manualRoute,
  reviewsRoute,
  complaintsRoute,
  downloadRoute,
  loginRoute,
  dashboardRoute,
  providerRoute,
  mapRoute,
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
