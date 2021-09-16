import React from "react";

interface resultsProps {
  annualSalary: string;
  localTaxes: number;
  totalAnnualCost: number;
  approxMonthlyPayroll: number;
}

const Results = (props: resultsProps): JSX.Element => {
  // TODO: Style this Component.
  // TODO: move interface to interface file
  // TODO: show results on USD
  const { annualSalary, localTaxes, totalAnnualCost, approxMonthlyPayroll } =
    props;
  return (
    <div className="results">
      <div>Annual Salary: {annualSalary}</div>
      <div>Local Taxes: {localTaxes.toFixed(2)}</div>
      <div>Total Annual Cost: {totalAnnualCost.toFixed(2)}</div>
      <div>Approx. Monthly Payroll: {approxMonthlyPayroll.toFixed(2)}</div>
    </div>
  );
};

export default Results;
