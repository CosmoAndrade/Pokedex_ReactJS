import { useEffect, useState } from "react";
import axios from "axios";

const useRequestData = (url, initialData) => {
  const [data, setData] = useState([initialData]);

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        alert("Ocorreu um erro, tente novamente");
      });
  }, []);

  return data;
};

export default useRequestData;
