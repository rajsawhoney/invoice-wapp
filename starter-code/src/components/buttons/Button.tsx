import React, { ButtonHTMLAttributes, MouseEventHandler } from "react";

interface ButtonInterface {
  title: string;
  backgroundColor: string;
  color: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  rest?: ButtonHTMLAttributes<HTMLButtonElement>;
  style?: React.CSSProperties | undefined;
}
export default function Button(props: ButtonInterface) {
  return (
    <button
      style={{
        backgroundColor: props.backgroundColor,
        color: props.color,
        ...props.style,
      }}
      onClick={props.onClick}
      {...props.rest}
      className="rounded-full px-3 py-1 font-medium"
    >
      {props.title}
    </button>
  );
}
