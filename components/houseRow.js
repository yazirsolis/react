import { useContext } from "react";
import currencyFormatter from "../helpers/currencyFormatter";
import navValues from "../helpers/navValues";
import { navigationContext } from "./app";
//import React from 'react';

/*
You can conditionally apply almost anything in JSx.
Let's say we want to conditionally apply a CSS class to the 
td in HouseRow that displays the price.

let priceTd;

if(house.price < 500000)
    priceTd = <td>{currencyFormatter.format(house.price)}</td>;
else
    priceTd = <td className="text-primary">{currencyFormatter.format(house.price)}</td>;

Instead of this we use a ternary oparation directly in the line.
*/

const HouseRow = ({ house /* Commented because of implementation of context , selectHouse */ }) => {
    const { navigate } = useContext(navigationContext);
    return (
      <tr onClick={() => navigate(navValues.house, house)}>
        <td>{house.address}</td>
        <td>{house.country}</td>
        {house.price && (
          <td className={`${house.price >= 500000 ? "text-primary" : ""}`}>
            {currencyFormatter.format(house.price)}
          </td>
        )}
      </tr>
    );
  };

/*
Pure functions
-Easy to test
-Predictable
-Reliable
-Cacheable
-Function components must be pure
*/

/*
HouseRow is a pure function
because given the same props, 
it will render the same JSX every time.

We saw that all HowRoe components are rerendered,
anyway when the state of its parent, HouseList, changes.

But there is a way to memorize, cache, the output
for a component so that it doesnt rerender, when 
its prop values remain the same.

Its done by wrapping the component with React.memo
*/

//const HouseRowMem = React.memo(HouseRow);

export default HouseRow;
//export { HouseRowMem };