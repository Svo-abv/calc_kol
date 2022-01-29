import { Stack } from '@mui/material';
import React, { useEffect, useMemo, useState } from 'react';
import ExInput from '../ExInput';

interface IFREGroup {
    fre: number;
    mainMetabolism: number;
    setMainMetabolism: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const FREGroup = (props: IFREGroup) => {



    //console.log("FREGroup");

    // const newFre = useMemo(() => {

    //     return Math.round(mainMetabolism * props.currentfreCoefficient);

    // }, [mainMetabolism, props.currentfreCoefficient]);

    return (
        <Stack direction="row" spacing={2}>
            <ExInput fullWidth variant="outlined" type="number" label="Основной обмен" value={props.mainMetabolism} onChange={props.setMainMetabolism} />
            <ExInput fullWidth variant="outlined" type="number" label="ФРЕ" value={props.fre} />
        </Stack>
    );
}

export default FREGroup;