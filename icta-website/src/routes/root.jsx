import { lazy, Suspense } from "react";
// import { ErrorBoundary } from "react-error-boundary";
// import LoadingScreen from "@/components/LoadingScreen";
// import ErrorFallback from "@/components/ErrorFallback";
import App from "@/App";
import Haqqimizda from "../pages/haqqimizda/index";
import IktaStartegiya from "../pages/haqqimizda/ikta-starategiya/index";
import HaqqimizdaLayout from "../pages/haqqimizda/index";
import IktaHaqqimizda from "../pages/haqqimizda/ikta-haqqinda/IktaHaqqinda";
import Nizamname from "../pages/haqqimizda/nizamname/Nizamname";
import Struktur from "../pages/haqqimizda/struktur/Struktur";
import FealiyyetLayout from "../pages/haqqimizda/fealiyyet/FealiyyetLayout";
import Telekomunikasiya from "../pages/haqqimizda/fealiyyet/telekomunikasiya";
import Arabaglanti from "../pages/haqqimizda/fealiyyet/telekomunikasiya/ara-baglantı";

import UcotaAlinmisOperatorProviderler from "../pages/haqqimizda/fealiyyet/telekomunikasiya/ucota-alinmis-operator-providerler";
import OperatorVeProviderlerinUcotu from "../pages/haqqimizda/fealiyyet/telekomunikasiya/operator-provayder-ucotu";
import NomreResusu from "../pages/haqqimizda/fealiyyet/telekomunikasiya/nomre-resusu";
import Internet from "../pages/haqqimizda/fealiyyet/telekomunikasiya/internet";
import Lisenziya from "../pages/haqqimizda/fealiyyet/telekomunikasiya/lisenziya";
import Mobil from "../pages/haqqimizda/fealiyyet/telekomunikasiya/mobil";
import Telefon from "../pages/haqqimizda/fealiyyet/telekomunikasiya/telefon";
import Sertifikatlasdirma from "../pages/haqqimizda/fealiyyet/telekomunikasiya/serifikatlasdirma";
import Sorgu from "../pages/haqqimizda/fealiyyet/telekomunikasiya/sorgu";
import Tarifler from "../pages/haqqimizda/fealiyyet/telekomunikasiya/tarifler";
import UniversalTelecomXidmetleri from "../pages/haqqimizda/fealiyyet/telekomunikasiya/universal-telecom-xidmetleri";

import SpekterIdareciliyi from "../pages/haqqimizda/fealiyyet/spektr-idareciliyi";
import RadioSpektrResuslari from "../pages/haqqimizda/fealiyyet/spektr-idareciliyi/radiospektr-resuslari";
import RadioSpektrResuslarininTenzimlenmesi from "../pages/haqqimizda/fealiyyet/spektr-idareciliyi/radiospektr-resuslarinin-tenzimlenmesi";
import RadioTezlikEhtiyyatlarininMuhafizesi from "../pages/haqqimizda/fealiyyet/spektr-idareciliyi/radiotezlik-ehtiyatlarinin-muhafizesi";

import PoctXidmetleri from "../pages/haqqimizda/fealiyyet/poct-xidmetleri";
import PoctFealiyyetiHaqqindaHesabatlar from "../pages/haqqimizda/fealiyyet/poct-xidmetleri/poct-fealiyyeti-haqqinda-hesabatlar";
import PoctOperatorlarinaQarsiQoyulanTelebler from "../pages/haqqimizda/fealiyyet/poct-xidmetleri/poct-operatorlarina-qarsi-telebler";
import PoctRabiteLisenziyalari from "../pages/haqqimizda/fealiyyet/poct-xidmetleri/poct-rabite-lisenziyalari";
import SuretliPoctXidmetiLisenziyalari from "../pages/haqqimizda/fealiyyet/poct-xidmetleri/suretli-poct-xidmeti-lisenziyalari";
import UmumiMelumat from "../pages/haqqimizda/fealiyyet/poct-xidmetleri/umumi-melumat";
import UniversalPoctXidmetiTarifleri from "../pages/haqqimizda/fealiyyet/poct-xidmetleri/universal-poct-xidmeti-tarifleri";
import MubahiselerinHelli from "../pages/haqqimizda/fealiyyet/mubahiselerin-helli";
import CareerComponent from "../pages/career/CareerComponent";
import VacancyDetails from "../pages/career/VacancyDetails";

