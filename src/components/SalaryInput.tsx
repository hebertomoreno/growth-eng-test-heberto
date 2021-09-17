import React, { useEffect } from "react";
import Dropdown from "react-dropdown";
import { SalaryInputProps } from "../helpers/interfaces";

const SalaryInput = (props: SalaryInputProps): JSX.Element => {
  //TODO: Prevent inputs that aren't numbers or periods

  const {
    salary,
    countryCurrency,
    handleInputChange,
    handleInputSubmit,
    onChangeCurrency,
  } = props;

  const makeCurrencyOptions = () =>
    countryCurrency ? [countryCurrency, "USD"] : ["USD"];

  let currencyOptions: string[] = makeCurrencyOptions();

  useEffect(() => {
    currencyOptions = makeCurrencyOptions();
  }, [countryCurrency]);

  return (
    <form onSubmit={handleInputSubmit}>
      <label>
        Salary:
        <input
          type="text"
          onChange={handleInputChange}
          value={salary.toString()}
        />
      </label>
      <Dropdown
        className="dropdown-container"
        controlClassName="main-dropdown"
        options={currencyOptions}
        onChange={onChangeCurrency}
        placeholder="Select an option"
      />
      <input type="submit" value="Calculate" />
    </form>
  );
};

export default SalaryInput;
