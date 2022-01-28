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

    // const calcFatsPerKg = (_fats: number, _currentWeight: number) => { return Math.round((_fats / _currentWeight) * 10) / 10 };
    // const calcFats = (_fre: number, _fatsPercent: number) => { return Math.round((_fre * _fatsPercent) / 9) };

    // const handleSetFatsPercent = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     const newFatsPercent = (Number(e.target.value));
    //     setFatsPercent(newFatsPercent);

    //     const newFats = calcFats(props.fre, newFatsPercent);
    //     props.setFats(newFats);
    //     setFatsPerKg(calcFatsPerKg(newFats, props.currentWeight));
    // };


    // const [fatsPerKg, setFatsPerKg] = useState(calcFatsPerKg(props.fats, props.currentWeight));

    console.log("FatsGroup");

    //props.setFats(calcFats(props.fre, fatsPercent));

    return (
        <Stack direction="row" spacing={2}>
            <ExInput fullWidth variant="outlined" type="number" label="Жиры, г" value={props.fats} />
            <ExInput variant="outlined" type="number" label="Жиры, %" value={props.fatsPercent} onChange={props.handleSetFatsPercent} />
            <ExInput variant="outlined" type="number" label="Жиры , г/кг" value={Math.round((props.fats / props.currentWeight) * 10) / 10} />
        </Stack>
    );
}

export default FatsGroup;