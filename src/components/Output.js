import { Fragment, useState } from "react";
import classes from './Output.module.css';
import CryptoJS from "crypto-js";
const OutputChangeHandler = () =>{

};

const Output = (props) => {
    return(
        <Fragment>
            <textarea className={classes.tb} value={props.value} readOnly id="hashOutput" placeholder={props.placeholder}>
            </textarea>
        </Fragment>
    );
}
export default Output;