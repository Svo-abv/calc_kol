import { Stack } from '@mui/material';
import React, { useState } from 'react';
import ExInput from '../ExInput';

interface ICarbohydratesGroup {
    fre: number;
    currentWeight: number;
    carbohydrates: number;
    setCarbohydrates: React.Dispatch<React.SetStateAction<number>>;
};

const CarbohydratesGroup = (props: ICarbohydratesGroup) => {

    const calcCarbohydratesPerKg = (_carbohydrates: number, _currentWeight: number) => { return Math.round((_carbohydrates / _currentWeight) * 10) / 10 };
    const calcCarbohydrates = (_fre: number, _carbohydratesPercent: number) => { return Math.round((_fre * _carbohydratesPercent) / 4) };

    const handleSetCarbohydratesPercent = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newCarbohydratesPercent = (Number(e.target.value));
        setCarbohydratesPercent(newCarbohydratesPercent);

        const newCarbohydrates = calcCarbohydrates(props.fre, newCarbohydratesPercent);
        props.setCarbohydrates(newCarbohydrates);
        setCarbohydratesPerKg(calcCarbohydratesPerKg(newCarbohydrates, props.currentWeight));
    };


    const [carbohydratesPercent, setCarbohydratesPercent] = useState(0.5);
    const [carbohydratesPerKg, setCarbohydratesPerKg] = useState(calcCarbohydratesPerKg(props.fre, props.currentWeight));

    console.log("CarbohydratesGroup");

    //props.setCarbohydrates(calcCarbohydrates(props.fre, carbohydratesPercent));

    return (
        <Stack direction="row" spacing={2}>
            <ExInput fullWidth variant="outlined" type="number" label="Углеводы, г" value={props.carbohydrates} />
            <ExInput variant="outlined" type="number" label="Углеводы, %" value={carbohydratesPercent} onChange={handleSetCarbohydratesPercent} />
            <ExInput variant="outlined" type="number" label="Углеводы, г/кг" value={carbohydratesPerKg} />
        </Stack>
    );
}

export default CarbohydratesGroup;