import React, { useContext, useEffect, useState } from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import { DataContext } from "../../../context/DataContext";
import { accordion } from "../../../../public/data";
// import { useNavigate } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const breadcrumbItems = [
  { label: "Əsas Səhifə", href: "/" },
  { label: "Media", href: "/media" },
  { label: "Elanlar" }, // sonuncu səhifədir, linksizdir
];

export default function Elanlar() {
  // const navigate = useNavigate();
  const { getSectionData } = useContext(DataContext);
  const [data, setData] = useState(null);

  useEffect(() => {
    const result = getSectionData("Media", "Elanlar");
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

      <div className=" gap-6 mt-5">
        <Accordion type="single" collapsible>
          {accordion.map((item) => (
            <AccordionItem key={item.id} value={`item-${item.id}`}>
              <AccordionTrigger>{item.title}</AccordionTrigger>
              <AccordionContent>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum adipisci dignissimos consequuntur ea sit itaque quos necessitatibus hic fugiat a explicabo culpa, maiores veritatis repudiandae veniam? Doloremque voluptatibus ex esse, ad consequatur voluptate veritatis at! Provident ullam, et inventore saepe facilis, dicta, dolores aliquam ea repellendus dolorem temporibus atque officiis.
              </AccordionContent>
              <div className="flex gap-x-3 mb-2">
                <p className="border px-2 py-2"> № {item.muqavileNomresi}</p>
                <p className="border px-2 py-2"> {item.tarix}</p>
              </div>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      <div className="flex justify-center items-center">
        <button className="cursor-pointer bg-blue-700 text-white py-3 px-5">Daha çox Yüklə</button>
      </div>
    </>
  );
}
