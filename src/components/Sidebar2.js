import allHashes from './Hashes/Hashes';
import classes from './Sidebar.module.css';

const Sidebar2 = (props) => {
    const liClickHandler = (event) => {
        props.setCurrentHash(event.target.innerText);
        props.setItemType("ENC");
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
            </ul>
        </div>
    );
}
export default Sidebar2;