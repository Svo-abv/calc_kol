import ExInput from "./ExInput";
import React, { useMemo, useState } from 'react';
import { Stack } from "@mui/material";

interface IFRECalculator {
    freCoefficient: number;
    currentWeight: number;
}
const FRECalculator = (props: IFRECalculator) => {

    const [mainMetabolism, setMainMetabolism] = useState(750);
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

    function recalcFre(value: number) {
        let tmp = Math.round(value * props.freCoefficient);
        setFre(tmp);

        calcProteins(tmp);
        calcFats(tmp);
        calcCarbohydates(tmp);
        calcspecificEnergyPerKg(tmp);

        calcNoneProteinCallories();
    };

    const t = useMemo(() => recalcFre(mainMetabolism), [props.freCoefficient]);

    function calcProteins(f: number) {
        setProteins(Math.round((f * proteinsPersent) / 4));
        setProteinsPerKg(Math.round(((f * proteinsPersent) / 4) / props.currentWeight * 10) / 10);
    };
    function calcFats(f: number) {
        setFats(Math.round((f * fatsPersent) / 9));
        setFatsPerKg(Math.round(((f * fatsPersent) / 9) / props.currentWeight * 10) / 10);
    };
    function calcCarbohydates(f: number) {
        setCarbohydrates(Math.round((f * carbohydatesPersent) / 4));
        setCarbohydratesPerKg(Math.round(((f * carbohydatesPersent) / 4) / props.currentWeight * 10) / 10);
    };
    function calcspecificEnergyPerKg(f: number) {
        setSpecificEnergyPerKg(Math.round((f / props.currentWeight) * 10) / 10);
    };



    function calcNoneProteinCallories() {
        setNoneProteinCallories(Math.round((fats * 9 + carbohydates * 4) / proteins));
    }

    const cNp = useMemo(() => {
        calcNoneProteinCallories();
    }, [fats, carbohydates, proteins]);


    return (
        <div>
            <Stack spacing={2}>
                <h3>При расчете используется следующий коэффициент: {Math.round((props.freCoefficient) * 100) / 100}</h3>
                <Stack direction="row" spacing={2}>
                    <ExInput fullWidth variant="outlined" type="number" label="Основной обмен" value={mainMetabolism} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setMainMetabolism(Number(e.target.value));
                        recalcFre(Number(e.target.value));
                    }
                    } />
                    <ExInput fullWidth variant="outlined" type="number" label="ФРЕ" value={fre} />
                </Stack>
                <Stack direction="row" spacing={2}>
                    <ExInput fullWidth variant="outlined" type="number" label="Белки, г" value={proteins} />
                    <ExInput variant="outlined" type="number" label="Белки, %" value={proteinsPersent} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setProteinsPersent(Number(e.target.value));
                        calcProteins(fre);

                    }} />
                    <ExInput variant="outlined" type="number" label="Белки, г/кг" value={proteinsPerKg} />
                </Stack>
                <Stack direction="row" spacing={2}>
                    <ExInput fullWidth variant="outlined" type="number" label="Жиры, г" value={fats} />
                    <ExInput variant="outlined" type="number" label="Жиры, %" value={fatsPersent} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setFatsPersent(Number(e.target.value));
                        calcFats(fre);
                    }} />
                    <ExInput variant="outlined" type="number" label="Жиры , г/кг" value={fatsPerKg} />
                </Stack>
                <Stack direction="row" spacing={2}>
                    <ExInput fullWidth variant="outlined" type="number" label="Углеводы, г" value={carbohydates} />
                    <ExInput variant="outlined" type="number" label="Углеводы, %" value={carbohydatesPersent} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setCarbohydratesPersent(Number(e.target.value));
                        calcCarbohydates(fre);
                    }
                    } />
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