import { Stack } from '@mui/material';
import React, { useState } from 'react';
import ExInput from '../ExInput';

interface IFatsGroup {
    fre: number;
    currentWeight: number;
    fats: number;
    setFats: React.Dispatch<React.SetStateAction<number>>;
};

const FatsGroup = (props: IFatsGroup) => {

    const calcFatsPerKg = (_fats: number, _currentWeight: number) => { return Math.round((_fats / _currentWeight) * 10) / 10 };
    const calcFats = (_fre: number, _fatsPercent: number) => { return Math.round((_fre * _fatsPercent) / 9) };

    const handleSetFatsPercent = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newFatsPercent = (Number(e.target.value));
        setFatsPercent(newFatsPercent);

        const newFats = calcFats(props.fre, newFatsPercent);
        props.setFats(newFats);
        setFatsPerKg(calcFatsPerKg(newFats, props.currentWeight));
    };

    const [fatsPercent, setFatsPercent] = useState(0.35);
    const [fatsPerKg, setFatsPerKg] = useState(calcFatsPerKg(props.fre, props.currentWeight));

    console.log("FatsGroup");

    //props.setFats(calcFats(props.fre, fatsPercent));

    return (
        <Stack direction="row" spacing={2}>
            <ExInput fullWidth variant="outlined" type="number" label="Жиры, г" value={props.fats} />
            <ExInput variant="outlined" type="number" label="Жиры, %" value={fatsPercent} onChange={handleSetFatsPercent} />
            <ExInput variant="outlined" type="number" label="Жиры , г/кг" value={fatsPerKg} />
        </Stack>
    );
}

export default FatsGroup;