
// props is a object of values
// function About(props) {
function About( { username, des, msg } ) {
    // console.log(props);
    return(
        <>
            <button onClick={() => msg() }> MSG BTN </button>
            
            {/* <h1>I'm {props.username}</h1>
            <p>{props.des}</p> */}
            
            <h1>I'm {username}</h1>
            <p>{des}</p>
        </>
    )
}

export default About;