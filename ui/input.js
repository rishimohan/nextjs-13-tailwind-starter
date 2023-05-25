import clsx from "clsx";

export default function Input(props) {
  return (
    <div className="w-full">
      {props?.label ? (
        <label className="flex mb-px text-sm font-semibold dark:text-white">
          {props?.label}
        </label>
      ) : (
        ""
      )}
      <input
        {...props}
        type={props.type || "text"}
        className={clsx(
          "duration-200 shadow border border-gray-200 px-3 py-[12px] rounded-lg my-1 outline-none w-full hover:border-gray-400 focus:border-gray-400",
          props.className,
          props?.disabled ? "opacity-60" : ""
        )}
        ref={(el) => {
          if (props.passref) {
            props.passref.current = el;
          }
        }}
      />
      {props.error && (
        <div className="flex items-center text-sm font-semibold text-red-400">
          <i className="mr-1 ri-error-warning-line" />
          {props.error}
        </div>
      )}
    </div>
  );
}
