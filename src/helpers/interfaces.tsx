export interface appStateInterface {
  selectedCountry?: string;
  countryTaxRate: number;
  countryCurrency?: string;
  selectedCurrency?: string;
  annualSalaryBase: string;
  annualSalaryUSD: string;
  showResult: boolean;
}

export interface CountriesDropdownProps {
  selectedCountry: string;
  countries: string[];
  onSelect?: any;
}

export interface SalaryInputProps {
  salary: string;
  countryCurrency: string;
  handleInputChange?: any;
  handleInputSubmit?: any;
  onChangeCurrency?: any;
}

export interface ResultsProps {
  selectedCurrency: string;
  annualSalaryBase: string;
  annualSalaryUSD: string;
  countryTaxRate: number;
  countryCurrency: string;
}

export interface ResultColumnProps {
  data: string[];
  currency?: string;
}
