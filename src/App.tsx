import React, { useState } from "react";
import Results from "./components/Results";
import CountriesDropdown from "./components/CountriesDropdown";
import SalaryInput from "./components/SalaryInput";
import "./assets/styles/App.scss";
import taxRates from "./taxrates.json";
import { appStateInterface } from "./helpers/interfaces";
import convertCurrency from "./api/convertCurrency";

const makeCountryList = (taxRates: object): string[] => Object.keys(taxRates);

const App = (): JSX.Element => {
  const [state, setState] = useState<appStateInterface>({
    selectedCountry: "",
    countryTaxRate: 0,
    countryCurrency: "",
    selectedCurrency: "",
    annualSalaryBase: "",
    annualSalaryUSD: "",
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
    if (state.selectedCurrency !== "USD") {
      setState((prevState) => ({
        ...prevState,
        annualSalaryBase: newSalary,
      }));
    } else {
      setState((prevState) => ({
        ...prevState,
        annualSalaryUSD: newSalary,
      }));
    }
  };

  const onChangeCurrency = (currency: any) => {
    setState((prevState) => ({
      ...prevState,
      selectedCurrency: currency.value,
    }));
  };

  const calculateResult = (e: any) => {
    console.log("selectedCurrency", state.selectedCurrency);
    if (state.selectedCurrency !== "USD") {
      convertCurrency(
        state.annualSalaryBase,
        state.selectedCurrency as string,
        "USD"
      ).then((data) => {
        setState((prevState) => ({
          ...prevState,
          annualSalaryUSD: data.result.toFixed(2),
          showResult: true,
        }));
      });
    } else {
      convertCurrency(
        state.annualSalaryUSD,
        "USD",
        state.countryCurrency as string
      ).then((data) => {
        setState((prevState) => ({
          ...prevState,
          annualSalaryBase: data.result.toFixed(2),
          showResult: true,
        }));
      });
    }

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
        {state.selectedCountry !== "" && (
          <SalaryInput
            salary={
              state.selectedCurrency === "USD"
                ? state.annualSalaryUSD
                : state.annualSalaryBase
            }
            countryCurrency={state.countryCurrency as string}
            onChangeCurrency={onChangeCurrency}
            handleInputChange={onChangeSalary}
            handleInputSubmit={calculateResult}
          />
        )}
      </div>
      {state.showResult && (
        <Results
          annualSalaryBase={state.annualSalaryBase as string}
          annualSalaryUSD={state.annualSalaryUSD as string}
          countryTaxRate={state.countryTaxRate}
          selectedCurrency={state.selectedCurrency as string}
          countryCurrency={state.countryCurrency as string}
        />
      )}
    </div>
  );
};

export default App;
