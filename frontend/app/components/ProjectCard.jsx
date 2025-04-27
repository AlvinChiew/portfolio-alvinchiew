import React from "react";
import {
  DocumentTextIcon,
  EyeIcon,
  ArrowDownTrayIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({
  imgUrl,
  title,
  description,
  gitUrl,
  previewUrl,
  downloadUrl,
}) => {
  return (
    <div>
      <div
        className="group relative h-52 rounded-t-xl md:h-72"
        style={{
          background: `url(${imgUrl}) center center / contain  no-repeat`,
        }}
      >
        <div className="overlay absolute left-0 top-0 hidden h-full w-full items-center justify-center gap-8 bg-secondaryBackdrop bg-opacity-0 transition-all duration-500 group-hover:flex group-hover:bg-opacity-80">
          {gitUrl && (
            <Link
              href={gitUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group/link relative h-20 w-20 rounded-full border-[3px] border-secondaryText transition-all duration-300 hover:scale-105 hover:border-white hover:bg-white/30 hover:shadow-xl hover:shadow-white/30"
              title="View Description"
            >
              <DocumentTextIcon className="absolute left-1/2 top-1/2 h-12 w-12 -translate-x-1/2 -translate-y-1/2 transform cursor-pointer stroke-[1.5] text-secondaryText transition-all duration-300 group-hover/link:animate-pulse group-hover/link:text-white" />
            </Link>
          )}
          {previewUrl && (
            <Link
              href={previewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group/link relative h-20 w-20 rounded-full border-[3px] border-secondaryText transition-all duration-300 hover:scale-105 hover:border-white hover:bg-white/30 hover:shadow-xl hover:shadow-white/30"
              title="View Preview"
            >
              <EyeIcon className="absolute left-1/2 top-1/2 h-12 w-12 -translate-x-1/2 -translate-y-1/2 transform cursor-pointer stroke-[1.5] text-secondaryText transition-all duration-300 group-hover/link:animate-pulse group-hover/link:text-white" />
            </Link>
          )}
          {downloadUrl && (
            <Link
              href={downloadUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group/link relative h-20 w-20 rounded-full border-[3px] border-secondaryText transition-all duration-300 hover:scale-105 hover:border-white hover:bg-white/30 hover:shadow-xl hover:shadow-white/30"
              title="Download"
            >
              <ArrowDownTrayIcon className="absolute left-1/2 top-1/2 h-12 w-12 -translate-x-1/2 -translate-y-1/2 transform cursor-pointer stroke-[1.5] text-secondaryText transition-all duration-300 group-hover/link:animate-pulse group-hover/link:text-white" />
            </Link>
          )}
        </div>
      </div>
      <div className="mt-3 rounded-b-xl bg-secondaryBackdrop px-4 py-6 text-white">
        <h5 className="mb-2 text-center text-xl font-semibold">{title}</h5>
        <p className="text-secondaryText">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
