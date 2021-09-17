import React, { useEffect } from "react";
import Form from "react-bootstrap/form";
import Dropdown from "react-bootstrap/dropdown";
import { SalaryInputProps } from "../helpers/interfaces";
import "../assets/styles/components/SalaryInput.scss";

const SalaryInput = (props: SalaryInputProps): JSX.Element => {
  //TODO: Prevent inputs that aren't numbers or periods

  const {
    salary,
    countryCurrency,
    selectedCurrency,
    handleInputChange,
    handleInputSubmit,
    onChangeCurrency,
  } = props;

  const makeCurrencyOptions = () =>
    countryCurrency ? [countryCurrency, "USD"] : ["USD"];

  let currencyOptions: string[] = makeCurrencyOptions();

  useEffect(() => {
    currencyOptions = makeCurrencyOptions();
  }, [countryCurrency]);

  return (
    <Form className="salary-input" onSubmit={handleInputSubmit}>
      <div className="text-input-currency">
        <Form.Group className="mb-3" controlId="formSalary">
          <Form.Label>
            Salary:
            <Form.Control
              onChange={handleInputChange}
              onKeyPress={(event: any) => {
                if (!/[0-9]/.test(event.key)) {
                  event.preventDefault();
                }
              }}
              value={salary.toString()}
              placeholder="Input yearly salary"
            />
          </Form.Label>
        </Form.Group>
        <Dropdown onSelect={onChangeCurrency}>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            {selectedCurrency}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {currencyOptions.map((option) => {
              return <Dropdown.Item eventKey={option}>{option}</Dropdown.Item>;
            })}
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </Form>
  );
};

export default SalaryInput;
