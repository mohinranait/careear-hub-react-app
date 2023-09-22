import { useEffect, useState } from "react";

const useFetchData = (url) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const loadData = async () => {
            const res = await fetch(url);
            const data = await res.json();
            setData(data);
        }
        loadData();
    },[url])

    return data;
};

export default useFetchData;