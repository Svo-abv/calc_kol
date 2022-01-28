import { PinDropSharp } from '@mui/icons-material';
import React, { useState } from 'react';
import ExInput from '../ExInput';

interface ISpecificEnergyPerKg {
    fre: number;
    currentWeight: number;
};

const SpecificEnergyPerKg = (props: ISpecificEnergyPerKg) => {

    return (
        <ExInput variant="outlined" type="number" label="Удельная энергия на массу тела" value={Math.round((props.fre / props.currentWeight) * 10) / 10} />
    );
}

export default SpecificEnergyPerKg;