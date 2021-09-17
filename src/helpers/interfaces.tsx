export interface appStateInterface {
  selectedCountry?: string;
  countryTaxRate: number;
  countryCurrency?: string;
  selectedCurrency?: string;
  annualSalary: string;
  localTaxes: number;
  totalAnnualCost: number;
  approxMonthlyPayroll: number;
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
  annualSalary: string;
  localTaxes: number;
  totalAnnualCost: number;
  approxMonthlyPayroll: number;
}
