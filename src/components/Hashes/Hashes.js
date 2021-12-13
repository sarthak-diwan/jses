import CryptoJS from "crypto-js";
import Base64 from 'crypto-js/enc-base64'
import Hex from 'crypto-js/enc-hex'
import Utf8 from 'crypto-js/enc-utf8'
import Latin1 from 'crypto-js/enc-latin1'

const allOriginalHashes = {
    "MD5":(input)=>{
        return CryptoJS.MD5(input);
    },
    "SHA1":(input)=>{
        return CryptoJS.SHA1(input);
    },
    "SHA256":(input)=>{
        return CryptoJS.SHA256(input);
    },
    "SHA512":(input)=>{
        return CryptoJS.SHA512(input);
    },
    "BASE64":(input)=>{
        return Base64.stringify(input);
    },
    "HEX":(input)=>{
        return Hex.stringify(input);
    }
}

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
export {allHashes, allOriginalHashes};
// export {MD5, SHA256};
