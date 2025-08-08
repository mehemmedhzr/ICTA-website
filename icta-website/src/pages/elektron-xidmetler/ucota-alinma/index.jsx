import React, { useContext, useEffect, useState } from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import { DataContext } from "../../../context/DataContext";

const breadcrumbItems = [
  { label: "Əsas Səhifə", href: "/" },
  { label: "Elektron xidmətlər", href: "/elektron-xidmetler" },
  { label: "Uçota Alma" }, // sonuncu səhifədir, linksizdir
];

export default function FotoQaleriya() {
  // const navigate = useNavigate();
  const { getSectionData } = useContext(DataContext);
  const [data, setData] = useState(null);

  useEffect(() => {
    const result = getSectionData("Elektron xidmətlər", "Uçota Alma");
    if (result) {
      setData(result);
    }
  }, [getSectionData]);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <h1 className="text-2xl font-bold mb-4">{data.title}</h1>
      <Breadcrumbs items={breadcrumbItems} />

      <div className=" gap-6 mt-5 border-t">
        <div className="mb-2">
          <h3 className="text-2xl mb-5 mt-5">
            İnternet telekommunikasiya xidməti göstərən operatorların və provayderlərin uçotunun aparılması
          </h3>
          <p>
            Bu Təlimat Telekommunikasiya xidməti istifadəçiləri (abunəçilər) tərəfindən E-Şikayət
            xidmətinə daxil olmaq, telekommunikasiya sahəsində xidmətlər göstərən Operator və ya
            Provayderlərə elektron formada müraciət (və ya şikayət) yaratmaq, yaradılmış müraciəti
            (və ya şikayəti) E-Şikayət xidməti üzərindən Operator və ya Provayderə göndərmək,
            telekommunikasiya xidməti göstərən Operator və Provayderlər tərəfindən verilmiş
            cavabların qəbul edilməsi qaydalarını ehtiva edir. (Şəkil 1)
          </p>
        </div>
        <img src="/images/e-sikayet.png" />
        <div className="flex justify-center mt-2 mb-2"><span className="text-center">Şəkil1</span></div>
        <p>Bu Təlimat Telekommunikasiya xidməti istifadəçiləri (abunəçilər) tərəfindən E-Şikayət xidmətinə daxil olmaq, telekommunikasiya sahəsində xidmətlər göstərən Operator və ya Provayderlərə elektron formada müraciət (və ya şikayət) yaratmaq, yaradılmış müraciəti (və ya şikayəti) E-Şikayət xidməti üzərindən Operator və ya Provayderə göndərmək, telekommunikasiya xidməti göstərən Operator və Provayderlər tərəfindən verilmiş cavabların qəbul edilməsi qaydalarını ehtiva edir. (Şəkil 2)</p>
        <img className="mt-2" src="/images/e-sikayet.png" />
        <div className="flex justify-center mt-2 mb-2"><span className="text-center">Şəkil2</span></div>
      </div>
      <div className="flex justify-center items-center"></div>
    </>
  );
}
