import { Stack } from '@mui/material';
import React, { useState } from 'react';
import ExInput from '../ExInput';

interface ICarbohydratesGroup {
    currentWeight: number;
    carbohydrates: number;
    carbohydratesPercent: number;
    handleSetCarbohydratesPercent: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const CarbohydratesGroup = (props: ICarbohydratesGroup) => {

    //  console.log("CarbohydratesGroup");

    //props.setCarbohydrates(calcCarbohydrates(props.fre, carbohydratesPercent));

    return (
        <Stack direction="row" spacing={2}>
            <ExInput fullWidth variant="outlined" type="number" label="Углеводы, г" value={props.carbohydrates} />
            <ExInput variant="outlined" type="number" label="Углеводы, %" value={props.carbohydratesPercent} inputProps={{ step: 0.01 }} onChange={props.handleSetCarbohydratesPercent} />
            <ExInput variant="outlined" type="number" label="Углеводы, г/кг" value={Math.round((props.carbohydrates / props.currentWeight) * 10) / 10} />
        </Stack>
    );
}

export default CarbohydratesGroup;