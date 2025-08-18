import React from "react";

interface CTAButtonProps {
  label: string;
  variant?: "default" | "blue" | "white";
  href?: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
  onClick?: () => void;
}

const CTAButton = ({
  label,
  variant = "default",
  href,
  target = "_self",
  onClick,
}: CTAButtonProps) => {
  const baseClasses =
    "cursor-pointer group relative overflow-hidden px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl min-w-[200px] inline-block text-center no-underline";

  const variantClasses = {
    default:
      "text-white bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600",
    blue: "text-white bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600",
    white: "bg-white text-orange-600 hover:bg-blue-50",
  };

  const hoverOverlayClasses = {
    default: "bg-gradient-to-r from-yellow-400 to-orange-400",
    blue: "bg-gradient-to-r from-cyan-400 to-blue-400",
    white: "",
  };

  const content = (
    <>
      <span className="relative z-10">{label}</span>
      <div
        className={`absolute inset-0 ${hoverOverlayClasses[variant]} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
      />
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target={target}
        className={`${baseClasses} ${variantClasses[variant]}`}
        onClick={onClick}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]}`}
      onClick={onClick}
    >
      {content}
    </button>
  );
};

export default CTAButton;
