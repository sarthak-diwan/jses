import CryptoJS from 'crypto-js';
import { AES } from 'crypto-js';
import UserInput from '../UserInput';
import Output from '../Output';
import Button from '../UI/Button';
import Parameter from '../UI/Parameter';
import ParameterSelect from '../UI/ParameterSelect';
import classes from '../MainCard.module.css'
import Base64 from 'crypto-js/enc-base64';
const AESCard = (props) => {
    const outputStr = props.outputStr
    const setOutputStr = props.setOutputStr
    const encSubmitHandler = (event) => {
        // console.log(props.currentHash);
        event.preventDefault();
        const inputData = event.target[0].value;
        const inputKey = event.target[1].value;
        const inputIV = event.target[2].value;
        const inputMode = event.target[3].value;
        const inputPadding = event.target[4].value;
        if(props.mode === "ENC"){
            let encrypted = AES.encrypt(Base64.parse(inputData), Base64.parse(inputKey), {
                mode: CryptoJS.mode[inputMode],
                padding: CryptoJS.pad[inputPadding],
                iv: Base64.parse(inputIV)
            })
            setOutputStr(encrypted.toString());
        }else if(props.mode === "DEC"){
            let decrypted = AES.decrypt(inputData, Base64.parse(inputKey), {
                mode: CryptoJS.mode[inputMode],
                padding: CryptoJS.pad[inputPadding],
                iv: Base64.parse(inputIV)
            })
            setOutputStr(decrypted.toString(CryptoJS.enc.Base64));
        }
    }
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

export default AESCard;