import React from "react";

interface CountriesDropdownProps {
  countries: string[];
}

const CountriesDropdown = (
  dropdownProps: CountriesDropdownProps
): JSX.Element => (
  <div>
    {dropdownProps.countries.map((country) => (
      <div>{country}</div>
    ))}
  </div>
);

export default CountriesDropdown;
