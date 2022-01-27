import { Grid, TextField } from "@mui/material";
import React, { FunctionComponent } from "react";


interface mInputProps {
    value?: string;
}
//React.FC<mInputProps>
const ExInput = (props: any) => {
    //console.log('ExInput');
    return (
        <TextField  {...props} />
    );
};

export default ExInput;