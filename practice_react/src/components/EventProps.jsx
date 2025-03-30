import "./EventStyles.css";

export const EventProps = () => {
    const HandleWelcomeUser = (user) => {
        alert(`Hey, ${user}`);
    };

    const handleHover = () => {
        alert(`Hey, Thanks for hovering`)
    };

    return (
        <>
            <WelcomeUser
                onClick={() => HandleWelcomeUser("Vinod")}
                onMouseEnter={handleHover}
            />  
        </>
    );
};

const WelcomeUser = ({onClick,onMouseEnter}) => {
    //const {onClick,onMouseEnter} = props;
    const handleGreeting = () => {
        console.log(`Hey User, Welcome`);
        onClick();
    };

    return (
        <>
            <button onClick={onClick}>Click</button>
            <br/>
            <button onMouseEnter={onMouseEnter}>Click</button>
            <br/>
            <button onClick={handleGreeting}>Click</button>
        </>
    );
};