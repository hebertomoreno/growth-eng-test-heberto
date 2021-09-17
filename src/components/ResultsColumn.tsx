import React from "react";
import { ResultColumnProps } from "../helpers/interfaces";

const ResultsColumn = (props: ResultColumnProps) => {
  const { data, currency } = props;

  return (
    <div className="results column">
      {data.map((figure) => (
        <p>
          {figure} {currency ? currency : ""}
        </p>
      ))}
    </div>
  );
};

export default ResultsColumn;
