import { lazy, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { RouteObject } from "react-router-dom";

import RootLayout from "@/layouts/RootLayout";
import AuthGuard from "@/guards/AuthGuard";
import LoadingScreen from "@/components/LoadingScreen";
import ErrorFallback from "@/components/ErrorFallback";

// Lazy-loaded pages
const AnaSehife = lazy(() => import("@/pages/AnaSehife"));
const IktaHaqqinda = lazy(() => import("@/pages/haqqimizda/IktaHaqqinda"));
const Nizamname = lazy(() => import("@/pages/haqqimizda/Nizamname"));
const Struktur = lazy(() => import("@/pages/haqqimizda/Struktur"));
const Fealiyyet = lazy(() => import("@/pages/haqqimizda/Fealiyyet"));
const BeynelxalqFealiyyet = lazy(() => import("@/pages/haqqimizda/BeynelxalqFealiyyet"));
const Strategiya = lazy(() => import("@/pages/haqqimizda/Strategiya"));
const IllikHesabat = lazy(() => import("@/pages/haqqimizda/IllikHesabat"));

// Əlavə nümunə pages (digərlərini eyni formada əlavə et)
const Konstitusiya = lazy(() => import("@/pages/huquqi-aktlar/Konstitusiya"));
const Qanunlar = lazy(() => import("@/pages/huquqi-aktlar/Qanunlar"));
const Karyera = lazy(() => import("@/pages/Karyera"));
const Elaqe = lazy(() => import("@/pages/Elaqe"));

export const rootRoutes = [
  {
    element: (
      <AuthGuard>
        <Suspense fallback={<LoadingScreen />}>
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <RootLayout />
          </ErrorBoundary>
        </Suspense>
      </AuthGuard>
    ),
    children: [
      {
        path: "/",
        element: <AnaSehife />,
      },
      {
        path: "/haqqimizda/ikta-haqqinda",
        element: <IktaHaqqinda />,
      },
      {
        path: "/haqqimizda/nizamname",
        element: <Nizamname />,
      },
      {
        path: "/haqqimizda/struktur",
        element: <Struktur />,
      },
      {
        path: "/haqqimizda/fealiyyet",
        element: <Fealiyyet />,
      },
      {
        path: "/haqqimizda/beynelxalq-fealiyyet",
        element: <BeynelxalqFealiyyet />,
      },
      {
        path: "/haqqimizda/strategiya",
        element: <Strategiya />,
      },
      {
        path: "/haqqimizda/illik-hesabatlar",
        element: <IllikHesabat />,
      },

      // Hüquqi aktlar
      {
        path: "/huquqi-aktlar/konstitusiya",
        element: <Konstitusiya />,
      },
      {
        path: "/huquqi-aktlar/qanunlar",
        element: <Qanunlar />,
      },

      // Karyera və Əlaqə
      {
        path: "/karyera",
        element: <Karyera />,
      },
      {
        path: "/elaqe",
        element: <Elaqe />,
      },
    ],
  },
];
  