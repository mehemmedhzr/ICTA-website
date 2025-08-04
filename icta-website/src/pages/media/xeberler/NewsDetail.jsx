import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { DataContext } from "../../../context/DataContext";
import Breadcrumbs from "@/components/Breadcrumbs";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { FaFacebookF, FaLinkedinIn, FaYoutube, FaTiktok, FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import PhotoSlider from "../xeberler/PhotoSlider"

export default function XeberDetail() {
  const navigate = useNavigate();

  const { id } = useParams();
  const { getSectionData } = useContext(DataContext);
  const [newsItem, setNewsItem] = useState(null);

  useEffect(() => {
    const result = getSectionData("Media", "Xəbərlər");
    if (result && result.news) {
      const item = result.news.find((n) => String(n.id) === id);
      setNewsItem(item);
    }
  }, [id, getSectionData]);

  if (!newsItem) return <div>Yüklənir...</div>;

  return (
    <>
      <div className="max-w-3xl mx-auto ">
        <button onClick={() => navigate(-1)} className="text-blue-600 cursor-pointer flex gap-x-2">
          <ArrowLeft /> Xəbərlərə geri qayıt
        </button>

        <div className="space-y-6">
          <h1 className="text-3xl font-bold mt-12">{newsItem.title}</h1>

          <img src={newsItem.image} alt={newsItem.title} className="w-full h-auto mb-6" />
          <p className="text-lg leading-relaxed text-[rgb(102,112,133)]">
            {newsItem.content || newsItem.desc}
          </p>

          <div className="flex justify-between">
            <p className="text-sm text-gray-500 mb-4">
              {newsItem.date}
            </p>
            <div className="flex text-sm gap-3 text-[rgb(102,112,133)]">
              <a
                href="https://www.facebook.com/yourpage"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 transition-colors duration-300">
                <FaFacebookF />
              </a>
              <a
                href="https://www.linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 transition-colors duration-300">
                <FaLinkedinIn />
              </a>
              <a
                href="https://www.instagram.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 transition-colors duration-300">
                <FaInstagram />
              </a>
              <a
                href="https://twitter.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 transition-colors duration-300">
                <BsTwitterX />
              </a>
            </div>
          </div>
          
        </div>

        <h4 className="mb-3">Fotolar</h4>
        <PhotoSlider/>
      </div>
    </>
  );
}
