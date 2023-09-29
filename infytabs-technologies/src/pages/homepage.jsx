import { useEffect, useState } from "react";
import axios from "axios";

const HomePage = () => {
    const [data,setData] = useState([]);

    const getData = async () => {
        const fetchedData = await axios(`http://localhost:4500/product`);
        setData(fetchedData.data);
    } 

    useEffect(() => {
        getData()
    },[])

    console.log(data);
    return(
        <>
          HomePage
        </>
    )
}

export default HomePage;