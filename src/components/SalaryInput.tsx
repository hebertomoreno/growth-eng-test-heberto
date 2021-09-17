import React, { useEffect } from "react";
import Dropdown from "react-dropdown";
import { SalaryInputProps } from "../helpers/interfaces";
import "../assets/styles/components/SalaryInput.scss";

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
    <form className="salary-input" onSubmit={handleInputSubmit}>
      <div className="text-input-currency">
        <label>
          Salary:
          <input
            type="text"
            onChange={handleInputChange}
            value={salary.toString()}
          />
        </label>
        <Dropdown
          className="currency-dropdown-container"
          controlClassName="currency-dropdown"
          options={currencyOptions}
          value={countryCurrency}
          onChange={onChangeCurrency}
          placeholder="Select an option"
        />
      </div>
      <input type="submit" value="Calculate" />
    </form>
  );
};

export default SalaryInput;
