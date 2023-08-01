import { useState } from "react";

interface ToggleProps {
  toggled: boolean;
}

const Toggler = (props: ToggleProps) => {
  const [toggle, setToggle] = useState<boolean>(props.toggled);

  return (
    <div className="flex justify-between w-[5.75rem]">
      <p className="text-lg">&deg;C</p>
      <label className="relative inline-block w-[3.25rem] h-5 mt-1">
        <input
          type="checkbox"
          className="opacity-0 w-0 h-0"
          onChange={() => setToggle(!toggle)}
          defaultChecked={toggle}
        />
        <span
          className={
            toggle
              ? "cursor-pointer absolute inset-0 bg-purple-400 duration-300 rounded-3xl before:content-[''] before:absolute before:w-[1rem] before:h-[1rem] before:bottom-[0.15rem] before:bg-white before:rounded-full before:duration-300 before:border-2 before:border-solid before:shadow-nav before:translate-x-[2.125rem]"
              : "cursor-pointer absolute inset-0 bg-purple-400 duration-300 rounded-3xl before:content-[''] before:absolute before:w-[1rem] before:h-[1rem] before:left-[0.125rem] before:bottom-[0.15rem] before:bg-white before:rounded-full before:duration-300 before:border-2 before:border-solid before:shadow-nav"
          }
        ></span>
      </label>
      <p className="text-lg">F</p>
    </div>
  );
};

export default Toggler;
