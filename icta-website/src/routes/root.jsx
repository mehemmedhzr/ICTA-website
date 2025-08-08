import { Suspense, lazy } from "react";
import { Navigate } from "react-router-dom";

import App from "@/App";
//haqqimizda
const HaqqimizdaLayout = lazy(() => import("../layouts/HaqqimizdaLayout"));
const IktaStartegiya = lazy(() =>
  import("../pages/haqqimizda/ikta-starategiya")
);
const HuquqiAktlarLayout = lazy(() => import("../layouts/HuquqiAktlarLayout"));
const IktaHaqqimizda = lazy(() =>
  import("../pages/haqqimizda/ikta-haqqinda/IktaHaqqinda")
);
const Nizamname = lazy(() => import("../pages/haqqimizda/nizamname/Nizamname"));
const Struktur = lazy(() => import("../pages/haqqimizda/struktur/Struktur"));
const FealiyyetLayout = lazy(() =>
  import("../pages/haqqimizda/fealiyyet/FealiyyetLayout")
);
const Telekomunikasiya = lazy(() =>
  import("../pages/haqqimizda/fealiyyet/telekomunikasiya")
);
const Arabaglanti = lazy(() =>
  import("../pages/haqqimizda/fealiyyet/telekomunikasiya/ara-baglantı")
);
const UcotaAlinmisOperatorProviderler = lazy(() =>
  import(
    "../pages/haqqimizda/fealiyyet/telekomunikasiya/ucota-alinmis-operator-providerler"
  )
);
const OperatorVeProviderlerinUcotu = lazy(() =>
  import(
    "../pages/haqqimizda/fealiyyet/telekomunikasiya/operator-provayder-ucotu"
  )
);
const NomreResusu = lazy(() =>
  import("../pages/haqqimizda/fealiyyet/telekomunikasiya/nomre-resusu")
);
const Internet = lazy(() =>
  import("../pages/haqqimizda/fealiyyet/telekomunikasiya/internet")
);
const Lisenziya = lazy(() =>
  import("../pages/haqqimizda/fealiyyet/telekomunikasiya/lisenziya")
);
const Mobil = lazy(() =>
  import("../pages/haqqimizda/fealiyyet/telekomunikasiya/mobil")
);
const Telefon = lazy(() =>
  import("../pages/haqqimizda/fealiyyet/telekomunikasiya/telefon")
);
const Sertifikatlasdirma = lazy(() =>
  import("../pages/haqqimizda/fealiyyet/telekomunikasiya/serifikatlasdirma")
);
const Sorgu = lazy(() =>
  import("../pages/haqqimizda/fealiyyet/telekomunikasiya/sorgu")
);
const Tarifler = lazy(() =>
  import("../pages/haqqimizda/fealiyyet/telekomunikasiya/tarifler")
);
const UniversalTelecomXidmetleri = lazy(() =>
  import(
    "../pages/haqqimizda/fealiyyet/telekomunikasiya/universal-telecom-xidmetleri"
  )
);
const SpekterIdareciliyi = lazy(() =>
  import("../pages/haqqimizda/fealiyyet/spektr-idareciliyi")
);
const RadioSpektrResuslari = lazy(() =>
  import(
    "../pages/haqqimizda/fealiyyet/spektr-idareciliyi/radiospektr-resuslari"
  )
);
const RadioSpektrResuslarininTenzimlenmesi = lazy(() =>
  import(
    "../pages/haqqimizda/fealiyyet/spektr-idareciliyi/radiospektr-resuslarinin-tenzimlenmesi"
  )
);
const RadioTezlikEhtiyyatlarininMuhafizesi = lazy(() =>
  import(
    "../pages/haqqimizda/fealiyyet/spektr-idareciliyi/radiotezlik-ehtiyatlarinin-muhafizesi"
  )
);
const PoctXidmetleri = lazy(() =>
  import("../pages/haqqimizda/fealiyyet/poct-xidmetleri")
);
const PoctFealiyyetiHaqqindaHesabatlar = lazy(() =>
  import(
    "../pages/haqqimizda/fealiyyet/poct-xidmetleri/poct-fealiyyeti-haqqinda-hesabatlar"
  )
);
const PoctOperatorlarinaQarsiQoyulanTelebler = lazy(() =>
  import(
    "../pages/haqqimizda/fealiyyet/poct-xidmetleri/poct-operatorlarina-qarsi-telebler"
  )
);
const PoctRabiteLisenziyalari = lazy(() =>
  import(
    "../pages/haqqimizda/fealiyyet/poct-xidmetleri/poct-rabite-lisenziyalari"
  )
);
const SuretliPoctXidmetiLisenziyalari = lazy(() =>
  import(
    "../pages/haqqimizda/fealiyyet/poct-xidmetleri/suretli-poct-xidmeti-lisenziyalari"
  )
);
const UmumiMelumat = lazy(() =>
  import("../pages/haqqimizda/fealiyyet/poct-xidmetleri/umumi-melumat")
);
const UniversalPoctXidmetiTarifleri = lazy(() =>
  import(
    "../pages/haqqimizda/fealiyyet/poct-xidmetleri/universal-poct-xidmeti-tarifleri"
  )
);
const MubahiselerinHelli = lazy(() =>
  import("../pages/haqqimizda/fealiyyet/mubahiselerin-helli")
);
const SaglamReqabet = lazy(() =>
  import("../pages/haqqimizda/fealiyyet/saglam-reqabet")
);
const XidmetKeyfiyyeti = lazy(() =>
  import("../pages/haqqimizda/fealiyyet/xidmet-keyfiyyeti")
);
const InternetTenzimleyicileri = lazy(() =>
  import("../pages/haqqimizda/fealiyyet/internet-tenzimleyici")
);
const BeynelxalqLayout = lazy(() =>
  import("../pages/haqqimizda/beynelxalq-fealiyyet")
);
const BeynelxalqHesabatlar = lazy(() =>
  import("../pages/haqqimizda/beynelxalq-fealiyyet/beynelxalq-hesabatlar")
);
const Terminologiya = lazy(() =>
  import("../pages/haqqimizda/beynelxalq-fealiyyet/terminologiya")
);
const IllikHesabatlar = lazy(() =>
  import("../pages/haqqimizda/illik-hesabatlar")
);

