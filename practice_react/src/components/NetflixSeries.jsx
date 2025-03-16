import seriesData from "../api/seriesData.json";
const NetflixSeries = () => { 
    return (
      <ul>
        <li>
        <div>
          <img src={seriesData[0].img_url} alt="qot.jpg" 
          width="40%" height="40%"/>
          </div>
          <h2>Name: {seriesData[0].name} </h2>
        <h3>Rating: {seriesData[0].rating}</h3>
        <p>Summary: {seriesData[0].description} </p>
        <p>Genre: {seriesData[0].genre}</p>
        <p>Cast: {seriesData[0].cast}</p>
        <a href={seriesData[0].watch_url} target="_blank">
        <button>Watch Now</button>
        </a>

        </li>
        <li>
        <div>
          <img src={seriesData[1].img_url} alt="qot.jpg" 
          width="40%" height="40%"/>
          </div>
          <h2>Name: {seriesData[1].name} </h2>
        <h3>Rating: {seriesData[1].rating}</h3>
        <p>Summary: {seriesData[1].description} </p>
        <p>Genre: {seriesData[1].genre}</p>
        <p>Cast: {seriesData[1].cast}</p>
        <a href={seriesData[1].watch_url} target="_blank">
        <button>Watch Now</button>
        </a>
        </li>

        <li>
        <div>
          <img src={seriesData[2].img_url} alt="qot.jpg" 
          width="40%" height="40%"/>
          </div>
          <h2>Name: {seriesData[2].name} </h2>
        <h3>Rating: {seriesData[2].rating}</h3>
        <p>Summary: {seriesData[2].description} </p>
        <p>Genre: {seriesData[2].genre}</p>
        <p>Cast: {seriesData[2].cast}</p>
        <a href={seriesData[2].watch_url} target="_blank">
        <button>Watch Now</button>
        </a>
        </li>
      </ul>
    );
   };
  
export default NetflixSeries;

 