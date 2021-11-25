import classes from './ParameterSelect.module.css'
const ParameterSelect = (props) => {
    let jsxCode = [];
    if(props.values){
        // console.log(props.values);
        for(let i=0; i<props.values.length; i++){
            jsxCode.push(
                <option key={i} value={props.values[i]}>{props.values[i]}</option>
            );
        }
    }
    return (
        <div>
            <label>{props.value}:</label>
            <select className={classes.select}>
                {jsxCode}
            </select>
        </div>
    );
}
export default ParameterSelect;