//huquqi aktlar

const Fermanlar = lazy(() => import("../pages/huquqi-aktlar/fermanlar"));
const Konstusiya = lazy(() => import("../pages/huquqi-aktlar/konstusiya"));
const NazirlerKabinetininQerarlari = lazy(() =>
  import("../pages/huquqi-aktlar/nazirler-kabinetinin-qerarlari")
);
const Qanunlar = lazy(() => import("../pages/huquqi-aktlar/qanunlar"));
const RinQerarlari = lazy(() => import("../pages/huquqi-aktlar/rin-qerarlari"));
const Serencamlar = lazy(() => import("../pages/huquqi-aktlar/serencamlar"));

//istehlakci
const IstehlakciLayout = lazy(() => import("../layouts/IstehlakciLayout"));
const ESikayet = lazy(() => import("../pages/istehlakci/e-sikayet"));
const IstehlakciMemnuniyyeti = lazy(() =>
  import("../pages/istehlakci/istehlakci-memnuniyyeti")
);
const Elanlar = lazy(() => import("../pages/istehlakci/elanlar"));
const MobilOperatorlar = lazy(() =>
  import("../pages/istehlakci/ehali/mobil-operatorlar")
);
const XidmetProviderlerineMuraciet = lazy(() =>
  import("../pages/istehlakci/ehali/xidmet-provayderlerine-muraciet")
);
const XidmetUzreFormatlar = lazy(() =>
  import("../pages/istehlakci/muqavile-formasi/xidmet-uzre-formatlar")
);
const EhaliLayout = lazy(() => import("../pages/istehlakci/ehali/Ehali"));
const PoctXidmetleri2 = lazy(() =>
  import("../pages/istehlakci/ehali/poct-xidmetleri")
);
const MuqavileFormasi = lazy(() =>
  import(
    "../pages/istehlakci/muqavile-formasi/xidmet-uzre-formatlar/MuqavileFormasi"
  )
);

