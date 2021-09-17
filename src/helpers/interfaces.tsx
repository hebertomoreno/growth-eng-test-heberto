export interface appStateInterface {
  selectedCountry?: string;
  countryTaxRate: number;
  countryCurrency?: string;
  selectedCurrency?: string;
  annualSalaryBase: string;
  annualSalaryUSD: string;
  showResult: boolean;
}

export interface SalaryInputProps {
  salary: string;
  countryCurrency: string;
  handleInputChange?: any;
  handleInputSubmit?: any;
  onChangeCurrency?: any;
}

export interface resultsProps {
  selectedCurrency: string;
  annualSalaryBase: string;
  annualSalaryUSD: string;
  countryTaxRate: number;
}
