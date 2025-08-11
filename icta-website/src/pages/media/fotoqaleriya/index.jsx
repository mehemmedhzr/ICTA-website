import React, { useContext, useEffect, useState } from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import { DataContext } from "../../../context/DataContext";
import GallerySlider from "./GalerrySlider";
import { X } from 'lucide-react';
const breadcrumbItems = [
  { label: "Əsas Səhifə", href: "/" },
  { label: "Media", href: "/media" },
  { label: "FotoQaleriya" }, // sonuncu səhifədir, linksizdir
];

export default function FotoQaleriya() {
  const { getSectionData } = useContext(DataContext);
  const [data, setData] = useState(null);

  const [isSliderOpen, setIsSliderOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);


 const handleSlideChange = (index) => {
  setSelectedIndex(index);
};

  useEffect(() => {
    const result = getSectionData("Media", "Fotoqalereya");
    if (result) {
      setData(result);
    }
  }, [getSectionData]);

  if (!data) {
    return <div>Loading...</div>;
  }

  const handleCardClick = (index) => {
    setSelectedIndex(index);
    setIsSliderOpen(true);
  };

  return (
    <>
      <h1 className="text-2xl font-bold mb-4">{data.title}</h1>
      <Breadcrumbs items={breadcrumbItems} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-5">
        {data.news?.map((item, index) => (
          <div
            onClick={() => handleCardClick(index)}
            key={item.id}
            className=" overflow-hidden cursor-pointer">
            <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <p className="text-sm text-gray-500 mb-1">{item.date}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center">
        <button className="cursor-pointer bg-blue-700 text-white py-3 px-5">Daha çox</button>
      </div>

      {isSliderOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex flex-col">
          {/* Header: bağlama düyməsi və şəkil sayı */}
          <div className="flex justify-between items-center p-2 text-white mx-5 my-5">
            <div className="text-lg font-semibold bg-[rgb(26,26,26)] px-1 py-1">
              {selectedIndex + 1} / {data.news.length}
            </div>
            <button
              onClick={() => setIsSliderOpen(false)}
              className="text-3xl font-bold cursor-pointer bg-[rgb(26,26,26)] px-1 py-1"
              aria-label="Close slider">
              <X />
            </button>
           
          </div>

          {/* Slider content */}
          <div className="flex-grow flex items-center justify-center p-4">
            <div className="w-full max-w-6xl max-h-[90vh] bg-black rounded-md">
              <GallerySlider
                images={data.news.map((item) => item.image)}
                initialIndex={selectedIndex}
                onClose={() => setIsSliderOpen(false)}
                onSlideChange={handleSlideChange}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
