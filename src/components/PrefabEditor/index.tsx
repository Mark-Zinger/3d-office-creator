import Canvas from "../Canvas";
import {OrbitControls, Stats} from "@react-three/drei";
import {useParams} from "react-router-dom";
import PrefabEditorGUI from "../../components-ui/PrefabEditorGUI";
import {useForm, FormProvider} from "react-hook-form";
import Entity from "../Entity";
import GridHelper from "../GridHelper";
import defaultPrefabValues from "./defaultPrefabValues";
import {ChangeEvent, createRef, useEffect, useRef, useState} from "react";
import {GamePrefab} from "../../types/Entity";
import LoadModelUtil from "../../utils/LoadModelUtil";
//@ts-ignore
import { SimpleDropzone } from 'simple-dropzone';


const PrefabEditor = () => {

    const { id } = useParams();

    const [primitive, setPrimitive] = useState(null);

    const [prefab, setPrefab] = useState<GamePrefab>(defaultPrefabValues);
    const form = useForm({defaultValues: defaultPrefabValues});
    const { watch } = form;

    const inputRef = createRef<HTMLInputElement>();
    const dropZoneRef = createRef<HTMLDivElement>();

    useEffect( () => {
      if(inputRef.current && dropZoneRef.current) {
        const dropCtrl = new SimpleDropzone(dropZoneRef.current, inputRef.current);
        dropCtrl.on('drop', ({files}:any) => {
          LoadModelUtil(files).then( (model:any) => {
            setPrimitive(model.scene);
          });
        });
      }
    },[])


    return (
        <div style={{display: "flex", height: "100%"}}>
          <FormProvider {...form}>
            { primitive ?
              <Canvas>
                <Stats/>
                <ambientLight/>
                <pointLight position={[10, 10, 10]}/>
                <OrbitControls/>
                <GridHelper/>
                {primitive && <primitive object={primitive}/>}
                {/*<Entity prefab={{*/}
                {/*  name: "Офисный стол",*/}
                {/*  description: "Стол для организации рабочего места сотрудников.",*/}
                {/*  gltf_path: "office_desk.glb",*/}
                {/*  children_container: {*/}
                {/*    is_horizontal: true,*/}
                {/*    args: [1.55,0.65],*/}
                {/*    position: [0,0.725,-0.04],*/}
                {/*  }*/}
                {/*}} position={[0,0]} rotation={0} parent_id="__root__" id={"123"} />*/}
              </Canvas>
              :
              <div ref={dropZoneRef} style={{ height: "100vh", width: "100%"}}>Drop Files</div>

            }


            <PrefabEditorGUI/>

            <input type="file" multiple ref={inputRef}/>
            {/*<input type="file" multiple onChange={(e) => getTextureFile(e)} />*/}
          </FormProvider>
        </div>
    )
}

export default PrefabEditor;