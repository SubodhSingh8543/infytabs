import { useEffect, useState } from "react";
import axios from "axios";
import { GridItem, SimpleGrid } from "@chakra-ui/react";
import DoctorCards from "../Components/DoctorsCards";

const HomePage = () => {
    const [data,setData] = useState([]);

    const getData = async () => {
        try {
            const fetchedData = await axios.get(`http://localhost:17000/doctors/alldoctors`,{
                headers : {
                    Authorization : `Bearer ${JSON.parse(localStorage.getItem("token"))}`
                }
            });
            // console.log("this is data",fetchedData.data);
            setData(fetchedData.data);
        } catch (error) {
            console.log(error.message);
        }
    } 

    useEffect(() => {
        console.log("this is data");
        getData()
    },[])

    console.log(data);
    return(
        <>
          <SimpleGrid columns={[1,2,2,3,3]} justifyContent={"center"} alignItems={"center"} margin={"auto"} >
            {data?.map((el,i) => (
                <GridItem key={i} margin={"auto"}>
                    <DoctorCards el={el}/>
                </GridItem>
            ))}
          </SimpleGrid>
        </>
    )
}

export default HomePage;