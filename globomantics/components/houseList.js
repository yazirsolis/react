import loadingStatus from "../helpers/loadingStatus";
import useHouse from "../hooks/useHouses";
import HouseRow from "./houseRow";
import LoadingIndicator from "./loadingIndicator";
//import HouseRowMem from "./houseRow";

//fetch data from API
/*
const houseArray = [
    {
        id:1,
        address: "12 Valley of Kings, Geneva",
        country: "Switzerland",
        price: 900000,
    },
    {
        id:2,
        address: "89 Road of Forks, Bern",
        country: "Switzerland",
        price: 500000,
    },
];
*/

const HouseList = ({ /* Commented because of implementation of context selectHouse */ }) => {    
    /* Not used anymore
    const [counter, setCounter] = useState(0);
    if (Math.random() > 0.5) {
        setCounter(counter + 1);
    }
    */

    /*
        (side)effects.
        Unpredictable operations in components should be set aside.

        Such operations are called side effects or just effects in short.
        Whenever we reach out to something that is not within the realm of React,
        we have to use an effect because the results are unpredictable and may be unreliable.

        Examples:
        -API interaction
        -Use browser APIs (e.g. documents, window)
        -Using timing functions (e.g. setTimeout)

        To perform an effect in the function of a component, the effect hook is used.
        
        useEffect(() => {
            //perform the effect
        });

        useEffect takes a function as a parameter, this function will be executed 
        automatically after React is done running the component's pure function and the
        browser has been updated.
    */

    const { houses, setHouses, loadingState } = useHouse();

    if(loadingState !== loadingStatus.loaded)
        return <LoadingIndicator loadingState={loadingState} />;
    
    const addHouse = () => {
        setHouses([
            ...houses,
            {
                id: 3,
                address: "32 Valley Way, New York",
                country: "USA",
                price: 1000000,
            },
        ]);
    };

    return (
        <>
            <div className="row mb-2">
                <h5 className="themeFontColor text-center">
                    Houses currently on the market
                </h5>
            </div>
            <table className="table table-hover">
                <thead>
                    <th>Address</th>
                    <th>Country</th>
                    <th>Asking Price</th>
                </thead>
                <tbody>
                    {houses.map((h) => (
                        <HouseRow key={h.id} house={h} /*Commented because of implementation of context selectHouse={selectHouse} */ />
                    ))}
                </tbody>
            </table>
            <button className="btn btn-primary" onClick={addHouse}>
                Add
            </button>
        </>
    );
};

export default HouseList;