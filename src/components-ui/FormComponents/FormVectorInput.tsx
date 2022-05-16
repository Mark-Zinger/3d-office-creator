import {Input} from "@mui/material";


const axes = ['x', 'y', 'z'];

const FormVectorInput  = () => {



  return (
    <div>
      <div className="form-group">
        <label>Vector Input</label>
        <div className="input-group">
          {axes.map(axis => (
            <div className="input-group-prepend" key={axis}>
              <span className="input-group-text">{axis}</span>
              <Input type="number" inputProps={{step: 0.1}} className="form-control" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );

}



export default FormVectorInput;