// Lazy-loaded pages
const Home = lazy(() => import("@/pages/home"));
// const Haqqimizda = lazy(() => import("../pages/haqqimizda/index"));
// const Nizamname = lazy(() => import("@/pages/haqqimizda/Nizamname"));
// const Struktur = lazy(() => import("@/pages/haqqimizda/Struktur"));
// const Fealiyyet = lazy(() => import("@/pages/haqqimizda/Fealiyyet"));
// const BeynelxalqFealiyyet = lazy(() => import("@/pages/haqqimizda/BeynelxalqFealiyyet"));
// const Strategiya = lazy(() => import("@/pages/haqqimizda/Strategiya"));
// const IllikHesabat = lazy(() => import("@/pages/haqqimizda/IllikHesabat"));
// const Konstitusiya = lazy(() => import("@/pages/huquqi-aktlar/Konstitusiya"));
// const Qanunlar = lazy(() => import("@/pages/huquqi-aktlar/Qanunlar"));
// const Karyera = lazy(() => import("@/pages/Karyera"));
// const Elaqe = lazy(() => import("@/pages/Elaqe"));

export const rootRoutes = [
  // {
  //   element: (
  //     // <Suspense fallback={<LoadingScreen />}>
  //     //   <ErrorBoundary FallbackComponent={ErrorFallback}>
  //     //     <App />
  //     //   </ErrorBoundary>
  //     // </Suspense>
  //     <App/>
  //   ),
  //   children: [
  //     { index: true, element: <Home /> }, // 💡 Ana səhifə
  //    {
  //       path: "/haqqimizda",
  //       element: <HaqqimizdaLayout />,
  //       children: [
  //          { path:"ikta-haqqinda", element:<IktaHaqqimizda />},
  //         { path: "nizamname", element: <Nizamname /> },
  //         { path: "struktur", element: <Struktur /> },

  //       ],
  //       {
  //     path: "fealiyyet",
  //     element: <Fealiyyet />,
  //     children: [
  //       { path: "layiheler", element: <Layiheler /> },
  //       { path: "tedbirler", element: <Tadbirler /> },
  //       // və s.
  //     ],
  //   },

  //     // { path: "haqqimizda/nizamname", element: <Nizamname /> },
  //     // { path: "haqqimizda/struktur", element: <Struktur /> },
  //     // { path: "haqqimizda/fealiyyet", element: <Fealiyyet /> },
  //     // { path: "haqqimizda/beynelxalq-fealiyyet", element: <BeynelxalqFealiyyet /> },
  //     // { path: "haqqimizda/strategiya", element: <Strategiya /> },
  //     // { path: "haqqimizda/illik-hesabatlar", element: <IllikHesabat /> },
  //     // { path: "huquqi-aktlar/konstitusiya", element: <Konstitusiya /> },
  //     // { path: "huquqi-aktlar/qanunlar", element: <Qanunlar /> },
  //     // { path: "karyera", element: <Karyera /> },
  //     // { path: "elaqe", element: <Elaqe /> },
  //   ],
  // },

  {
    element: <App />,
    children: [
      { index: true, element: <Home /> }, // Ana səhifə

      {
        path: "/haqqimizda",
        element: <HaqqimizdaLayout />,
        children: [
          { path: "ikta-haqqinda", element: <IktaHaqqimizda /> },
          { path: "nizamname", element: <Nizamname /> },
          { path: "struktur", element: <Struktur /> },

          {
            path: "fealiyyet",
            element: <FealiyyetLayout />,

            children: [
              {
                path: "telekommunikasiya",
                element: <Telekomunikasiya />,
                children: [
                  {
                    path: "operator-ve-provayderin-ucotu",
                    element: <OperatorVeProviderlerinUcotu />,
                  },
                  {
                    path: "ucota-alinmis-operator-ve-provayderler",
                    element: <UcotaAlinmisOperatorProviderler />,
                  },
                  {
                    path: "ara-baglantı",
                    element: <Arabaglanti />,
                  },
                  {
                    path: "nomre-resusu",
                    element: <NomreResusu />,
                  },
                  {
                    path: "internet",
                    element: <Internet />,
                  },
                  {
                    path: "lisenziya",
                    element: <Lisenziya />,
                  },
                  {
                    path: "mobil",
                    element: <Mobil />,
                  },
                  {
                    path: "telefon-meftilli",
                    element: <Telefon />,
                  },
                  {
                    path: "sertifikatlastirma",
                    element: <Sertifikatlasdirma />,
                  },
                  {
                    path: "sorgu",
                    element: <Sorgu />,
                  },
                  {
                    path: "tarifler",
                    element: <Tarifler />,
                  },
                  {
                    path: "universal-telecom-xidmetleri",
                    element: <UniversalTelecomXidmetleri />,
                  },
                ],
              },
            ],
          },

          // {
          //   path: "fealiyyet",
          //   element: <FealiyyetLayout />,
          //   children: [
          //     {
          //       path: "spektr-idareciliyi",
          //       element: <SpekterIdareciliyi />,

          //       children: [
          //         {
          //           path: "radiospektr-resuslari",
          //           element: <RadioSpektrResuslari />,
          //         },
          //         {
          //           path: "radiospektr-resuslarinin-tenzimlenmesi",
          //           element: <RadioSpektrResuslarininTenzimlenmesi />,
          //         },
          //         {
          //           path: "radiotezlik-ehtiyatlarinin-muhafizesi",
          //           element: <RadioTezlikEhtiyyatlarininMuhafizesi />,
          //         },
          //       ],
          //     },
          //     // digər fealiyyet alt səhifələri
          //   ],
          // },

          // {
          //   path: "fealiyyet",
          //   element: <FealiyyetLayout />,
          //   children: [
          //     {
          //       path: "poct-xidmetleri",
          //       element: <PoctXidmetleri />,
          //       children: [
          //         {
          //           path: "poct-fealiyyeti-haqqinda-hesabatlar",
          //           element: <PoctFealiyyetiHaqqindaHesabatlar />,
          //         },
          //         {
          //           path: "poct-operatorlarina-qarsi-qoyulan-telebler",
          //           element: <PoctOperatorlarinaQarsiQoyulanTelebler />,
          //         },
          //         {
          //           path: "universal-poct-xidmeti-tarifleri",
          //           element: <UniversalPoctXidmetiTarifleri />,
          //         },
          //         {
          //           path: "poct-rabite-lisenziyalari",
          //           element: <PoctRabiteLisenziyalari />,
          //         },
          //         {
          //           path: "suretli-poct-xidmeti-lisenziyalari",
          //           element: <SuretliPoctXidmetiLisenziyalari />,
          //         },
          //         {
          //           path: "umumi-melumat",
          //           element: <UmumiMelumat />,
          //         },
          //       ],
          //     },
          //     // digər fealiyyet alt səhifələri
          //   ],
          // },

          {
            path: "fealiyyet",
            element: <FealiyyetLayout />,
            children: [
              {
                path: "mubahiselerin-helli",
                element: <MubahiselerinHelli />,
              },
              {
                path: "telekommunikasiya",
                element: <Telekomunikasiya />,
                children: [
                  {
                    path: "telekommunikasiya",
                    element: <Telekomunikasiya />,
                    children: [
                      {
                        path: "operator-ve-provayderin-ucotu",
                        element: <OperatorVeProviderlerinUcotu />,
                      },
                      {
                        path: "ucota-alinmis-operator-ve-provayderler",
                        element: <UcotaAlinmisOperatorProviderler />,
                      },
                      {
                        path: "ara-baglantı",
                        element: <Arabaglanti />,
                      },
                      {
                        path: "nomre-resusu",
                        element: <NomreResusu />,
                      },
                      {
                        path: "internet",
                        element: <Internet />,
                      },
                      {
                        path: "lisenziya",
                        element: <Lisenziya />,
                      },
                      {
                        path: "mobil",
                        element: <Mobil />,
                      },
                      {
                        path: "telefon-meftilli",
                        element: <Telefon />,
                      },
                      {
                        path: "sertifikatlastirma",
                        element: <Sertifikatlasdirma />,
                      },
                      {
                        path: "sorgu",
                        element: <Sorgu />,
                      },
                      {
                        path: "tarifler",
                        element: <Tarifler />,
                      },
                      {
                        path: "universal-telecom-xidmetleri",
                        element: <UniversalTelecomXidmetleri />,
                      },
                    ],
                  },
                ],
              },

              {
                path: "spektr-idareciliyi",
                element: <SpekterIdareciliyi />,
                children: [
                  {
                    path: "radiospektr-resuslari",
                    element: <RadioSpektrResuslari />,
                  },
                  {
                    path: "radiospektr-resuslarinin-tenzimlenmesi",
                    element: <RadioSpektrResuslarininTenzimlenmesi />,
                  },
                  {
                    path: "radiotezlik-ehtiyatlarinin-muhafizesi",
                    element: <RadioTezlikEhtiyyatlarininMuhafizesi />,
                  },
                ],
              },
              {
                path: "poct-xidmetleri",
                element: <PoctXidmetleri />,
                children: [
                  {
                    path: "poct-fealiyyeti-haqqinda-hesabatlar",
                    element: <PoctFealiyyetiHaqqindaHesabatlar />,
                  },
                  {
                    path: "poct-operatorlarina-qarsi-qoyulan-telebler",
                    element: <PoctOperatorlarinaQarsiQoyulanTelebler />,
                  },
                  {
                    path: "universal-poct-xidmeti-tarifleri",
                    element: <UniversalPoctXidmetiTarifleri />,
                  },
                  {
                    path: "poct-rabite-lisenziyalari",
                    element: <PoctRabiteLisenziyalari />,
                  },
                  {
                    path: "suretli-poct-xidmeti-lisenziyalari",
                    element: <SuretliPoctXidmetiLisenziyalari />,
                  },
                  {
                    path: "umumi-melumat",
                    element: <UmumiMelumat />,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        path: "/karyera",
        element: <CareerComponent />,  // Career əsas səhifə
      },
      {
        path: "/karyera/vakansiyalar/:id",
        element: <VacancyDetails />,  // Vakansiya detalları ayrıca səhifə kimi
      },
    ],
  },
];
