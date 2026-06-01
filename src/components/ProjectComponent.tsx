import React from "react";

type projectProps = {
  title: string;
  description: string;
  link: string;
  image: string;
};

export default function ProjectComponent({
  title,
  description,
  link,
  image,
}: projectProps) {
  return (
    <div id="project-component-container" className="w-full border border-white flex flex-col md:flex-row">
      <div id="project-component-left-side" className="flex flex-1 w-full h-full">
        <img className="w-full h-full object-fit" src={image}/>
      </div>
      <div id="project-component-right-side" className="flex flex-1 flex-col p-2 text-left">
        <div>
            <span className="text-2xl">{title}</span>
        </div>
        <div>
            <span className="text-lg">{description}</span>
        </div>
        <div>
            <a href={link}>
                Check it out here.
            </a>
        </div>
      </div>
    </div>
  );
}
