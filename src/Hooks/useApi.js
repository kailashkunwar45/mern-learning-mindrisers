import { useEffect, useState } from "react"
import axios from "axios";


export const useApi = (apiUrl, params) => {

  const [data, setdata] = useState();
  const [load, setload] = useState(false);
  const [err, seterr] = useState();

  const getdata = async () => {
    setload(true);
    try {
      const response = await axios.get(apiUrl, {
        params: params
      });
      setload(false);
      setdata(response.data);
    } catch (err) {
      setload(false);
    }

  }

  useEffect(() => {
    getdata();
  }, [])

  return [load, data, err];

}