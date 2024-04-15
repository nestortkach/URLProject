// TableRow.js
import React from "react";
import { serverUrl } from "../../helpers/Constants";
import { NavLink } from "react-router-dom";

type PropsType = {
  number: number;
  fullUrl: string;
  shortUrl: string;
};

const TableRow: React.FC<PropsType> = ({ number, fullUrl, shortUrl }) => {
  return (
    <tr>
      <th scope="row">{number}</th>
      <td>
        <NavLink to={fullUrl} target="_blank" rel="noreferrer noopener">
          {fullUrl}
        </NavLink>
      </td>
      <td>
        <NavLink
          to={`${serverUrl}/shortUrl/${shortUrl}`}
          target="_blank"
          rel="noreferrer noopener"
        >
          {shortUrl}
        </NavLink>
      </td>
    </tr>
  );
};

export default TableRow;
