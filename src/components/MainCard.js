import Card from './UI/Card'
import classes from './MainCard.module.css'
import UserInput from './UserInput';
import Output from './Output';
import {inputChangeHandler} from './Output';
import { useState } from 'react';
import allHashes from './Hashes/Hashes';
import Button from './UI/Button';
import Parameter from './UI/Parameter';
import ParameterSelect from './UI/ParameterSelect';
import { AES } from 'crypto-js';
import Base64 from 'crypto-js/enc-base64';
const CryptoJS = require("crypto-js");

const AESParams = () => {
    return(
        <UserInput></UserInput>
    );
};

const encHandler = (currentHash) => {
    console.log(currentHash);
    if(currentHash === "AES"){
        return AESParams();
    }
}

const MainCard = (props) => {
    const [outputStr, setOutputStr] = useState('');
    const inputChangeHandler = (event) => {
        // console.log(event);
        let result = allHashes[props.currentHash](event.target.value);
        // console.log(result);
        setOutputStr(result);
    }
    const encSubmitHandler = (event) => {
        console.log(props.currentHash);
        event.preventDefault();
        
        const inputData = event.target[0].value;
        const inputKey = event.target[1].value;
        const inputIV = event.target[2].value;
        const inputMode = event.target[3].value;
        const inputPadding = event.target[4].value;
        if(props.currentHash === "AES"){
            let encrypted = AES.encrypt(Base64.parse(inputData), Base64.parse(inputKey), {
                mode: CryptoJS.mode[inputMode],
                padding: CryptoJS.pad[inputPadding],
                iv: Base64.parse(inputIV)
            })
            setOutputStr(encrypted.toString());
        }else if(props.currentHash === "AES-DEC"){
            let decrypted = AES.decrypt(inputData, Base64.parse(inputKey), {
                mode: CryptoJS.mode[inputMode],
                padding: CryptoJS.pad[inputPadding],
                iv: Base64.parse(inputIV)
            })
            setOutputStr(decrypted.toString(CryptoJS.enc.Base64));
        }
    }

    if(props.itemType === "ENC"){
        return(
            <form onSubmit={encSubmitHandler} className={classes['main-card']}>
                <UserInput>
                </UserInput>
                <Parameter pName="KEY">
                </Parameter>
                <Parameter pName="IV">
                </Parameter>
                <ParameterSelect value="MODE" values={["ECB","CBC","CFB","CTR","OFB"]}>
                </ParameterSelect>
                <ParameterSelect value="PADDING" values={["Pkcs7","Iso97971","AnsiX923","Iso10126","ZeroPadding","NoPadding"]}>
                </ParameterSelect>
                <Button type="submit">
                SUBMIT
                </Button>
                <Output value={outputStr}>
                </Output>
            </form>
        );
    }
    {/* {props.itemType === "ENC" ? encHandler(props.currentHash) : ""} */}
    return(
        <Card className={classes['main-card']}>
            <UserInput inputChangeHandler={inputChangeHandler}>
            </UserInput>
            <Button>
                SUBMIT
            </Button>
            <Output value={outputStr}>
            </Output>
        </Card>
    );
}
export default MainCard;