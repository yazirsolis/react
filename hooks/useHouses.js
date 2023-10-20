import { useEffect, useState } from "react";
import useGetRequest from "./useGetRequest";

const useHouse = () => {
    const [houses, setHouses] = useState([] /*houseArray*/); //Initializing with empty array because getting data from API
    const { get, loadingState } = useGetRequest("/api/houses");

    //Getting values from API using RenderingSideEffects
    useEffect(() => {
        const fetchHouses = async () => {
            const houses = await get();
            setHouses(houses);
        };
        fetchHouses();
    }, [get]);

    return { houses, setHouses, loadingState };
};

export default useHouse;