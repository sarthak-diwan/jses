import classes from './Wrapper.module.css';
import MainCard from './MainCard';
import Sidebar from './Sidebar';
import { useState } from 'react';
import Sidebar2 from './Sidebar2';

const Wrapper = () => {
    const [currentHash,setCurrentHash] = useState("MD5");
    const [itemType, setItemType] = useState("HASH");
    return(
        <div className={classes.wrapper}>
            <MainCard currentHash={currentHash} setCurrentHash={setCurrentHash} itemType={itemType}>
            </MainCard>
            <Sidebar currentHash={currentHash} setCurrentHash={setCurrentHash} itemType={itemType} setItemType={setItemType}>
            </Sidebar >
            <Sidebar2 currentHash={currentHash} setCurrentHash={setCurrentHash} itemType={itemType} setItemType={setItemType}>
            </Sidebar2>
        </div>
    );
}
export default Wrapper;