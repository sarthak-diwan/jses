import Card from "./UI/Card";
import classes from "./MainCard.module.css";
import UserInput from "./UserInput";
import Output from "./Output";
import { useState } from "react";
import { allHashes, allOriginalHashes } from "./Hashes/Hashes";
import Button from "./UI/Button";
import RoundButton from "./UI/RoundButton";
import AESCard from "./ENC/AESCard";
import RSACard from "./ENC/RSACard";

const MainCard = (props) => {
    const [outputStr, setOutputStr] = useState("");
    const inputChangeHandler = (event) => {
        // console.log(event);
        let result;
        if (props.chain.length == 0) {
            result = allHashes[props.currentHash](event.target.value);
        } else {
            result = allOriginalHashes[props.currentHash](event.target.value);
        }
        for (let i = 0; i < props.chain.length; i++) {
            result = allOriginalHashes[props.chain[i]](result);
        }
        // console.log(result);
        setOutputStr(result.toString());
    };
    const handleDropdownChange = (e) => {
        props.setSelectedValue(e.target.value);
    };

    const addChain = () => {
        let _ = props.chain;
        _.push(props.selectedValue);
        props.setChain(_);
        props.setNote(props.currentHash + " --> " + props.chain.join(" --> "));
    };
    const delChain = () => {
        let c = props.chain;
        if (c.length === 0) {
            props.setNote("");
            return;
        }
        c.pop();
        props.setChain(c);
        props.setNote(props.currentHash + " --> " + props.chain.join(" --> "));
    };
    if (props.itemType === "ENC") {
        let jsxTr;
        if (props.currentHash === "AES") {
            jsxTr = (
                <AESCard
                    outputStr={outputStr}
                    setOutputStr={setOutputStr}
                    mode="ENC"
                ></AESCard>
            );
        } else if (props.currentHash === "AES-DEC") {
            jsxTr = (
                <AESCard
                    outputStr={outputStr}
                    setOutputStr={setOutputStr}
                    mode="DEC"
                ></AESCard>
            );
        } else if (props.currentHash === "RSA") {
            jsxTr = (
                <RSACard
                    outputStr={outputStr}
                    setOutputStr={setOutputStr}
                    mode="ENC"
                ></RSACard>
            );
        } else if (props.currentHash === "RSA-DEC") {
            jsxTr = (
                <RSACard
                    outputStr={outputStr}
                    setOutputStr={setOutputStr}
                    mode="DEC"
                ></RSACard>
            );
        }
        return jsxTr;
    }

    let jsxCode = [];
    for (let k in allOriginalHashes) {
        jsxCode.push(<option value={k}>{k}</option>);
    }
    return (
        <Card className={classes["main-card"]}>
            <UserInput
                inputChangeHandler={inputChangeHandler}
                inputClass="hash"
            ></UserInput>
            <p style={{ color: "white", margin: "0px" }}>
                Current route: {props.note}
            </p>
            {props.showAdd ? (
                <div>
                    <select onChange={handleDropdownChange}> {jsxCode} </select>{" "}
                    <RoundButton
                        onClick={addChain}
                        children={"+"}
                    ></RoundButton>{" "}
                    <RoundButton
                        onClick={delChain}
                        children={"-"}
                    ></RoundButton>
                </div>
            ) : null}
            <Button>SUBMIT</Button>
            <Output value={outputStr} outputClass="hash"></Output>
        </Card>
    );
};
export default MainCard;
