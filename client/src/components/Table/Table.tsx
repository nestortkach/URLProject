// Table.js
import React from "react";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";
import { URLData } from "../../types";

type PropsType = {
  data: Array<URLData>;
};

const Table: React.FC<PropsType> = ({ data }) => {
  const tableHaderValues = ["#", "Full Url", "Short Url"];
  return (
    <table className="table table-hover dark">
      <TableHeader value={tableHaderValues} />
      <tbody>
        {data?.map((item, index) => (
          <TableRow
            key={index}
            number={index + 1}
            fullUrl={item.fullUrl}
            shortUrl={item.shortUrl}
          />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
