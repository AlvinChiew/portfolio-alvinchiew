import React from "react";

const ProjectTag = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "text-white border-primary-500"
    : "text-secondaryText border-slate-600 hover:border-white";
  return (
    <button
      className={`${buttonStyles} cursor-pointer rounded-full border-2 px-6 py-3 text-xl`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default ProjectTag;
