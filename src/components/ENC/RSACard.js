import UserInput from '../UserInput';
import Output from '../Output';
import Button from '../UI/Button';
import ParameterSelect from '../UI/ParameterSelect';
import classes from '../MainCard.module.css'
import { useState } from 'react';
const rsa = require('node-rsa');

const RSACard = (props) => {
    const [publick, setpublic] = useState('');
    const [privatek, setprivate] = useState('');
    const outputStr = props.outputStr;
    const setOutputStr = props.setOutputStr;
    const rsaSubmitHandler = (event) => {
        event.preventDefault();
        if(props.mode === "ENC"){
            const inputData = event.target[0].value;
            const inputKey = parseInt(event.target[1].value);
            var key = new rsa({b:inputKey}).generateKeyPair()
            var publicKey = key.exportKey("public");
            var privateKey = key.exportKey("private");
            var public_key = new rsa(publicKey)
            var encrypted = public_key.encrypt(inputData,'base64')
            setOutputStr(encrypted)
            setpublic(publicKey)
            setprivate(privateKey)
        } else if (props.mode === "DEC"){
            const encrypted = event.target[0].value;
            const privatekey = event.target[1].value;
            var private_Key = new rsa(privatekey)
            var decrypt = private_Key.decrypt(encrypted,'utf8')
            setOutputStr(decrypt)
            setpublic('')
            setprivate('')
        }
    }
    if(props.mode === "ENC"){
            return(
                <form onSubmit={rsaSubmitHandler} className={classes['main-card']}>
                    <UserInput placeholder="Message to be Encrypted">
                    </UserInput>
                    <ParameterSelect value="KEY SIZE" values={[512,1024,2048,3072,4096]}>
                    </ParameterSelect>
                    <Button type="submit">
                    SUBMIT
                    </Button>
                    <Output value={outputStr} placeholder="Encrypted Data">
                    </Output>
                    <Output value={publick} placeholder="Public Key">
                    </Output>
                    <Output value={privatek} placeholder="Private Key">
                    </Output>
                </form>
            );
            
    }else if(props.mode === "DEC"){
        return(
            <form onSubmit={rsaSubmitHandler} className={classes['main-card']}>
                <UserInput placeholder="Encrypted message">
                </UserInput>
                <UserInput placeholder="Private key">
                </UserInput>
                <Button type="submit">
                SUBMIT
                </Button>
                <Output value={outputStr} placeholder="Original Message">
                </Output>
            </form>
        );
    }
}
export default RSACard;