import axios from "axios";

const convertCurrency = (
  totalAnnualSalary: string,
  fromCurrency: string,
  toCurrency: string
): Promise<any> => {
  return axios
    .get<string>("https://api.exchangerate.host/convert", {
      params: {
        from: fromCurrency,
        to: toCurrency,
        amount: totalAnnualSalary,
      },
    })
    .then((response) => response.data)
    .catch((error) => {
      console.error(
        "There was an error connecting to the conversion server..."
      );
    });
};

export default convertCurrency;
