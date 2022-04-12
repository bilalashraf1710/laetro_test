import React from "react";

type Props = {
  title: string;
};

const Button = (props: Props) => {
  return (
    <button className="text-cyan-500 font-bold px-7 py-2 border-2 border-gray-400 rounded-full text-sm font-sans">
      {props.title}
    </button>
  );
};

export default Button;
