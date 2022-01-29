import { Paper, Typography } from '@mui/material';
import React from 'react';
import ConsumptionRatesHTML from '../components/ConsumptionRatesHTML';

const FoodConsumption = () => {
    document.title = "Нормы потребления";
    return (
        <div>
            <ConsumptionRatesHTML />
        </div>

    )
}

export default FoodConsumption;