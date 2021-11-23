import Card from './UI/Card'
import classes from './MainCard.module.css'
import UserInput from './UserInput';
import Output from './Output';
import {inputChangeHandler} from './Output';
import { useState } from 'react';
import allHashes from './Hashes/Hashes';
const CryptoJS = require("crypto-js");

const MainCard = (props) => {
    const [outputStr, setOutputStr] = useState('');
    const inputChangeHandler = (event) => {
        // console.log(event);
        let result = allHashes[props.currentHash](event.target.value);
        // console.log(result);
        setOutputStr(result);
    }
    return(
        <Card className={classes['main-card']}>
            <UserInput inputChangeHandler={inputChangeHandler}>
            </UserInput>
            <Output value={outputStr}>
            </Output>
        </Card>
    );
}
export default MainCard;