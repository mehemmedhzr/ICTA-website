import { lazy, Suspense } from "react";
// import { ErrorBoundary } from "react-error-boundary";
// import LoadingScreen from "@/components/LoadingScreen";
// import ErrorFallback from "@/components/ErrorFallback";
import App from "@/App";
import Haqqimizda from "../layouts/HaqqimizdaLayout";
import IktaStartegiya from "../pages/haqqimizda/ikta-starategiya/index";
import HaqqimizdaLayout from "../layouts/HaqqimizdaLayout";
import HuquqiAktlarLayout from "../layouts/HuquqiAktlarLayout";
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
import SaglamReqabet from "../pages/haqqimizda/fealiyyet/saglam-reqabet";
import XidmetKeyfiyyeti from "../pages/haqqimizda/fealiyyet/xidmet-keyfiyyeti";
import InternetTenzimleyicileri from "../pages/haqqimizda/fealiyyet/internet-tenzimleyici";
import BeynelxalqLayout from "../pages/haqqimizda/beynelxalq-fealiyyet";
import BeynelxalqHesabatlar from "../pages/haqqimizda/beynelxalq-fealiyyet/beynelxalq-hesabatlar";
import Terminologiya from "../pages/haqqimizda/beynelxalq-fealiyyet/terminologiya";
import IllikHesabatlar from "../pages/haqqimizda/illik-hesabatlar";

import Fermanlar from "../pages/huquqi-aktlar/fermanlar";
import Konstusiya from "../pages/huquqi-aktlar/konstusiya";
import NazirlerKabinetininQerarlari from "../pages/huquqi-aktlar/nazirler-kabinetinin-qerarlari";
import Qanunlar from "../pages/huquqi-aktlar/qanunlar";
import RinQerarlari from "../pages/huquqi-aktlar/rin-qerarlari";
import Serencamlar from "../pages/huquqi-aktlar/serencamlar";
import IstehlakciLayout from "../layouts/IstehlakciLayout";
import ESikayet from "../pages/istehlakci/e-sikayet";
import IstehlakciMemnuniyyeti from "../pages/istehlakci/istehlakci-memnuniyyeti";
import Elanlar from "../pages/istehlakci/elanlar";
import MobilOperatorlar from "../pages/istehlakci/ehali/mobil-operatorlar";
import XidmetProviderlerineMuraciet from "../pages/istehlakci/ehali/xidmet-provayderlerine-muraciet";
import XidmetUzreFormatlar from "../pages/istehlakci/muqavile-formasi/xidmet-uzre-formatlar";
import EhaliLayout from "../pages/istehlakci/ehali/Ehali";
import PoctXidmetleri2 from "../pages/istehlakci/ehali/poct-xidmetleri";
import MuqavileFormasi from "../pages/istehlakci/muqavile-formasi/xidmet-uzre-formatlar/MuqavileFormasi";
import XidmetBazarlariLayout from "../layouts/XidmetBazarlariLayout";
import BazarStrukturu from "../pages/xidmet-bazarlari/bazar-strukturu";
import BazarArasdirmasi from "../pages/xidmet-bazarlari/bazar-arasdirmasi";
import BazarIstirakcilari from "../pages/xidmet-bazarlari/bazar-istirakcilari/BazarIstirakcilari";
import BackOneOperatorlari from "../pages/xidmet-bazarlari/bazar-istirakcilari/backbone-operatorlar";
import InternetProviderleri from "../pages/xidmet-bazarlari/bazar-istirakcilari/internet-provayderleri";
import Komunikasiya from "../pages/xidmet-bazarlari/xidmet-keyfiyyeti/komunikasiya";
import SpeedTest from "../pages/xidmet-bazarlari/xidmet-keyfiyyeti/speed-test";
import DriveTest from "../pages/xidmet-bazarlari/xidmet-keyfiyyeti/drive-test";
import Suvyerler from "../pages/xidmet-bazarlari/xidmet-keyfiyyeti/surveyler";
import XidmetKeyfiyyeti1 from "../pages/xidmet-bazarlari/xidmet-keyfiyyeti/XidmetKeyfiyyeti";

import MediaLayout from "../layouts/MediaLayout";
import BizimHaqqimizdaMediaNeYazir from "../pages/media/bizim-haqqimizda-media-neyazir";
import FotoQaleriya from "../pages/media/fotoqaleriya";
import TeztezVerilenSuallar from "../pages/media/tez-tezverilen-suallar";
import Xeberler from "../pages/media/xeberler";
import Notfound from "../pages/not-found";
import { lazyWithDelay } from "../utils/lazyWithDelay";

const Home = lazyWithDelay(() => import("@/pages/home"), 6000);

