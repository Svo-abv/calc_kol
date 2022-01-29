import React, { useState } from 'react';
import { Stack } from "@mui/material";

import NoneProteinCallories from "./NoneProteinCallories";
import SpecificEnergyPerKg from "./SpecificEnergyPerKg";
import FREGroup from "./FREGroup";
import ProteinsGroup from "./ProteinsGroup";
import FatsGroup from "./FatsGroup";
import CarbohydratesGroup from "./CarbohydratesGroup";
import ExKoExKonvCofSelector from '../ExKonvCofSelector';

interface IFRECalculator {
    currentWeight: number;

}

const calcFre = (_mainMetabolism: number, _freCoefficient: number) => { return Math.round(_mainMetabolism * _freCoefficient) };
const calcFats = (_fre: number, _fatsPercent: number) => { return Math.round((_fre * _fatsPercent) / 9) };
const calcProteins = (_fre: number, _proteinsPercent: number) => { return Math.round((_fre * _proteinsPercent) / 4); };
const calcCarbohydrates = (_fre: number, _carbohydratesPercent: number) => { return Math.round((_fre * _carbohydratesPercent) / 4) };

const FRECalculator = (props: IFRECalculator) => {

    const [currentFreCoefficient, setCurrentFreCoefficient] = useState(1);

    const [mainMetabolism, setMainMetabolism] = useState(865);
    const [fre, setFre] = useState(calcFre(mainMetabolism, currentFreCoefficient));

    const [proteinsPercent, setProteinsPercent] = useState(0.15);
    const [fatsPercent, setFatsPercent] = useState(0.35);
    const [carbohydratesPercent, setCarbohydratesPercent] = useState(0.5);

    const [proteins, setProteins] = useState(calcProteins(fre, proteinsPercent));
    const [fats, setFats] = useState(calcFats(fre, fatsPercent));
    const [carbohydrates, setCarbohydrates] = useState(calcCarbohydrates(fre, fatsPercent));


    //console.log("root");

    const handleSetCurrentFreCoefficient = (newCurrentFreCoefficient: number) => {

        setCurrentFreCoefficient(newCurrentFreCoefficient);

        const newFre = calcFre(mainMetabolism, newCurrentFreCoefficient);
        setFre(newFre);

        const newFats = calcFats(newFre, fatsPercent);
        setFats(newFats);

        const newProteins = calcProteins(newFre, proteinsPercent);
        setProteins(newProteins);

        const newCarbohydrates = calcCarbohydrates(newFre, carbohydratesPercent);
        setCarbohydrates(newCarbohydrates);

    };

    const handleSetMainMetabolism = (e: React.ChangeEvent<HTMLInputElement>) => {

        const newMainMetabolism = Number(e.target.value);
        setMainMetabolism(newMainMetabolism);

        const newFre = calcFre(newMainMetabolism, currentFreCoefficient);
        setFre(newFre);

        const newFats = calcFats(newFre, fatsPercent);
        setFats(newFats);

        const newProteins = calcProteins(newFre, proteinsPercent);
        setProteins(newProteins);

        const newCarbohydrates = calcCarbohydrates(newFre, carbohydratesPercent);
        setCarbohydrates(newCarbohydrates);
    };

    const handleSetFatsPercent = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newFatsPercent = (Number(e.target.value));
        setFatsPercent(newFatsPercent);

        const newFats = calcFats(fre, newFatsPercent);
        setFats(newFats);
    }

    const handleSetProteinsPercent = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newProteinsPercent = Number(e.target.value);
        setProteinsPercent(newProteinsPercent);

        const newProteins = calcProteins(fre, newProteinsPercent);
        setProteins(newProteins);

    }

    const handleSetCarbohydratesPercent = (e: React.ChangeEvent<HTMLInputElement>) => {

        const newCarbohydratesPercent = (Number(e.target.value));
        setCarbohydratesPercent(newCarbohydratesPercent);

        const newCarbohydrates = calcCarbohydrates(fre, newCarbohydratesPercent);
        setCarbohydrates(newCarbohydrates);

    };

    return (
        <div>
            <ExKoExKonvCofSelector handleSetCurrentFreCoefficient={handleSetCurrentFreCoefficient} />
            <Stack spacing={2}>
                <h3>При расчете используется следующий коэффициент: {currentFreCoefficient}</h3>
                <FREGroup fre={fre} mainMetabolism={mainMetabolism} setMainMetabolism={handleSetMainMetabolism} />
                <ProteinsGroup proteins={proteins} proteinsPercent={proteinsPercent} handleSetProteinsPercent={handleSetProteinsPercent} currentWeight={props.currentWeight} />
                <FatsGroup fats={fats} fatsPercent={fatsPercent} handleSetFatsPercent={handleSetFatsPercent} currentWeight={props.currentWeight} />
                <CarbohydratesGroup carbohydrates={carbohydrates} carbohydratesPercent={carbohydratesPercent} handleSetCarbohydratesPercent={handleSetCarbohydratesPercent} currentWeight={props.currentWeight} />
                {
                    carbohydratesPercent + fatsPercent + proteinsPercent !== 1
                        ? <h4>Внимание, сумма коэффициентов должна быть = 1, пожалуйста проверьте значения</h4>
                        : <h4></h4>
                }
                <SpecificEnergyPerKg fre={fre} currentWeight={props.currentWeight} />
                <NoneProteinCallories fats={fats} proteins={proteins} carbohydrates={carbohydrates} />
            </Stack>
        </div>

    )
}

export default FRECalculator;