import clsx from "clsx";
import Link from "next/link";

export default function Button(props) {
  const {
    className,
    prefix,
    disabled,
    suffix,
    children,
    variant,
    onClick,
    as,
    href,
    active,
    target,
  } = props;

  const makeButtonClass = ({ active, disabled } = {}) => {
    switch (variant) {
      case "primary":
        return clsx(
          `bg-primary text-[#9e802b] flex items-center justify-center rounded-lg px-3 py-1 border border-primary-dark/50 hover:border-primary-dark duration-100 text-sm`,
          disabled ? "" : "",
          active ? "" : ""
        );
      case "secondary":
        return clsx(`bg-white text-gray-600 flex items-center justify-center rounded-lg px-3 py-1 border border-gray-200 hover:border-gray-400 duration-100 text-sm`, disabled ? '' : '', active ? '' : '');
      case "invisible":
        return clsx(`text-gray-600 flex items-center justify-center rounded-lg px-3 py-1 hover:text-primary-dark w-full duration-100 text-sm`, disabled ? '' : '', active ? '' : '');
      case "ternary":
        return clsx(
          "py-[2.4px] px-3 flex items-center relative rounded-[7px] cursor-pointer",
          active
            ? "dark:text-black dark:border-white text-black border-gray-300 bg-gray-200/80 dark:bg-white"
            : "text-gray-600 dark:hover:text-gray-200 border-transparent hover:text-gray-800 dark:text-gray-400 hover:bg-gray-200/50 dark:hover:bg-gray-700/80"
        );
      default:
        return ``;
    }
  };

  if (as === "a") {
    return (
      <Link
        target={target ?? ""}
        className={clsx(makeButtonClass({ active }), className ?? "")}
        href={href}
      >
        {prefix && prefix}
        {children}
        {suffix && suffix}
      </Link>
    );
  }

  if (as === "div") {
    return (
      <div
        {...props}
        onClick={onClick}
        className={clsx(
          makeButtonClass({ active }),
          className ?? '',
          disabled ? "opacity-60 cursor-not-allowed": ''
        )}
      >
        {prefix && prefix}
        {children}
        {suffix && suffix}
      </div>
    );
  }

  return (
    <button
      {...props}
      onClick={onClick}
      className={clsx(
        makeButtonClass({ active }),
          className ?? '',
          disabled ? "opacity-60 cursor-not-allowed" : ''
      )}
    >
      {prefix && prefix}
      {children}
      {suffix && suffix}
    </button>
  );
}
