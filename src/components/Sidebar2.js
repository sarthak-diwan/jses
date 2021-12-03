import allHashes from './Hashes/Hashes';
import classes from './Sidebar.module.css';

const Sidebar2 = (props) => {
    const liClickHandler = (event) => {
        props.setCurrentHash(event.target.innerText);
        props.setItemType("ENC");
        // if(event.target.innerText === "RSA"){
        //     props.setItemType("RSA");
        // }
        // if(event.target.innerText === "RSA-DEC"){
        //     props.setItemType("RSA-DEC");
        // }
        // console.log(event);
        document.getElementById("userInput").value="";
    }

    return (
        <div className={classes.cont}>
            <ul className={classes['sidebar-list']}>
                <li className={props.currentHash === "AES" ? classes.selected : ""} onClick={liClickHandler}>
                    AES
                </li>
                <li className={props.currentHash === "AES-DEC" ? classes.selected : ""} onClick={liClickHandler}>
                    AES-DEC
                </li>
                <li className={props.currentHash === "RSA" ? classes.selected : ""} onClick={liClickHandler}>
                    RSA
                </li>
                <li className={props.currentHash === "RSA-DEC" ? classes.selected : ""} onClick={liClickHandler}>
                    RSA-DEC
                </li>
            </ul>
        </div>
    );
}
export default Sidebar2;