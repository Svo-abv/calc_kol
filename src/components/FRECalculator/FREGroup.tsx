import { Stack } from '@mui/material';
import React, { useEffect, useMemo, useState } from 'react';
import ExInput from '../ExInput';

interface IFREGroup {
    fre: number;
    currentfreCoefficient: number;
    setFre: React.Dispatch<React.SetStateAction<number>>;
};

const FREGroup = (props: IFREGroup) => {

    const [mainMetabolism, setMainMetabolism] = useState(865);
    const handleSetMainMetabolism = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMainMetabolism(Number(e.target.value));
        props.setFre(Math.round(Number(e.target.value) * props.currentfreCoefficient));
    };

    console.log("FREGroup");

    const newFre = useMemo(() => {

        return Math.round(mainMetabolism * props.currentfreCoefficient);

    }, [mainMetabolism, props.currentfreCoefficient]);

    console.log(newFre);

    return (
        <Stack direction="row" spacing={2}>
            <ExInput fullWidth variant="outlined" type="number" label="Основной обмен" value={mainMetabolism} onChange={handleSetMainMetabolism} />
            <ExInput fullWidth variant="outlined" type="number" label="ФРЕ" value={newFre} />
        </Stack>
    );
}

export default FREGroup;