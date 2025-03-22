export const SeriesCard = ({curElem}) => {    //(props)
     // console.log(curElem);
      const { id , img_url , name , rating , description , genre , cast , watch_url } = curElem;   //props.curElem
    return (
        <li key={id}>
        <div>
          <img src={img_url} alt="qot.jpg" 
          width="40%" height="40%"/>
          </div>
          <h2>Name: {name} </h2>
        <h3>Rating: {rating}</h3>
        <p>Summary: {description} </p>
        <p>Genre: {genre}</p>
        <p>Cast: {cast}</p>
        <a href={watch_url} target="_blank">
        <button>Watch Now</button>
        </a>

        </li>
     )
}

