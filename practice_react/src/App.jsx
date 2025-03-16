 export const App = () => {
  return (<div>
     <NetflixSeries/>
     <NetflixSeries/>
     <NetflixSeries/>
     <NetflixSeries/>
     <NetflixSeries/>
  </div>
  );
 };

 const NetflixSeries = () => {
  const name = "Queen Of Tears";
  const rating = "8.2";
  let age = 18;
  
  const canWatch = () => {
    if (age >= 18) return "Watch Now";
    return "Not Available";
  };

 
  
  const summary = `
  Baek Hyun-woo and Hong Hae-in navigate 
  a tense relationship, both at home and at work. 
  But upon deciding his future, Hyun-woo pays a 
  visit to his family.
`;
 const getGenre = () => {
  const genre = "Romcom";  
  return genre;
 };
 
  return (
         <>
    <div>
        <img src="qot.jpg" alt="qot.jpg" 
        width="40%" height="40%"/>
    </div>
    <h2>Name: {name} </h2>
  <h3>Rating: {rating}</h3>
  <p>Summary: {summary} </p>
  <p>Genre: {getGenre()}</p>
  <button>{canWatch()}</button>
    </>
    );
 };
