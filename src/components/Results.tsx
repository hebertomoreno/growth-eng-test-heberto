import React from "react";
import { resultsProps } from "../helpers/interfaces";
import "../assets/styles/components/Results.scss";

const Results = (props: resultsProps): JSX.Element => {
  // TODO: Style this Component.

  const {
    selectedCurrency,
    annualSalaryBase,
    annualSalaryUSD,
    countryTaxRate,
  } = props;

  const currentSalaryBase = parseFloat(annualSalaryBase);
  const localTaxesBase = currentSalaryBase * countryTaxRate;
  const totalAnnualCostBase = currentSalaryBase + localTaxesBase;
  const approxMonthlyPayrollBase = totalAnnualCostBase / 12;

  const currentSalaryUSD = parseFloat(annualSalaryUSD);
  const localTaxesUSD = currentSalaryUSD * countryTaxRate;
  const totalAnnualCostUSD = currentSalaryUSD + localTaxesUSD;
  const approxMonthlyPayrollUSD = totalAnnualCostUSD / 12;

  return (
    <div className="results container">
      <div className="results labels column">
        <p>Annual Salary: </p>
        <p>Local Taxes: </p>
        <p>Total Annual Cost: </p>
        <p>Approx. Monthly Payroll: </p>
      </div>
      <div className="results left column">
        <p>
          {currentSalaryBase} {selectedCurrency}
        </p>
        <p>
          {localTaxesBase.toFixed(2)} {selectedCurrency}
        </p>
        <p>
          {totalAnnualCostBase.toFixed(2)} {selectedCurrency}
        </p>
        <p>
          {approxMonthlyPayrollBase.toFixed(2)} {selectedCurrency}
        </p>
      </div>
      <div className="results right column">
        <p>{currentSalaryUSD} USD</p>
        <p>{localTaxesUSD.toFixed(2)} USD</p>
        <p>{totalAnnualCostUSD.toFixed(2)} USD</p>
        <p>{approxMonthlyPayrollUSD.toFixed(2)} USD</p>
      </div>
    </div>
  );
};

export default Results;
