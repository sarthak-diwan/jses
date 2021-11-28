import CryptoJS from "crypto-js";
import Base64 from 'crypto-js/enc-base64'
import Hex from 'crypto-js/enc-hex'
import Utf8 from 'crypto-js/enc-utf8'
import Latin1 from 'crypto-js/enc-latin1'
const allHashes = {
    "MD5":(input)=>{
        return CryptoJS.MD5(input).toString();
    },
    "SHA1":(input)=>{
        return CryptoJS.SHA1(input).toString();
    },
    "SHA256":(input)=>{
        return CryptoJS.SHA256(input).toString();
    },
    "SHA512":(input)=>{
        return CryptoJS.SHA512(input).toString();
    },
    "BASE64":(input)=>{
        return Base64.stringify(Utf8.parse(input)).toString();
    },
    "BASE64-DEC":(input)=>{
        return Latin1.stringify(Base64.parse(input));
    },
    "HEX":(input)=>{
        return Hex.stringify(Utf8.parse(input)).toString();
    },
    "HEX-DEC":(input)=>{
        input = input.replaceAll(" ","");
        return Latin1.stringify(Hex.parse(input)).toString();
    },
    "URL":(input)=>{
        return encodeURIComponent(input);
    },
    "URL-DEC":(input)=>{
        return decodeURIComponent(input);
    }
}
export default allHashes;
// export {MD5, SHA256};