export const rootRoutes = [
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
          { path: "strategiya", element: <IktaStartegiya /> },
          { path: "illik-hesabatlar", element: <IllikHesabatlar /> },

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
                  { path: "ara-baglantı", element: <Arabaglanti /> },
                  { path: "nomre-resusu", element: <NomreResusu /> },
                  { path: "internet", element: <Internet /> },
                  { path: "lisenziya", element: <Lisenziya /> },
                  { path: "mobil", element: <Mobil /> },
                  { path: "telefon-meftilli", element: <Telefon /> },
                  {
                    path: "sertifikatlastirma",
                    element: <Sertifikatlasdirma />,
                  },
                  { path: "sorgu", element: <Sorgu /> },
                  { path: "tarifler", element: <Tarifler /> },
                  {
                    path: "universal-telecom-xidmetleri",
                    element: <UniversalTelecomXidmetleri />,
                  },
                ],
              },
              { path: "mubahiselerin-helli", element: <MubahiselerinHelli /> },
              { path: "saglam-reqabet", element: <SaglamReqabet /> },
              { path: "xidmet-keyfiyyeti", element: <XidmetKeyfiyyeti /> },
              {
                path: "internet-uzre-tenzimleyici-cercevenin-helli",
                element: <InternetTenzimleyicileri />,
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
                  { path: "umumi-melumat", element: <UmumiMelumat /> },
                ],
              },
            ],
          },

          {
            path: "beynelxalq-fealiyyetler",
            element: <BeynelxalqLayout />,
            children: [
              {
                path: "beynelxalq-hesabatlar",
                element: <BeynelxalqHesabatlar />,
              },
              { path: "terminologiya", element: <Terminologiya /> },
              { path: "umumi-melumat", element: <UmumiMelumat /> },
            ],
          },
        ],
      },

      {
        path: "/huquqi-aktlar",
        element: <HuquqiAktlarLayout />,
        children: [
          { path: "fermanlar", element: <Fermanlar /> },
          { path: "konstitusiya", element: <Konstusiya /> },
          {
            path: "nazirler-kabinetinin-qearlari",
            element: <NazirlerKabinetininQerarlari />,
          },
          { path: "qanunlar", element: <Qanunlar /> },
          { path: "rin-qerarlari", element: <RinQerarlari /> },
          { path: "serencamlar", element: <Serencamlar /> },
        ],
      },

      {
        path: "/istehlakci",
        element: <IstehlakciLayout />,
        children: [
          {
            path: "ehali",
            element: <EhaliLayout />,
            children: [
              { path: "mobil-operatorlar", element: <MobilOperatorlar /> },
              { path: "poct-xidmetleri", element: <PoctXidmetleri2 /> },
              {
                path: "xidmet-provayderlerine-muraciet",
                element: <XidmetProviderlerineMuraciet />,
              },
            ],
          },
          { path: "e-sikayet", element: <ESikayet /> },
          { path: "elanlar", element: <Elanlar /> },
          {
            path: "istehlakci-memnuniyyeti",
            element: <IstehlakciMemnuniyyeti />,
          },
          { path: "qanunlar", element: <Qanunlar /> },
          {
            path: "muqavile-formasi",
            element: <MuqavileFormasi />,
            children: [
              {
                path: "xidmetler-uzre-formatlar",
                element: <XidmetUzreFormatlar />,
              },
            ],
          },
        ],
      },

      {
        path: "/xidmet-bazarları",
        element: <XidmetBazarlariLayout />,
        children: [
          {
            path: "xidmet-keyfiyyeti",
            element: <XidmetKeyfiyyeti1 />, // burda Outlet olmalıdı
            children: [
              { path: "kommunikasiya", element: <Komunikasiya /> },
              { path: "poct-xidmetleri", element: <PoctXidmetleri2 /> },
              { path: "speed-test", element: <SpeedTest /> },
              { path: "drive-test", element: <DriveTest /> },
              { path: "surveyler", element: <Suvyerler /> },
            ],
          },

          { path: "bazar-strukturu", element: <BazarStrukturu /> },
          { path: "bazar-arasdirmasi", element: <BazarArasdirmasi /> },

          {
            path: "bazar-istirakcilari",
            element: <BazarIstirakcilari />,
            children: [
              {
                path: "backbone-operatorlari",
                element: <BackOneOperatorlari />,
              },
              {
                path: "internet-provayderleri",
                element: <InternetProviderleri />,
              },
              { path: "poct-xidmetleri", element: <PoctXidmetleri2 /> },
              { path: "mobil-operatorlar", element: <MobilOperatorlar /> },
            ],
          },
        ],
      },

      {
        path: "/media",
        element: <MediaLayout />,
        children: [
          { path: "elanlar", element: <Elanlar /> },
          {
            path: "bizim-haqqimizda-media-ne-yazir",
            element: <BizimHaqqimizdaMediaNeYazir />,
          },
          { path: "fotoqalereya", element: <FotoQaleriya /> },
          {
            path: "tez-tez-verilen-suallar",
            element: <TeztezVerilenSuallar />,
          },
          { path: "xeberler", element: <Xeberler /> },
        ],
      },

      {
        path: "/karyera",
        element: <CareerComponent />,
      },

      {
        path: "/karyera/vakansiyalar/:id",
        element: <VacancyDetails />,
      },

      {
        path: "*",
        element: <Notfound />,
      },
    ],
  },
];
