import styles from "./Netflix.module.css"; 
import styled from "styled-components";
export const SeriesCard = ({curElem}) => {    //(props)
     // console.log(curElem);
     
    const { id , img_url , name , rating , description , genre , cast , watch_url } = curElem;   //props.curElem
   const ButtonStyled = styled.button({
    padding: "1.2rem 2.4rem",
    border: "none",
    fontSize: "1.6rem",
    backgroundColor: "var( --bnt-hover-bg-color)", //`${rating >= 8.5 ? "#7dcea0" : "#f7dc6f"}`
    color: "var(--bg-color)",
    fontWeight: "bold",
    cursor: "pointer",
   });
    //const btn_style = {} 
    const ratingClass = rating >= 8.5 ? styles.super_hit : styles.average; 
    return (
        <li className={styles.card} key={id}>
        <div>
          <img src={img_url} alt="qot.jpg" 
          width="40%" height="40%"/>
          </div>
      {/* <div className={styles["card-content"]}> */}
        <div className="flex flex-col gap-6 py-6 px-6">
          <h2>Name: {name} </h2>
        <h3>
          Rating: 
          <span className={`${styles.rating} ${ratingClass}`}> 
          {rating}
          </span>
        </h3>
        <p className="text-3xl font-bold underline">Summary: {description} </p>
        <p>Genre: {genre.join(", ")}</p>
        <p>Cast: {cast.join(", ")}</p>
        <a href={watch_url} target="_blank">
        {/* <button style={btn_style}>Watch Now</button> */}
        <ButtonStyled>Watch Now</ButtonStyled>
        </a>
      </div>

        </li>
     )
}

