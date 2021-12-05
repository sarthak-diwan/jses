import classes from './Parameter.module.css'

const Parameter = (props) => {
    return(
        <div>
            <label>
                {props.pName}: 
            </label>
            <input>
            </input>
        </div>
    );
}

export default Parameter;