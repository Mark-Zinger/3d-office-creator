import React, {FC, ReactNode} from "react";
import {Canvas as R3fCanvas} from "@react-three/fiber";



const Canvas:FC<{ children: ReactNode }> = ({children}) => {

    return (
        <R3fCanvas>
            {children}
        </R3fCanvas>
    )
}

export default Canvas;