import React, { useState } from "react";
import Results from "./components/Results";
import { Container, Row } from "react-bootstrap";
import CountriesDropdown from "./components/CountriesDropdown";
import SalaryInput from "./components/SalaryInput";
import "./assets/styles/App.scss";
import taxRates from "./taxrates.json";
import { appStateInterface } from "./helpers/interfaces";
import convertCurrency from "./api/convertCurrency";

const makeCountryList = (taxRates: object): string[] => Object.keys(taxRates);

const App = (): JSX.Element => {
  const [state, setState] = useState<appStateInterface>({
    selectedCountry: "Select an option",
    countryTaxRate: 0,
    countryCurrency: "",
    selectedCurrency: "",
    annualSalaryBase: "",
    annualSalaryUSD: "0",
    showResult: false,
  });

  const onChangeCountry = (newCountry: string) => {
    const countryName = newCountry;
    const currency = taxRates[countryName].currency;

    setState((prevState) => ({
      ...prevState,
      selectedCountry: countryName,
      countryTaxRate: taxRates[countryName].tax_rate,
      countryCurrency: currency,
      selectedCurrency: currency,
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
    calculateResult();
  };

  const onChangeCurrency = (currency: any) => {
    setState((prevState) => ({
      ...prevState,
      selectedCurrency: currency,
    }));
  };

  const calculateResult = (e?: any) => {
    if (state.selectedCurrency !== "USD") {
      convertCurrency(
        state.annualSalaryBase,
        state.selectedCurrency as string,
        "USD"
      ).then((data) => {
        setState((prevState) => ({
          ...prevState,
          annualSalaryUSD: data.result ? data.result.toFixed(2) : "0",
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
          annualSalaryBase: data.result ? data.result.toFixed(2) : "0",
          showResult: true,
        }));
      });
    }

    e && e.preventDefault();
  };

  return (
    <Container className="App">
      <Row>
        <h1>Employer Tax Calculator</h1>
      </Row>
      <Row>
        <CountriesDropdown
          selectedCountry={state.selectedCountry as string}
          countries={makeCountryList(taxRates)}
          onSelect={onChangeCountry}
        />
      </Row>
      <Row>
        {state.selectedCountry !== "" && (
          <SalaryInput
            salary={
              state.selectedCurrency === "USD"
                ? state.annualSalaryUSD
                : state.annualSalaryBase
            }
            selectedCurrency={state.selectedCurrency as string}
            countryCurrency={state.countryCurrency as string}
            onChangeCurrency={onChangeCurrency}
            handleInputChange={onChangeSalary}
            handleInputSubmit={calculateResult}
          />
        )}
      </Row>
      <Row>
        {state.showResult && (
          <Results
            annualSalaryBase={state.annualSalaryBase as string}
            annualSalaryUSD={state.annualSalaryUSD as string}
            countryTaxRate={state.countryTaxRate}
            selectedCurrency={state.selectedCurrency as string}
            countryCurrency={state.countryCurrency as string}
          />
        )}
      </Row>
    </Container>
  );
};

export default App;
