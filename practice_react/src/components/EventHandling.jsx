import "./EventStyles.css";

export const EventHandling = () => {

    function handleButtonClick(event) {
        alert("Hey I am onClick Event");
        console.log(event);
    }

    const handleWelcomeUser = (Users) => {
        console.log(`Hey ${Users}, Welcome`);
    }

    return (
        <>
            <button onClick={handleButtonClick}>Click Me</button>
            <br/>
            <button onClick={(event) => handleButtonClick(event)}>Click Me 2</button>
            <br/>
            <button onClick={(event) => console.log(event)}>Inline Function</button>
            <br/>
            <button onClick={() => alert("Inline event function")}>Inline arrow function</button>
            <br/>
            <button onClick={() => handleWelcomeUser("ashwin")}>Click Me</button>
        </>
    );
};