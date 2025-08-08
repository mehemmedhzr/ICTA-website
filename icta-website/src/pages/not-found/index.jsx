import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!location.state?.isNotFound) {
      navigate("/404", { replace: true, state: { isNotFound: true } });
    }
  }, [location, navigate]);

  return (
    <div className="fixed inset-0 flex gap-3 items-center justify-center bg-[#1a202c]">
      <h1 className="text-xl text-[#a0aec0]">
        404  
      </h1>
      <p className="text-xl text-[#a0aec0]">|</p>
      <h1 className="text-xl text-[#a0aec0]">NOT FOUND</h1>
    </div>
  );
};

export default NotFound;
