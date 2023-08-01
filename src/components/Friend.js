
export function Friend({ data, handleSelect, selected }) {
    return (<>
        <img src={data.image} alt={data.name} />
        <h3>{data.name}</h3>
        {data.balance === 0
            ? (<p>You and {data.name} are even</p>)
            : data.balance > 0
                ? (<p className="green"> {data.name} owes you £{data.balance}</p>)
                : (<p className="red"> You owe {data.name} £{-data.balance}</p>)}
        {selected === data.id ?
            <button className="button" onClick={() => handleSelect(null)}>Close</button>
            : <button className="button" onClick={() => handleSelect(data.id)}>Select</button>}

    </>);
}
