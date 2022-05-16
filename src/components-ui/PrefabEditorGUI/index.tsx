import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Card,
  TextField,
  Typography,
  Checkbox,
  FormControlLabel,
  Button
} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import "./style.scss";
import {useForm} from "react-hook-form";
import FormInput from "../FormComponents/FormInput";
import FormCheckbox from "../FormComponents/FormCheckbox";
import {useEffect} from "react";
import FormVecorInput from "../FormComponents/FormVecorInput";


function PrefabEditorGUI () {
  const {handleSubmit, control, watch} = useForm({mode: "onSubmit"});


  // useEffect(() => {
  //   const subscription = watch((value, { name, type }) => console.log(value, name, type));
  //   return () => subscription.unsubscribe();
  // },[watch])


  return (
    <Card className="prefabEditorGUI">
      <form onSubmit={handleSubmit((data => console.log(data)))}>
        <FormInput control={control} name="name" label="Имя" />
        <FormInput control={control} name="description" label="Описание" multiline rows={4}/>
        <FormCheckbox control={control} name="is_active" label="Активная" />

        <FormVecorInput/>
        <input type="submit" value="Save"/>
      </form>
      <Button>Загрузить модель</Button>



      {/*<Accordion>*/}
      {/*  <AccordionSummary*/}
      {/*    expandIcon={<ExpandMoreIcon/>}*/}
      {/*  >*/}
      {/*    <Typography>Основное параметры</Typography>*/}
      {/*  </AccordionSummary>*/}
      {/*  <AccordionDetails>*/}

      {/*    <TextField id="prefab_id" label="ID Префаба" fullWidth={true} />*/}
      {/*    <TextField id="name" label="Имя" fullWidth={true} />*/}
      {/*    <TextField id="description" label="Описание" fullWidth={true} />*/}
      {/*    <TextField id="gltf_path" label="Имя файла" fullWidth={true} />*/}
      {/*  </AccordionDetails>*/}
      {/*</Accordion>*/}
      {/*<Accordion>*/}
      {/*  <AccordionSummary*/}
      {/*    // expandIcon={ <ExpandMoreIcon/>}*/}
      {/*  >*/}
      {/*    <Typography>Дочерние элементы  <Checkbox/></Typography>*/}
      {/*  </AccordionSummary>*/}
      {/*  <AccordionDetails>*/}
      {/*    <FormControlLabel control={<Checkbox defaultChecked />} label="Горизонтально" />*/}
      {/*    <TextField id="outlined-basic" label="name" fullWidth={true} />*/}
      {/*    <TextField id="outlined-basic" label="description" fullWidth={true} />*/}
      {/*    <TextField id="outlined-basic" label="gltf_path" fullWidth={true} />*/}
      {/*  </AccordionDetails>*/}
      {/*</Accordion>*/}
      {/*<Accordion>*/}
      {/*  <AccordionSummary*/}
      {/*    expandIcon={ <Checkbox />}*/}
      {/*  >*/}
      {/*    <Typography>Коллайдеры</Typography>*/}
      {/*  </AccordionSummary>*/}
      {/*  <AccordionDetails>*/}
      {/*    <TextField id="outlined-basic" label="prefab_id" fullWidth={true} />*/}
      {/*    <TextField id="outlined-basic" label="name" fullWidth={true} />*/}
      {/*    <TextField id="outlined-basic" label="description" fullWidth={true} />*/}
      {/*    <TextField id="outlined-basic" label="gltf_path" fullWidth={true} />*/}
      {/*  </AccordionDetails>*/}
      {/*</Accordion>*/}
    </Card>
  );
}

export default PrefabEditorGUI;