//xidmet bazarlari

const XidmetBazarlariLayout = lazy(() =>
  import("../layouts/XidmetBazarlariLayout")
);
const BazarStrukturu = lazy(() =>
  import("../pages/xidmet-bazarlari/bazar-strukturu")
);
const BazarArasdirmasi = lazy(() =>
  import("../pages/xidmet-bazarlari/bazar-arasdirmasi")
);
const BazarIstirakcilari = lazy(() =>
  import("../pages/xidmet-bazarlari/bazar-istirakcilari/BazarIstirakcilari")
);
const BackOneOperatorlari = lazy(() =>
  import("../pages/xidmet-bazarlari/bazar-istirakcilari/backbone-operatorlar")
);
const InternetProviderleri = lazy(() =>
  import("../pages/xidmet-bazarlari/bazar-istirakcilari/internet-provayderleri")
);
const Komunikasiya = lazy(() =>
  import("../pages/xidmet-bazarlari/xidmet-keyfiyyeti/komunikasiya")
);
const SpeedTest = lazy(() =>
  import("../pages/xidmet-bazarlari/xidmet-keyfiyyeti/speed-test")
);
const DriveTest = lazy(() =>
  import("../pages/xidmet-bazarlari/xidmet-keyfiyyeti/drive-test")
);
const Suvyerler = lazy(() =>
  import("../pages/xidmet-bazarlari/xidmet-keyfiyyeti/surveyler")
);
const XidmetKeyfiyyeti1 = lazy(() =>
  import("../pages/xidmet-bazarlari/xidmet-keyfiyyeti/XidmetKeyfiyyeti")
);

//media

const MediaLayout = lazy(() => import("../layouts/MediaLayout"));
const BizimHaqqimizdaMediaNeYazir = lazy(() =>
  import("../pages/media/bizim-haqqimizda-media-neyazir")
);
const FotoQaleriya = lazy(() => import("../pages/media/fotoqaleriya"));
const Xeberler = lazy(() => import("../pages/media/xeberler"));
const Elanlar1 = lazy(() => import("../pages/media/elanlar"));

//bazar melumatlari
const BazarMelumatlariLayout = lazy(() =>
  import("../layouts/BazarMelumatlariLayout")
);
const BazarSorgulari = lazy(() =>
  import("../pages/bazar-melumatlari/bazar-sorgulari")
);
const GeniszolaqliInternet1 = lazy(() =>
  import("../pages/bazar-melumatlari/bazar-sorgulari/geniszolaqli-internet")
);
const GeniszolaqliInternet2 = lazy(() =>
  import("../pages/bazar-melumatlari/hesabatlar/geniszolaqli-internet")
);
const GeniszolaqliInternet3 = lazy(() =>
  import(
    "../pages/bazar-melumatlari/keyfiyyet-gostericileri/geniszolaqli-internet"
  )
);
const Hesabatlar = lazy(() => import("../pages/bazar-melumatlari/hesabatlar"));
const PoctRabitesi = lazy(() =>
  import("../pages/bazar-melumatlari/hesabatlar/poct-rabitesi")
);
const TelecomReqemlerde = lazy(() =>
  import("../pages/bazar-melumatlari/telekom-reqemlerde")
);
const Mobil3 = lazy(() =>
  import("../pages/bazar-melumatlari/bazar-sorgulari/mobil")
);
const Mobil4 = lazy(() =>
  import("../pages/bazar-melumatlari/hesabatlar/mobil")
);
const Mobil5 = lazy(() =>
  import("../pages/bazar-melumatlari/keyfiyyet-gostericileri/mobil")
);
const KeyfiyyetGostericileri = lazy(() =>
  import("../pages/bazar-melumatlari/keyfiyyet-gostericileri")
);

