import React from "react";

const Progress = ({ progress = 70 }) => {
  return (
    <div className="w-full h-4 rounded-full overflow-hidden bg-[#EDEDED]">
      <div style={{width: progress + "%"}} className={`h-full ${progress === 100 ? "bg-green" : "bg-primary"}`}></div>
    </div>
  );
};

export default Progress;
