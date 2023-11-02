import { useState } from 'react'
import useInterval from "./useInterval.jsx";
import axios from "axios";

function App() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("Waiting on the server");
  const [delay, setDelay] = useState(5000);

  useInterval(async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8080/companies/1.json", {
        headers: {
          'Cache-Control': 'no-cache',
          'Pragma': 'no-cache',
          'Expires': '0',
        }
      });
      if (response.data.ready) {
        setMessage("TIN: " + response.data.tin);
        setDelay(null);
      }
      console.log(new Date(), response.data);
    } catch (e) {
      console.error(e);
    }
  }, delay);

  return (
    <>
      <p>{message}</p>
    </>
  )
}

export default App
