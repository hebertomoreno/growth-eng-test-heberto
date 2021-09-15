import React from "react";
import Results from "./components/Results";
import CountriesDropdown from "./components/CountriesDropdown";
import "./assets/styles/App.scss";
import taxRates from "./taxrates.json";

const makeCurrencyList = (countries: object): string[] => {
  return Object.values(countries).map((country) => country.currency);
};

const makeCountryList = (taxRates: object): string[] => Object.keys(taxRates);

const App = (): JSX.Element => {
  return (
    <div className="App">
      <h1>Employer Tax Calculator</h1>
      <CountriesDropdown countries={makeCountryList(taxRates)} />
      <Results />
    </div>
  );
};

export default App;
