import React from "react";
import Dropdown from "react-bootstrap/dropdown";
//import Dropdown from "react-dropdown";
import { CountriesDropdownProps } from "../helpers/interfaces";
import "../assets/styles/components/CountriesDropdown.scss";

const CountriesDropdown = (props: CountriesDropdownProps): JSX.Element => {
  const { countries, onSelect, selectedCountry } = props;

  return (
    <>
      <h2>Which country are you hiring in?</h2>
      <Dropdown onSelect={onSelect}>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          {selectedCountry}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {countries.map((option) => {
            return <Dropdown.Item eventKey={option}>{option}</Dropdown.Item>;
          })}
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};

export default CountriesDropdown;
