import React from "react";
import "./URLCardItem.scss";
import MyButton from "../MyButton/MyButton";
import { URLData } from "../../types";
import { NavLink } from "react-router-dom";
import { serverUrl } from "../../helpers/Constants";

type PropsType = {
  urlData: URLData;
};

const URLCardItem: React.FC<PropsType> = ({ urlData }) => {
  const { shortUrl, fullUrl } = urlData;
  const copyToClipboard = () => {
    // Логіка копіювання у буфер обміну
    navigator.clipboard.writeText(shortUrl);
    // Можна також відобразити сповіщення, що URL скопійовано
    alert("Success");
  };

  return (
    <div className="url-card">
      <div className="url">
        <p>
          <b style={{ marginRight: "10px" }}>Short URL:</b>{" "}
          <NavLink
            to={`${serverUrl}/shortUrl/${shortUrl}`}
            target="_blank"
            rel="noreferrer noopener"
          >
            {shortUrl}
          </NavLink>
        </p>
        <p>
          <b style={{ marginRight: "10px" }}>Original URL:</b>{" "}
          <NavLink to={fullUrl} target="_blank" rel="noreferrer noopener">
            {fullUrl}
          </NavLink>
        </p>
      </div>
      <MyButton
        handleClick={copyToClipboard}
        btnType={"button"}
        text={"Copy Short URL"}
        isDisabled={false}
      />
    </div>
  );
};

export default URLCardItem;
