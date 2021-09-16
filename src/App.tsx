import React, { useState } from "react";
import Results from "./components/Results";
import CountriesDropdown from "./components/CountriesDropdown";
import SalaryInput from "./components/SalaryInput";
import "./assets/styles/App.scss";
import taxRates from "./taxrates.json";
import { appStateInterface } from "./helpers/interfaces";

const makeCurrencyList = (countries: object): string[] => {
  return Object.values(countries).map((country) => country.currency);
};

const makeCountryList = (taxRates: object): string[] => Object.keys(taxRates);

const App = (): JSX.Element => {
  const [state, setState] = useState<appStateInterface>({
    selectedCountry: undefined,
    countryTaxRate: 0,
    countryCurrency: undefined,
    annualSalary: "",
    localTaxes: 0,
    totalAnnualCost: 0,
    approxMonthlyPayroll: 0,
    showResult: false,
  });

  //TODO: Make app responsive
  //TODO: Style the whole app

  const onChangeCountry = (newCountry: { value: string; label: string }) => {
    const countryName = newCountry.value;
    setState((prevState) => ({
      ...prevState,
      selectedCountry: countryName,
      countryTaxRate: taxRates[countryName].tax_rate,
      countryCurrency: taxRates[countryName].currency,
    }));
  };

  const onChangeSalary = (e: any) => {
    const newSalary = e.target.value;
    setState((prevState) => ({
      ...prevState,
      annualSalary: newSalary,
    }));
  };

  const calculateResult = (e: any) => {
    const currentSalary = parseFloat(state.annualSalary);
    const localTaxes = currentSalary * state.countryTaxRate;
    const totalAnnualCost = currentSalary + localTaxes;
    const approxMonthlyPayroll = totalAnnualCost / 12;

    setState((prevState) => ({
      ...prevState,
      localTaxes: localTaxes,
      totalAnnualCost: totalAnnualCost,
      approxMonthlyPayroll: approxMonthlyPayroll,
      showResult: !prevState.showResult,
    }));
    e.preventDefault();
  };

  return (
    <div className="App">
      <h1>Employer Tax Calculator</h1>
      <div className="first-form">
        <CountriesDropdown
          countries={makeCountryList(taxRates)}
          onSelect={onChangeCountry}
        />
        <SalaryInput
          salary={state.annualSalary}
          handleChange={onChangeSalary}
          handleSubmit={calculateResult}
        />
      </div>
      <Results
        annualSalary={state.annualSalary}
        localTaxes={state.localTaxes}
        totalAnnualCost={state.totalAnnualCost}
        approxMonthlyPayroll={state.approxMonthlyPayroll}
      />
    </div>
  );
};

export default App;
