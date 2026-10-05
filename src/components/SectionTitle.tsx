import React from "react";

interface SectionTitleProps {
  title: string;
  subtitle: string;
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle, className = "" }) => {
  return (
    <div className={`text-center ${className}`}>
      <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-[#171923] sm:text-4xl">
        {title}
      </h2>
      <p className="mx-auto max-w-3xl text-sm text-gray-500 sm:text-base">
        {subtitle}
      </p>
    </div>
  );
};

export default SectionTitle;