//elektron xidmetler

const ElektronLayout = lazy(() => import("../layouts/ElektronLayout"));
const MelumatToplamaSistemi = lazy(() =>
  import("../pages/elektron-xidmetler/melumat-toplama-sistemi")
);
const RadioelektronVasitelereIcazelerinAlinmasi = lazy(() =>
  import(
    "../pages/elektron-xidmetler/radioelektron-vasitelere-icazelerin-verilmesi"
  )
);
const RadioTezliklerinAyrilmasi = lazy(() =>
  import("../pages/elektron-xidmetler/radiotezliklerin-ayrilmasi")
);
const ESikayet1 = lazy(() => import("../pages/elektron-xidmetler/e-sikayet"));
const UcotaAlinma = lazy(() =>
  import("../pages/elektron-xidmetler/ucota-alinma")
);

//kariyera

const CareerComponent = lazy(() => import("../pages/career/CareerComponent"));
const VacancyDetails = lazy(() => import("../pages/career/VacancyDetails"));

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
        path: "/bazar-melumatlari/",
        element: <BazarMelumatlariLayout />,
        children: [
          {
            path: "bazar-sorğuları",
            element: <BazarSorgulari />, // burda Outlet olmalıdı
            children: [
              {
                path: "geniszolaqli-internet",
                element: <GeniszolaqliInternet1 />,
              },
              { path: "mobil", element: <Mobil3 /> },
            ],
          },

          {
            path: "hesabatalar",
            element: <Hesabatlar />, // burda Outlet olmalıdı
            children: [
              {
                path: "geniszolaqli-internet",
                element: <GeniszolaqliInternet2 />,
              },
              { path: "mobil", element: <Mobil4 /> },
              { path: "poct-rabitesi", element: <PoctRabitesi /> },
            ],
          },

          {
            path: "keyfiyyet-gostericileri",
            element: <KeyfiyyetGostericileri />, // burda Outlet olmalıdı
            children: [
              {
                path: "geniszolaqli-internet",
                element: <GeniszolaqliInternet3 />,
              },
              { path: "mobil", element: <Mobil5 /> },
            ],
          },

          { path: "telekom-reqemlerde", element: <TelecomReqemlerde /> },
        ],
      },

      {
        path: "/media",
        element: <MediaLayout />,
        children: [
          { path: "elanlar", element: <Elanlar1 /> },
          {
            path: "bizim-haqqimizda-media-ne-yazir",
            element: <BizimHaqqimizdaMediaNeYazir />,
          },
          { path: "fotoqalereya", element: <FotoQaleriya /> },

          { path: "xeberler", element: <Xeberler /> },
        ],
      },
      {
        path: "/elaqe",
        element: <CareerComponent />,
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
        path: "/elektron-xidmetler",
        element: <ElektronLayout />,
        children: [
          { index: true, element: <Navigate to="e-sikayet" replace /> }, // /elektron-xidmetler açıldıqda yönləndir

          { path: "e-sikayet", element: <ESikayet1 /> },
          {
            path: "melumat-toplama-sistemi",
            element: <MelumatToplamaSistemi />,
          },
          {
            path: "radioelektron-vasitelere-icazelerin-verilmesi",
            element: <RadioelektronVasitelereIcazelerinAlinmasi />,
          },
          {
            path: "radiotezliklerin-ayrilmasi",
            element: <RadioTezliklerinAyrilmasi />,
          },
          { path: "ucota-alinma", element: <UcotaAlinma /> },
        ],
      },

      {
        path: "*",
        element: <Notfound />,
      },
    ],
  },
];
