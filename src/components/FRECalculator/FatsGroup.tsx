import { Stack } from '@mui/material';
import React, { useState } from 'react';
import ExInput from '../ExInput';

interface IFatsGroup {
    currentWeight: number;
    fats: number;
    fatsPercent: number;
    handleSetFatsPercent: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const FatsGroup = (props: IFatsGroup) => {

    // console.log("FatsGroup");

    return (
        <Stack direction="row" spacing={2}>
            <ExInput fullWidth variant="outlined" type="number" label="Жиры, г" value={props.fats} />
            <ExInput variant="outlined" type="number" label="Жиры, %" value={props.fatsPercent} onChange={props.handleSetFatsPercent} />
            <ExInput variant="outlined" type="number" label="Жиры , г/кг" value={Math.round((props.fats / props.currentWeight) * 10) / 10} />
        </Stack>
    );
}

export default FatsGroup;