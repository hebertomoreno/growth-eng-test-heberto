export interface appStateInterface {
  selectedCountry?: string;
  countryTaxRate: 0;
  countryCurrency?: undefined;
  annualSalary: string;
  localTaxes: number;
  totalAnnualCost: number;
  approxMonthlyPayroll: number;
  showResult: boolean;
}

export interface SalaryInputProps {
  salary: string;
  handleChange?: any;
  handleSubmit?: any;
}
