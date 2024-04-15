import React from "react";

type PropsType = {
  value: Array<string>;
};

const TableHeader: React.FC<PropsType> = ({ value }) => {
  return (
    <thead className="table-dark">
      <tr>
        {value &&
          value.map((item: string, index: number) => (
            <th scope="col" key={index}>
              {item}
            </th>
          ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
