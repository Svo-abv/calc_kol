import ExInput from "./ExInput";
import React, { useMemo, useState } from 'react';
import { Stack } from "@mui/material";

interface IFRECalculator {
    freCoefficient: number;
}
const FRECalculator = (props: IFRECalculator) => {

    const [mainMetabolism, setMainMetabolism] = useState(750);
    const [fre, setFre] = useState(0);
    const [proteins, setProteins] = useState(0);
    const [fats, setFats] = useState(0);
    const [carbohydates, setCarbohydrates] = useState(0);

    function recalcFre(value: number) {
        setFre(Math.round(value * props.freCoefficient));
    };

    const t = useMemo(() => recalcFre(mainMetabolism), [props.freCoefficient]);



    return (
        <div>
            <Stack spacing={2}>
                <h3>При расчете используется следующий коэффициент: {props.freCoefficient}</h3>
                <ExInput variant="outlined" type="number" label="Основной обмен" value={mainMetabolism} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setMainMetabolism(Number(e.target.value));
                    recalcFre(Number(e.target.value));
                }
                } />
                <ExInput variant="outlined" type="number" label="ФРЕ" value={fre} />
                <ExInput variant="outlined" type="number" label="Белки" value={proteins} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setProteins(Number(e.target.value))} />
                <ExInput variant="outlined" type="number" label="Жиры" value={fats} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFats(Number(e.target.value))} />
                <ExInput variant="outlined" type="number" label="Углеводы" value={carbohydates} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCarbohydrates(Number(e.target.value))} />
            </Stack>
        </div>

    )
}

export default FRECalculator;