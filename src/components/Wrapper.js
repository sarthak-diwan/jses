import classes from './Wrapper.module.css';
import MainCard from './MainCard';
import Sidebar from './Sidebar';
import { useState } from 'react';

const Wrapper = () => {
    const [currentHash,setCurrentHash] = useState("MD5");
    return(
        <div className={classes.wrapper}>
            <MainCard currentHash={currentHash} setCurrentHash={setCurrentHash}>
            </MainCard>
            <Sidebar currentHash={currentHash} setCurrentHash={setCurrentHash}>
            </Sidebar>
        </div>
    );
}
export default Wrapper;