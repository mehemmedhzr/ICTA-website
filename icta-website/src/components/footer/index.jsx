import React from "react";
import { Link } from "react-router-dom";
import { data } from "../../data/index";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaTiktok,
  FaInstagram,
} from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="bg-muted text-muted-foreground">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 text-sm border-b py-5">
          <div>
            {data.slice(0, 4).map((item) => (
              <div key={item.id}>
                <Link
                  to="#"
                  className="font-medium text-foreground hover:text-primary transition block mb-1 py-2 "
                >
                  <span className="hover:border-b-2 hover:border-blue-500 pb-1">

                  {item.section}
                  </span>
                </Link>
              </div>
            ))}
          </div>

          <div>
            {data.slice(4, 8).map((item) => (
              <div key={item.id}>
                <Link
                  to="#"
                  className="font-medium text-foreground hover:text-primary transition block mb-1 py-2"
                >
                   <span className="hover:border-b-2 hover:border-blue-500 pb-1">

                  {item.section}
                  </span>
                </Link>
              </div>
            ))}
          </div>

          <div className="py-2 flex flex-col gap-y-5">
            <div className="flex gap-3">
              <p>Ünvan:</p>
              <p className="font-medium text-black">
                Bakı şəhəri, Üzeyir Hacıbəyli küçəsi 48
              </p>
            </div>
            <div className="flex gap-3">
              <p>E-poçt:</p>
              <p className="font-medium text-black">office@icta.az</p>
            </div>
            <div className="flex gap-3">
              <p>Telefon:</p>
              <p className="font-medium text-black">+994 (012) 498-11-22</p>
            </div>
            <div className="flex gap-3">
              <p>E-şikayət :</p>
              <p className="font-medium text-black">e-complaint.icta.az</p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-between py-4 gap-5">
          <p className="text-xs">
            © 2024 İnformasiya Kommunikasiya Texnologiyaları Agentliyi. Bütün
            hüquqlar qorunur!
          </p>
          <div className="flex text-sm gap-3">
            <a
              href=""
              className="hover:text-blue-500 transition-colors duration-300"
            >
              <FaYoutube />
            </a>
            <a
              href=""
              className="hover:text-blue-500 transition-colors duration-300"
            >
              <FaFacebookF />
            </a>
            <a
              href=""
              className="hover:text-blue-500 transition-colors duration-300"
            >
              <FaLinkedinIn />
            </a>
            <a
              href=""
              className="hover:text-blue-500 transition-colors duration-300"
            >
              <FaTiktok />
            </a>
            <a
              href=""
              className="hover:text-blue-500 transition-colors duration-300"
            >
              <BsTwitterX />
            </a>
            <a
              href=""
              className="hover:text-blue-500 transition-colors duration-300"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
