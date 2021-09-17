import React from "react";
import { ResultsProps } from "../helpers/interfaces";
import ResultsColumn from "./ResultsColumn";
import "../assets/styles/components/Results.scss";

const Results = (props: ResultsProps): JSX.Element => {
  // TODO: Style this Component.

  const {
    selectedCurrency,
    annualSalaryBase,
    annualSalaryUSD,
    countryTaxRate,
    countryCurrency,
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
      {selectedCurrency !== "USD" && (
        <ResultsColumn
          data={[
            annualSalaryBase,
            localTaxesBase.toFixed(2),
            totalAnnualCostBase.toFixed(2),
            approxMonthlyPayrollBase.toFixed(2),
          ]}
          currency={countryCurrency}
        />
      )}
      <ResultsColumn
        data={[
          annualSalaryUSD,
          localTaxesUSD.toFixed(2),
          totalAnnualCostUSD.toFixed(2),
          approxMonthlyPayrollUSD.toFixed(2),
        ]}
        currency={"USD"}
      />
      {selectedCurrency === "USD" && (
        <ResultsColumn
          data={[
            annualSalaryBase,
            localTaxesBase.toFixed(2),
            totalAnnualCostBase.toFixed(2),
            approxMonthlyPayrollBase.toFixed(2),
          ]}
          currency={countryCurrency}
        />
      )}
    </div>
  );
};

export default Results;
