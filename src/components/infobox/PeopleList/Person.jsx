function Person({name, age, func, children}) {
return <div className="person" onMouseEnter={func}>
        <p>{name}</p>
        <p>{age}</p>
        {children}
    </div>
}

export default Person