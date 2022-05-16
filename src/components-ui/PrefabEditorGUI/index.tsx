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


function PrefabEditorGUI () {



  return (
    <Card className="prefabEditorGUI">
      <Button>Загрузить модель</Button>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon/>}
        >
          <Typography>Основное параметры</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <TextField id="prefab_id" label="ID Префаба" fullWidth={true} />
          <TextField id="name" label="Имя" fullWidth={true} />
          <TextField id="description" label="Описание" fullWidth={true} />
          <TextField id="gltf_path" label="Имя файла" fullWidth={true} />
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          // expandIcon={ <ExpandMoreIcon/>}
        >
          <Typography>Дочерние элементы  <Checkbox/></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormControlLabel control={<Checkbox defaultChecked />} label="Горизонтально" />
          <TextField id="outlined-basic" label="name" fullWidth={true} />
          <TextField id="outlined-basic" label="description" fullWidth={true} />
          <TextField id="outlined-basic" label="gltf_path" fullWidth={true} />
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={ <Checkbox />}
        >
          <Typography>Коллайдеры</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <TextField id="outlined-basic" label="prefab_id" fullWidth={true} />
          <TextField id="outlined-basic" label="name" fullWidth={true} />
          <TextField id="outlined-basic" label="description" fullWidth={true} />
          <TextField id="outlined-basic" label="gltf_path" fullWidth={true} />
        </AccordionDetails>
      </Accordion>
    </Card>
  );
}

export default PrefabEditorGUI;