import React from "react";
import { SalaryInputProps } from "../helpers/interfaces";

const SalaryInput = (props: SalaryInputProps): JSX.Element => {
  //TODO: Prevent inputs that aren't numbers or periods

  const { salary, handleChange, handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Salary:
        <input type="text" onChange={handleChange} value={salary.toString()} />
      </label>
      <input type="submit" value="Calculate" />
    </form>
  );
};

export default SalaryInput;
