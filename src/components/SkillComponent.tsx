import React from "react";
import type { IconType } from "react-icons";

type skillProps = {
  title: string;
  description: React.ReactNode;
  icon?: IconType;
};

export default function SkillComponent({
  title,
  description,
  icon,
}: skillProps) {
  return (
    <div className="w-full border border-white flex flex-col md:flex-row">
      {icon && (
        <div className="flex items-center justify-center w-1/2 shrink-0 p-6">
          {React.createElement(icon, { className: "w-[50%] h-full opacity-30" })}
        </div>
      )}
      <div className="flex flex-1 flex-col p-2 text-left">
        <span className="text-2xl">{title}</span>
        <span className="text-lg">{description}</span>
      </div>
    </div>
  );
}
