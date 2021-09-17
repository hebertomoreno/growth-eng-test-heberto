import React from "react";
import { resultsProps } from "../helpers/interfaces";

const Results = (props: resultsProps): JSX.Element => {
  // TODO: Style this Component.
  // TODO: Hide this component until the calculate button has been pressed

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
    <div className="results">
      <div>
        Annual Salary: {currentSalaryBase} {selectedCurrency}
      </div>
      <div>{currentSalaryUSD.toFixed(2)} USD</div>
      <div>
        Local Taxes: {localTaxesBase.toFixed(2)} {selectedCurrency}
      </div>
      <div>{totalAnnualCostUSD.toFixed(2)} USD</div>
      <div>
        Total Annual Cost: {totalAnnualCostBase.toFixed(2)} {selectedCurrency}
      </div>
      <div>{approxMonthlyPayrollUSD.toFixed(2)} USD</div>
      <div>
        Approx. Monthly Payroll: {approxMonthlyPayrollBase.toFixed(2)}{" "}
        {selectedCurrency}
      </div>
    </div>
  );
};

export default Results;
