import { Fragment } from "react";
import classes from './Header.module.css'
const Header = () => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>
                    JSES
                </h1>
                <p>JUST SOME EVERYDAY STUFF</p>
            </header>
        </Fragment>
    );
} 
export default Header;