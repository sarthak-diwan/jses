import Card from './UI/Card'
import classes from './MainCard.module.css'
import UserInput from './UserInput';
import Output from './Output';
import { useState } from 'react';
import allHashes from './Hashes/Hashes';
import Button from './UI/Button';
import AESCard from './ENC/AESCard';
import RSACard from './ENC/RSACard';

const MainCard = (props) => {
    const [outputStr, setOutputStr] = useState('');
    const inputChangeHandler = (event) => {
        // console.log(event);
        let result = allHashes[props.currentHash](event.target.value);
        // console.log(result);
        setOutputStr(result);
    }


    if(props.itemType === "ENC"){
        let jsxTr;
        if(props.currentHash === "AES"){
            jsxTr = <AESCard outputStr={outputStr} setOutputStr={setOutputStr} mode="ENC"></AESCard>
        }
        else if(props.currentHash === "AES-DEC"){
            jsxTr = <AESCard outputStr={outputStr} setOutputStr={setOutputStr} mode="DEC"></AESCard>
        }
        else if(props.currentHash === "RSA"){
            jsxTr = <RSACard outputStr={outputStr} setOutputStr={setOutputStr} mode="ENC"></RSACard>
        }
        else if(props.currentHash === "RSA-DEC"){
            jsxTr = <RSACard outputStr={outputStr} setOutputStr={setOutputStr} mode="DEC"></RSACard>
        }
        return jsxTr;
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