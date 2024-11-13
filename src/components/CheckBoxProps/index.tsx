import React from "react";

interface CheckboxProps {
  id?: number;
  handleCheckChildElement?(event: React.FormEvent<HTMLInputElement>): void;
  isChecked?: boolean;
  value?: string;
}

const Checkbox = (props: CheckboxProps) => {
  return (
    <li>
      <input
        key={props.id}
        onClick={props.handleCheckChildElement}
        type="checkbox"
        checked={props.isChecked}
        value={props.value}
      />
      {props.value}
    </li>
  );
};

export default Checkbox;