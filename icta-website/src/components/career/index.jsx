import React from "react";
import { useParams } from "react-router-dom";
import data from "./data/index.json";

const DataSection = () => {
  const { sectionName } = useParams();

  const matchedSection = data.data.find(
    (item) => item.section.toLowerCase().replace(/\s/g, "-") === sectionName
  );


  return (
    <div className="p-4">
      {matchedSection.subsection ? (
        <ul className="list-disc pl-5 space-y-2">
          {matchedSection.subsection.map((sub) => (
            <li key={sub.id} className="font-medium">
              {sub.title}
            </li>
          ))}
        </ul>
      ) : (
        <p>Bu bölmədə alt məlumat yoxdur.</p>
      )}
    </div>
  );
};

export default DataSection;
