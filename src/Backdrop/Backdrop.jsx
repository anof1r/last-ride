import { useEffect } from "react"
import classes from "./Backdrop.module.css"

export default function Backdrop({onClick, bindOnClickToEsc}) {
    let escKeyHandler = bindOnClickToEsc ? (event) => {
        if (event.key === "Escape"){
            (onClick)();
        }
    } : () => {}

    useEffect(() => {
        document.addEventListener('keydown', escKeyHandler);
        return () => {
            document.removeEventListener('keydown', escKeyHandler);
        }
    })

    return (
        <div className={classes.backdrop} onClick={onClick} />
    )
}
