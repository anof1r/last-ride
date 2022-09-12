import Film from '../Film/Film'
import classes from './FilmsGrid.module.css'
import { useState, useEffect } from "react"
import axios from "axios"

function FilmsGrid() {
    const [films, setFilms] = useState([]);

    useEffect(() => {
        axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=0b6ea028fcbf88f08db6d0a34255e651&language=en-US&page=1')
            .then(res => {
                setFilms(res.data.results)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])


    if (films) {
        return (
            <div className="container">
                <div className={classes.orders_header}>
                    <div className={"row " + classes.shortInfo}>
                        <div className="col-1"></div>
                        <div className="col-4">Место</div>
                        <div className="col">Название фильма</div>
                        <div className="col-2">Рейтинг</div>
                    </div>
                </div>
                {films.map((film, index) => {
                    return (<Film place={index + 1} title={film.title} rate={film.vote_average} img={film.poster_path}/>)
                })}
            </div>
        )
    }
}

export default FilmsGrid