const Home = () => {

    const handleClick = () => {
        console.log('clicked');
    }
    const handleClick2 = () => {
        console.log('clicked2');
    }

    return ( 
        <div className="home">
            <h2>
                Homepage
            </h2>
            <button onClick={handleClick}> Click me </button>
            <button onClick={(handleClick2)}>Click Me Again </button>
            </div>
        
     );
}
 

export default Home;

