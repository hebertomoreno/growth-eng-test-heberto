import React, { useState } from "react";
import Results from "./components/Results";
import CountriesDropdown from "./components/CountriesDropdown";
import SalaryInput from "./components/SalaryInput"
import "./assets/styles/App.scss";
import taxRates from "./taxrates.json";

const makeCurrencyList = (countries: object): string[] => {
  return Object.values(countries).map((country) => country.currency);
};

const makeCountryList = (taxRates: object): string[] => Object.keys(taxRates);

interface appState {
  selectedCountry?: string;
  countryTaxRate: 0;
  countryCurrency?: undefined;
  annualSalary: number;
  localTaxes: number;
  approxMonthlyPayroll: number;
}

const App = (): JSX.Element => {
  const [state, setState] = useState<appState>({
    selectedCountry: undefined,
    countryTaxRate: 0,
    countryCurrency: undefined,
    annualSalary: 0,
    localTaxes: 0,
    approxMonthlyPayroll: 0,
  });

  const onChangeCountry = (newCountry: { value: string; label: string }) => {
    const countryName = newCountry.value;
    setState((prevState) => ({
      ...prevState,
      selectedCountry: countryName,
      countryTaxRate: taxRates[countryName].tax_rate,
      countryCurrency: taxRates[countryName].currency,
    }));
  };

  const onChangeSalary = (newSalary: string)

  const calculateResult = () => {};

  return (
    <div className="App">
      <h1>Employer Tax Calculator</h1>
      <div className="first-form">
        <CountriesDropdown
          countries={makeCountryList(taxRates)}
          onSelect={onChangeCountry}
        />
        <SalaryInput />
      </div>
      <Results />
    </div>
  );
};

export default App;
