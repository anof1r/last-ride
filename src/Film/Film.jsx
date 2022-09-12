import React, { useState, useEffect } from 'react'
import Optional from '../Optional'
import classes from '../FilmsGrid/FilmsGrid.module.css'

export default function Film(film) {
    console.log(film)
    const [showDropDown, setShowDropDown] = useState(false)

    return (
        <div className={`container ${classes.order}`}>
            <div className={`row ${classes.shortInfo}`}>
                <div className="col-1">
                    <button
                        className={`${classes.arrow} ${showDropDown ? classes.down : ""}`}
                        onClick={() => setShowDropDown(!showDropDown)}
                    />
                </div>
                <div className="col-4" style={{"font-weight": "bold" , "fontSize": "25px"}}>
                    {film.place}
                </div>
                <div className="col" style={{"fontSize": "25px"}}>
                    {film.title}
                </div>
                <div className="col-2" style={{"color": "green", "font-weight": "bold", "fontSize": "25px"}}>
                    {film.rate}
                </div>
            </div>
            <Optional condition={showDropDown}>
                <div className={classes.dropdown}>
                    <div className={`row ${classes.dropdown_row}`}>
                    </div>
                    <div className={`row ${classes.dropdown_row}`}>
                        <div className="col">
                            <img src={`https://image.tmdb.org/t/p/original/${film.img}`} alt={film.place} width="500" height="600" />
                        </div>
                    </div>
                </div>
            </Optional>
        </div>
    )
}
