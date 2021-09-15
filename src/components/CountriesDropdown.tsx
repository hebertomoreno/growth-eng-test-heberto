import React from "react";
import Dropdown from "react-dropdown";
import "../assets/styles/components/CountriesDropdown.scss";

interface CountriesDropdownProps {
  countries: string[];
  onSelect?: any;
}

const CountriesDropdown = (props: CountriesDropdownProps): JSX.Element => {
  /*const handleSelect = (e: any) => {
    console.log(e);
  };*/
  const { countries, onSelect } = props;
  const defaultOption = countries[0];
  return (
    <Dropdown
      className="dropdown-container"
      controlClassName="main-dropdown"
      options={countries}
      onChange={onSelect}
      placeholder="Select an option"
    />
  );
};

export default CountriesDropdown;
