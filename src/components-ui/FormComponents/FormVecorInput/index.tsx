import {TextField} from "@mui/material";
import "./style.scss";


const axes = ['x', 'y', 'z'];

const FormVectorInput  = () => {



  return (
    <div className="formVectorInput">
        <label>Vector Input</label>
        <div className="formVectorInput__input-group">
          {axes.map(axis => (

              <TextField type="number" inputProps={{step: 0.1}} className="formVectorInput__input" label={axis} size="small" variant="filled" />

          ))}
        </div>
    </div>
  );

}



export default FormVectorInput;