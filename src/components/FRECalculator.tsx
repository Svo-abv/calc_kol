import ExInput from "./ExInput";
import React, { useEffect, useMemo, useState } from 'react';
import { Stack } from "@mui/material";

interface IFRECalculator {
    freCoefficient: number;
    currentWeight: number;
}
const FRECalculator = (props: IFRECalculator) => {

    const [mainMetabolism, setMainMetabolism] = useState(865);
    const [fre, setFre] = useState(0);

    const [proteins, setProteins] = useState(0);
    const [fats, setFats] = useState(0);
    const [carbohydates, setCarbohydrates] = useState(0);

    const [proteinsPersent, setProteinsPersent] = useState(0.15);
    const [fatsPersent, setFatsPersent] = useState(0.35);
    const [carbohydatesPersent, setCarbohydratesPersent] = useState(0.5);

    const [proteinsPerKg, setProteinsPerKg] = useState(0);
    const [fatsPerKg, setFatsPerKg] = useState(0);
    const [carbohydatesPerKg, setCarbohydratesPerKg] = useState(0);

    const [specificEnergyPerKg, setSpecificEnergyPerKg] = useState(0);
    const [noneProteinCallories, setNoneProteinCallories] = useState(0);

    function recalcFre(value: number) { setFre(Math.round(value * props.freCoefficient)); };

    function calcProteins() {
        setProteins(Math.round((fre * proteinsPersent) / 4));
        setProteinsPerKg(Math.round(((fre * proteinsPersent) / 4) / props.currentWeight * 10) / 10);
    };
    function calcFats() {
        setFats(Math.round((fre * fatsPersent) / 9));
        setFatsPerKg(Math.round(((fre * fatsPersent) / 9) / props.currentWeight * 10) / 10);
    };
    function calcCarbohydates() {
        setCarbohydrates(Math.round((fre * carbohydatesPersent) / 4));
        setCarbohydratesPerKg(Math.round(((fre * carbohydatesPersent) / 4) / props.currentWeight * 10) / 10);
    };
    function calcspecificEnergyPerKg() {
        setSpecificEnergyPerKg(Math.round((fre / props.currentWeight) * 10) / 10);
    };

    function calcNoneProteinCallories() {
        setNoneProteinCallories(Math.round((fats * 9 + carbohydates * 4) / proteins));
    }
    useMemo(() => {
        calcNoneProteinCallories();
    }, [fats, carbohydates, proteins]);

    //Пересчитаем ФРЕ при обновлении основного значения каллорий или конверсионного коэффициента
    useEffect(() => recalcFre(mainMetabolism), [props.freCoefficient, mainMetabolism]);

    //Пересчитаем углеводы при изменении процентного соотношения
    useEffect(() => calcCarbohydates(), [carbohydatesPersent]);

    //Пересчитаем белки при изменении процентного соотношения
    useEffect(() => calcProteins(), [proteinsPersent]);

    //Пересчитаем жиры при изменении процентного соотношения
    useEffect(() => calcFats(), [fatsPersent]);

    //Пересчитаем все при изменении ФРЕ
    useEffect(() => {
        calcProteins();
        calcFats();
        calcCarbohydates();
        calcspecificEnergyPerKg();
        //calcNoneProteinCallories();

    }, [fre]);

    return (
        <div>
            <Stack spacing={2}>
                <h3>При расчете используется следующий коэффициент: {Math.round((props.freCoefficient) * 100) / 100}</h3>
                <Stack direction="row" spacing={2}>
                    <ExInput fullWidth variant="outlined" type="number" label="Основной обмен" value={mainMetabolism} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setMainMetabolism(Number(e.target.value));
                    }} />
                    <ExInput fullWidth variant="outlined" type="number" label="ФРЕ" value={fre} />
                </Stack>
                <Stack direction="row" spacing={2}>
                    <ExInput fullWidth variant="outlined" type="number" label="Белки, г" value={proteins} />
                    <ExInput variant="outlined" type="number" label="Белки, %" value={proteinsPersent} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setProteinsPersent(Number(e.target.value));
                    }} />
                    <ExInput variant="outlined" type="number" label="Белки, г/кг" value={proteinsPerKg} />
                </Stack>
                <Stack direction="row" spacing={2}>
                    <ExInput fullWidth variant="outlined" type="number" label="Жиры, г" value={fats} />
                    <ExInput variant="outlined" type="number" label="Жиры, %" value={fatsPersent} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setFatsPersent(Number(e.target.value));
                    }} />
                    <ExInput variant="outlined" type="number" label="Жиры , г/кг" value={fatsPerKg} />
                </Stack>
                <Stack direction="row" spacing={2}>
                    <ExInput fullWidth variant="outlined" type="number" label="Углеводы, г" value={carbohydates} />
                    <ExInput variant="outlined" type="number" label="Углеводы, %" value={carbohydatesPersent} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setCarbohydratesPersent(Number(e.target.value));
                    }} />
                    <ExInput variant="outlined" type="number" label="Углеводы, г/кг" value={carbohydatesPerKg} />
                </Stack>
                {carbohydatesPersent + fatsPersent + proteinsPersent !== 1
                    ? <h3>Внимание, сумма коэффициентов должна быть = 1, пожалуйста проверьте значения</h3>
                    : <h3></h3>
                }
                <ExInput variant="outlined" type="number" label="Удельная энергия на массу тела" value={specificEnergyPerKg} />
                <ExInput variant="outlined" type="number" label="Небелковые калории/1г белка" value={noneProteinCallories} />
            </Stack>
        </div>

    )
}

export default FRECalculator;