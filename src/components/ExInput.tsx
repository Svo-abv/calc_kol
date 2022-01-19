import React, { FunctionComponent } from "react";

interface mInputProps
{
    value?:string;
}
 //React.FC<mInputProps>
const ExInput = (props:any) =>{
    return (
            <input {...props}></input>
        );
};

export default ExInput;