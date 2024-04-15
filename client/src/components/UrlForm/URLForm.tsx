import { useState } from "react";
import MyButton from "../MyButton/MyButton";
import "./URLForm.scss";
import axios from "axios";
import { serverUrl } from "../../helpers/Constants";
import { URLData } from "../../types";

type PropsType = {
  getDataUrl: (data: URLData | null) => void;
  fetchTableData: () => void;
};

const URLForm: React.FC<PropsType> = ({ getDataUrl, fetchTableData }) => {
  const [inputValue, setInputValue] = useState<string>();
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (inputValue && inputValue.includes("http")) {
      try {
        const res = await axios.post(`${serverUrl}/shortUrl`, {
          fullUrl: inputValue,
        });
        getDataUrl(res?.data);
        fetchTableData();
        console.log("res", res);

        setInputValue("");
      } catch (error) {
        console.log("my error", error);
        setErrorMessage("This url is already created");
        setTimeout(() => {
          setErrorMessage("");
        }, 3000);
      }
    } else {
      setErrorMessage("Must be http format");
      getDataUrl(null);
      setTimeout(() => {
        setErrorMessage("");
      }, 3000);
    }
  };

  const changeInputValue = (e: React.ChangeEvent<HTMLInputElement>) =>
    setInputValue(e.target.value);

  return (
    <form
      className="form"
      method="POST"
      action="/shortUrls"
      onSubmit={handleSubmit}
    >
      <div className="inputContainer">
        <input
          type="text"
          placeholder="Enter your long URL"
          className="inputField"
          value={inputValue}
          onChange={changeInputValue}
          name="fullUrl"
        />

        <MyButton btnType="submit" text="Shorten" isDisabled={!inputValue} />
      </div>
      {errorMessage && (
        <div className="alert alert-danger" role="alert">
          {errorMessage}
        </div>
      )}
    </form>
  );
};

export default URLForm;
