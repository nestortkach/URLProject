import axios from "axios";
import URLForm from "./components/UrlForm/URLForm";
import { useState, useEffect } from "react";
import { serverUrl } from "./helpers/Constants";
import { URLData } from "./types";
import Table from "./components/Table/Table";
import URLCardItem from "./components/URLCard/URLCardItem";
import "./index.scss";

function App() {
  const [data, setData] = useState<URLData[]>([]);
  const [currentUrl, setCurrentUrl] = useState<URLData | null>(null);

  const getDataUrl = (data: URLData | null) => setCurrentUrl(data);

  const fetchTableData = async () => {
    const response = await axios.get(`${serverUrl}/shortUrl`);
    setData(response.data);
  };

  useEffect(() => {
    fetchTableData();
  }, []);

  return (
    <div className="app">
      <div className="app-wrapper">
        <header className="header">
          <div className="header_intro">
            <h2>URL-short</h2>
            <h5>"Create easy pathways to information with shortened links!"</h5>
          </div>
          <URLForm getDataUrl={getDataUrl} fetchTableData={fetchTableData} />
        </header>

        <main className="main">
          {currentUrl && <URLCardItem urlData={currentUrl} />}
          <div className="content">
            {data.length ? (
              <div>
                <h4>All Urls from MongoDB</h4>
                <Table data={data} />
              </div>
            ) : (
              <div className="empty">
                <h1>There are not data from Database</h1>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
