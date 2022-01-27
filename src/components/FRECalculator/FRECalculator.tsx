import ExInput from "../ExInput";
import React, { useState } from 'react';
import { Stack } from "@mui/material";
import NoneProteinCallories from "./NoneProteinCallories";
import SpecificEnergyPerKg from "./SpecificEnergyPerKg";
import FREGroup from "./FREGroup";
import ProteinsGroup from "./ProteinsGroup";
import FatsGroup from "./FatsGroup";
import CarbohydratesGroup from "./CarbohydratesGroup";

interface IFRECalculator {
    freCoefficient: number;
    currentWeight: number;
    stateWeight: boolean;
}
const FRECalculator = (props: IFRECalculator) => {

    const [fre, setFre] = useState(0);

    const [proteins, setProteins] = useState(1);
    const [fats, setFats] = useState(1);
    const [carbohydrates, setCarbohydrates] = useState(1);

    console.log("root");

    return (
        <div>
            <Stack spacing={2}>
                <h3>При расчете используется следующий коэффициент: {props.freCoefficient}</h3>
                <FREGroup fre={fre} setFre={setFre} currentfreCoefficient={props.freCoefficient} />
                <ProteinsGroup fre={fre} proteins={proteins} setProteins={setProteins} currentWeight={props.currentWeight} />
                <FatsGroup fre={fre} fats={fats} setFats={setFats} currentWeight={props.currentWeight} />
                <CarbohydratesGroup fre={fre} carbohydrates={carbohydrates} setCarbohydrates={setCarbohydrates} currentWeight={props.currentWeight} />
                {/* {
                    carbohydratesPercent + fatsPercent + proteinsPercent !== 1
                        ? <h3>Внимание, сумма коэффициентов должна быть = 1, пожалуйста проверьте значения</h3>
                        : <h3></h3>
                } */}
                <SpecificEnergyPerKg fre={fre} currentWeight={props.currentWeight} />
                <NoneProteinCallories fats={fats} proteins={proteins} carbohydrates={carbohydrates} />

            </Stack>
        </div>

    )
}

export default FRECalculator;