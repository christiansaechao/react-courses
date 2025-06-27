import React from "react";
import { ArrowLeft } from "lucide-react";
const PageHeader = ({ pageTitle, showHeader }) => {
  return (
    <div className="text-center p-4 relative text-[#ebe6e0}">
      <h1>{pageTitle}</h1>
      {showHeader && (
        <div className="absolute top-8 left-[-8px] flex items-center justify-center">
          <ArrowLeft size={30} />
        </div>
      )}
    </div>
  );
};

export default PageHeader;
