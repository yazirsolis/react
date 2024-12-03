function TabButton({children, onSelect, isSelected}){
    console.log('TABBUTTON COMPONENT RENDERING');
    return (
    <li>
        <button
            className={isSelected ? "active" : undefined} 
            onClick={onSelect}
        >
            {children}
        </button>
    </li>
    );
}

export default TabButton;