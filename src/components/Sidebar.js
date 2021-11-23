import allHashes from './Hashes/Hashes';
import classes from './Sidebar.module.css';

const Sidebar = (props) => {
    const liClickHandler = (event) => {
        props.setCurrentHash(event.target.innerText);
        // console.log(event);
        document.getElementById("userInput").value="";
        
    }
    const getHashes = () => {
        let jsxCode = [];
        for(let k in allHashes){
            jsxCode.push(
                <li className={props.currentHash === k ? classes.selected : ""} onClick={liClickHandler} key={k}>
                    {k}
                </li>
            );
        }
        return jsxCode;
    }
    return (
        <div className={classes.cont}>
            <ul className={classes['sidebar-list']}>
                {getHashes()}
            </ul>
        </div>
    );
}
export default Sidebar;