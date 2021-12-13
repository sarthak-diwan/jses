import classes from './Wrapper.module.css';
import MainCard from './MainCard';
import Sidebar from './Sidebar';
import { useState } from 'react';
import Sidebar2 from './Sidebar2';

const Wrapper = () => {
    const [currentHash,setCurrentHash] = useState("MD5");
    const [itemType, setItemType] = useState("HASH");
    const [selectedValue, setSelectedValue] = useState('MD5');
    const [note, setNote] = useState('');
    const [chain, setChain] = useState([]);
    const [showAdd, setShowAdd] = useState(true);
    return(
        <div className={classes.wrapper}>
            <MainCard showAdd={showAdd} selectedValue={selectedValue} setSelectedValue={setSelectedValue} note={note} setNote={setNote} chain={chain} setChain={setChain} currentHash={currentHash} setCurrentHash={setCurrentHash} itemType={itemType}>
            </MainCard>
            <Sidebar setShowAdd={setShowAdd} note={note} setNote={setNote} chain={chain} setChain={setChain} currentHash={currentHash} setCurrentHash={setCurrentHash} itemType={itemType} setItemType={setItemType}>
            </Sidebar >
            <Sidebar2 note={note} setNote={setNote} chain={chain} setChain={setChain} currentHash={currentHash} setCurrentHash={setCurrentHash} itemType={itemType} setItemType={setItemType}>
            </Sidebar2>
        </div>
    );
}
export default Wrapper;