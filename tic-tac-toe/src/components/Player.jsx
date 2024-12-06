import {useState} from 'react';

function Player({initialName, symbol, isActive}){
    const [playerName, setPlayerName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);

    function handleEditClick(){
        // In this way state updates are not performed instantly but at some point in the future
        // When React has time for it
        // In most cases, those state updates of course still are executed almost instantly.
        // setIsEditing(!isEditing);
        
        // Better implementation with Good Practice.
        setIsEditing(editing => !editing); // => schedule a state update to true
        //setIsEditing(editing => !editing);
    }

    function handleChange(event) {
        setPlayerName(event.target.value);
    }

    let editablePlayerName = <span className="player-name">{playerName}</span>;
    //let btnCaption = 'Edit';

    if(isEditing){
        editablePlayerName = (
            <input 
                type='text' 
                required  
                value={playerName}
                onChange={handleChange}
                //defaultValue={name} // This could be a good option to set default value and allow insert new input value 
            />
        );
        //btnCaption= 'Save'
    }

    return (
        <li className={isActive ? 'active' : undefined}>
            <span className="player">
                {editablePlayerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>
    );
}

export default Player;