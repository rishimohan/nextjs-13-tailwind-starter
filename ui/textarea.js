const Textarea = (props) => {
  return (
    <div className="w-full">
      {props?.label ? (
        <label className={"flex mb-px text-sm font-semibold dark:text-white"}>
          {props?.label}
        </label>
      ) : (
        ""
      )}
      <textarea
        {...props}
        type={props.type || "text"}
        className={
          "shadow border border-gray-200 px-4 py-[12px] rounded-lg my-1 outline-none w-full hover:border-gray-400 focus:border-gray-600 resize-none " +
          (props.className ? props.className : "")
        }
      />
      {props.error && (
        <div className="flex items-center text-sm font-semibold text-red-400">
          <i className="mr-1 ri-error-warning-line" />
          {props.error}
        </div>
      )}
    </div>
  );
};

export default Textarea;
