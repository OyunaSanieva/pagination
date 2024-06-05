export default function Coutnries({countries, loading}) {
    if(loading){
        return <h2 className= "load">Load...</h2>
    }
    return (
        <>
        <h1 className="text-primary">Cтраны</h1>

        <ul className="list-group mb-2">
            {
                countries.map((country, index) => (
                    <li className="list-group-item" key={index}> 
                        {country.name}
                        <img src={country.flag} alt='img' className="ml-2" style={{width: 25}}/>
                    </li>
                ))
            }
        </ul>
            </>
    )
}
