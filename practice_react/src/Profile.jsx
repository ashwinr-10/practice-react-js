function Profile(){
    return (
    <div>
        <h1> Profile Card Challenge </h1>
     <ProfileCard
        name="Alice"
        age={30}
        greetings={
            <div>
                <strong>Hi Alice,have a wonderful day!</strong>
            </div>
        }
     >
            <p>Hobbies: Reading, Hiking</p>
            <button>Contact</button>
        </ProfileCard>
    </div>
    )
}

export default Profile;

function ProfileCard({name,age,greetings,children}) {
    
    return (
        <>
          <h2>Name: {name}</h2>
          <p>Age: {age}</p>
          <p>{greetings}</p>
          <div>{children}</div>
        </>
    );
}