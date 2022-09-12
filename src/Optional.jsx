import { Fragment } from "react";


const Optional = ({ condition, children }) => {
    if (condition) return children
    else return <Fragment />
};

export default Optional;
