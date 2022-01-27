import { PinDropSharp } from '@mui/icons-material';
import React, { useState } from 'react';
import ExInput from '../ExInput';

interface ISpecificEnergyPerKg {
    fre: number;
    currentWeight: number;
};

const SpecificEnergyPerKg = (props: ISpecificEnergyPerKg) => {

    // const calcSpecificEnergyPerKg = (_fre: number, _currentWeight: number) => { return Math.round((_fre / _currentWeight) * 10) / 10 };
    //  const [specificEnergyPerKg, setSpecificEnergyPerKg] = useState(calcSpecificEnergyPerKg(props.fre, props.currentWeight));

    return (
        <ExInput variant="outlined" type="number" label="Удельная энергия на массу тела" value={Math.round((props.fre / props.currentWeight) * 10) / 10} />
    );
}

export default SpecificEnergyPerKg;