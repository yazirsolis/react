import React, { useCallback, useState } from "react";
import Banner from "./banner";
import navValues from "../helpers/navValues";
import ComponentPicker from "./ComponentPicker";

const navigationContext = React.createContext(navValues.home)

const App = () => {
    /*
        We are getting rid (deshacerse) of the selected house state
        the wrapper function, and the code that renders HouseList
    */
    //const [selectedHouse, setSelectedHouse] = useState();

    // const setSelectedHouseWrapper = (house) => {
    //     //do checks on house
    //     setSelectedHouse(house);
    // };

    const navigate = useCallback(
        (navTo, param) => setNav({ current: navTo, param, navigate }),
        []
    );

    const [nav, setNav] = useState({current: navValues.home, navigate});

    return (
        <navigationContext.Provider value={nav}>
            <Banner>
                <div>
                    Providing houses all over the world.
                </div>
            </Banner>
            <ComponentPicker currentNavLocation={nav.current} />
            {/* {selectedHouse ? (
                <House house={selectedHouse} />
            ) : (
                <HouseList selectHouse={setSelectedHouseWrapper} />
            )} */}
        </navigationContext.Provider>
    );
};

export { navigationContext };
export default App;