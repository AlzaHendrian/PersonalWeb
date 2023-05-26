const Card = (props) => {
    return (
        <>
        <div className="carousel w-full rounded-lg">
            <div id={props.id1} className="carousel-item w-full">
                <img src={props.Card1} className="w-full" />
            </div> 
            <div id={props.id2} className="carousel-item w-full">
                <img src={props.Card2} className="w-full" />
            </div> 
            <div id={props.id3} className="carousel-item w-full">
                <img src={props.Card3} className="w-full" />
            </div> 
        </div> 
        {/* <div className="flex justify-center w-full py-2 gap-2">
            <a href={`#${props.id1}`} className="btn btn-xs">1</a> 
            <a href={`#${props.id2}`} className="btn btn-xs">2</a> 
            <a href={`#${props.id3}`} className="btn btn-xs">3</a>
        </div> */}
        </>
    )
}

export default Card