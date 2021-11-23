import { Fragment } from "react";
import Button from "./UI/Button";
import classes from './UserInput.module.css'
const CryptoJS = require("crypto-js");

const UserInput = (props) => {
    return (
        <Fragment>
            <textarea className={classes.ta} autoFocus onChange={props.inputChangeHandler} id="userInput">
            </textarea>
            <Button>
                SUBMIT
            </Button>
        </Fragment>
    );
}
export default UserInput;