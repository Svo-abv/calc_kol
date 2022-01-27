import ExInput from "./ExInput";
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Stack } from "@mui/material";

interface IFRECalculator {
    freCoefficient: number;
    currentWeight: number;
}
const FRECalculator = (props: IFRECalculator) => {

    const [mainMetabolism, setMainMetabolism] = useState(865);

    const calcFre = (_mainMetabolism: number, _freCoefficient: number) => { return Math.round(_mainMetabolism * _freCoefficient) };

    const [fre, setFre] = useState(calcFre(mainMetabolism, props.freCoefficient));

    const [proteinsPercent, setProteinsPercent] = useState(0.15);
    const [fatsPercent, setFatsPercent] = useState(0.35);
    const [carbohydatesPercent, setCarbohydratesPercent] = useState(0.5);

    const calcProteins = (_fre: number, _proteinsPercent: number) => { return Math.round((_fre * _proteinsPercent) / 4); };
    const calcFats = (_fre: number, _fatsPercent: number) => { return Math.round((_fre * _fatsPercent) / 9) };
    const calcCarbohydrates = (_fre: number, _carbohydatesPercent: number) => { return Math.round((_fre * _carbohydatesPercent) / 4) };

    const [proteins, setProteins] = useState(calcProteins(fre, proteinsPercent));
    const [fats, setFats] = useState(calcFats(fre, fatsPercent));
    const [carbohydates, setCarbohydrates] = useState(calcCarbohydrates(fre, carbohydatesPercent));

    const calcProteinsPerKg = (_proteins: number, _currentWeight: number) => { return Math.round((_proteins / _currentWeight) * 10) / 10 };
    const calcFatsPerKg = (_fats: number, _currentWeight: number) => { return Math.round((_fats / _currentWeight) * 10) / 10 };
    const calcCarbohydratesPerKg = (_carbohydates: number, _currentWeight: number) => { return Math.round((_carbohydates / _currentWeight) * 10) / 10 };

    const [proteinsPerKg, setProteinsPerKg] = useState(calcProteinsPerKg(fre, props.currentWeight));
    const [fatsPerKg, setFatsPerKg] = useState(calcFatsPerKg(fre, props.currentWeight));
    const [carbohydatesPerKg, setCarbohydratesPerKg] = useState(calcCarbohydratesPerKg(fre, props.currentWeight));

    const calcSpecificEnergyPerKg = (_fre: number) => { return Math.round((_fre / props.currentWeight) * 10) / 10 };
    const calcNoneProteinCallories = (_fats: number, _carbohydates: number, _proteins: number) => { return Math.round((_fats * 9 + _carbohydates * 4) / _proteins) };

    const [specificEnergyPerKg, setSpecificEnergyPerKg] = useState(calcSpecificEnergyPerKg(fre));
    const [noneProteinCallories, setNoneProteinCallories] = useState(calcNoneProteinCallories(fats, carbohydates, proteins));

    // //Пересчитаем ФРЕ при обновлении основного значения каллорий или конверсионного коэффициента
    // useEffect(() => {
    //setFre(Math.round(mainMetabolism * props.freCoefficient));
    // }, [props.freCoefficient, mainMetabolism]);

    // //Пересчитаем углеводы при изменении процентного соотношения
    // useEffect(() => {
    //     setCarbohydrates(Math.round((fre * carbohydatesPercent) / 4));
    //     setCarbohydratesPerKg(Math.round(((fre * carbohydatesPercent) / 4) / props.currentWeight * 10) / 10);
    // }, [carbohydatesPercent, fre, props.currentWeight]);

    // //Пересчитаем белки при изменении процентного соотношения
    // useEffect(() => {
    //     setProteins(Math.round((fre * proteinsPercent) / 4));
    //     setProteinsPerKg(Math.round(((fre * proteinsPercent) / 4) / props.currentWeight * 10) / 10);
    // }, [proteinsPercent, fre, props.currentWeight]);

    // //Пересчитаем жиры при изменении процентного соотношения
    // useEffect(() => {
    //     setFats(Math.round((fre * fatsPercent) / 9));
    //     setFatsPerKg(Math.round(((fre * fatsPercent) / 9) / props.currentWeight * 10) / 10);
    // }, [fatsPercent, fre, props.currentWeight]);

    // //Пересчитаем значение не белковых каллорий
    // useEffect(() => {
    //     if (proteins !== 0)
    //         setNoneProteinCallories(Math.round((fats * 9 + carbohydates * 4) / proteins));
    // }, [fats, carbohydates, proteins]);

    // //Удельная энергия на массу тела
    // useEffect(() => {
    //     setSpecificEnergyPerKg(Math.round((fre / props.currentWeight) * 10) / 10);

    // }, [fre, props.currentWeight]);

    console.log(1);

    const handleSetMainMetabolism = (e: React.ChangeEvent<HTMLInputElement>) => {
        calcMainMetabolism(Number(e.target.value));
    }
    const calcMainMetabolism = (newMainMetabolism: number) => {

        setMainMetabolism(newMainMetabolism);

        let newFre = calcFre(newMainMetabolism, props.freCoefficient);
        setFre(newFre);

        setSpecificEnergyPerKg(calcSpecificEnergyPerKg(newFre));

        let newProteins = calcProteins(newFre, proteinsPercent);
        setProteins(newProteins);

        let newFats = calcFats(newFre, fatsPercent);
        setFats(newFats);

        let newCarbohydrates = calcCarbohydrates(newFre, carbohydatesPercent);
        setCarbohydrates(newCarbohydrates);

        setProteinsPerKg(calcProteinsPerKg(newProteins, props.currentWeight));
        setFatsPerKg(calcFatsPerKg(newFats, props.currentWeight));
        setCarbohydratesPerKg(calcCarbohydratesPerKg(newCarbohydrates, props.currentWeight));

        setNoneProteinCallories(calcNoneProteinCallories(newFats, newCarbohydrates, newProteins));

    };

    const handleSetProteinsPercent = (e: React.ChangeEvent<HTMLInputElement>) => {
        calcProteinsPercent(Number(e.target.value));
    }
    const calcProteinsPercent = (newProteinsPercent: number) => {

        setProteinsPercent(newProteinsPercent);

        let newProteins = calcProteins(fre, newProteinsPercent);
        setProteins(newProteins);
        setProteinsPerKg(calcProteinsPerKg(newProteins, props.currentWeight));
        setNoneProteinCallories(calcNoneProteinCallories(fats, carbohydates, newProteins));

    };

    const handleSetFatsPercent = (e: React.ChangeEvent<HTMLInputElement>) => {
        calcFatsPercent(Number(e.target.value));
    }
    const calcFatsPercent = (newFatsPercent: number) => {
        setFatsPercent(newFatsPercent);

        let newFats = calcFats(fre, newFatsPercent);
        setFats(newFats);
        setFatsPerKg(calcFatsPerKg(newFats, props.currentWeight));
        setNoneProteinCallories(calcNoneProteinCallories(newFats, carbohydates, proteins));
    };

    const handleSetCarbohydratesPercent = (e: React.ChangeEvent<HTMLInputElement>) => {
        calcCarbohydratesPercent(Number(e.target.value));
    }
    const calcCarbohydratesPercent = (newCarbohydratesPercent: number) => {
        setCarbohydratesPercent(newCarbohydratesPercent);

        let newCarbohydrates = calcCarbohydrates(fre, newCarbohydratesPercent);
        setCarbohydrates(newCarbohydrates);
        setCarbohydratesPerKg(calcCarbohydratesPerKg(newCarbohydrates, props.currentWeight));
        setNoneProteinCallories(calcNoneProteinCallories(fats, newCarbohydrates, proteins));
    };

    const mounted = useRef(false);

    useEffect(() => {
        if (!mounted.current) {
            mounted.current = true;
        } else {
            calcMainMetabolism(mainMetabolism);
            console.log(2);
        }
    }, [props.freCoefficient]);

    return (
        <div>
            <Stack spacing={2}>
                <h3>При расчете используется следующий коэффициент: {props.freCoefficient}</h3>
                <Stack direction="row" spacing={2}>
                    <ExInput fullWidth variant="outlined" type="number" label="Основной обмен" value={mainMetabolism} onChange={handleSetMainMetabolism} />
                    <ExInput fullWidth variant="outlined" type="number" label="ФРЕ" value={fre} />
                </Stack>
                <Stack direction="row" spacing={2}>
                    <ExInput fullWidth variant="outlined" type="number" label="Белки, г" value={proteins} />
                    <ExInput variant="outlined" type="number" label="Белки, %" value={proteinsPercent} onChange={handleSetProteinsPercent} />
                    <ExInput variant="outlined" type="number" label="Белки, г/кг" value={proteinsPerKg} />
                </Stack>
                <Stack direction="row" spacing={2}>
                    <ExInput fullWidth variant="outlined" type="number" label="Жиры, г" value={fats} />
                    <ExInput variant="outlined" type="number" label="Жиры, %" value={fatsPercent} onChange={handleSetFatsPercent} />
                    <ExInput variant="outlined" type="number" label="Жиры , г/кг" value={fatsPerKg} />
                </Stack>
                <Stack direction="row" spacing={2}>
                    <ExInput fullWidth variant="outlined" type="number" label="Углеводы, г" value={carbohydates} />
                    <ExInput variant="outlined" type="number" label="Углеводы, %" value={carbohydatesPercent} onChange={handleSetCarbohydratesPercent} />
                    <ExInput variant="outlined" type="number" label="Углеводы, г/кг" value={carbohydatesPerKg} />
                </Stack>
                {
                    carbohydatesPercent + fatsPercent + proteinsPercent !== 1
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