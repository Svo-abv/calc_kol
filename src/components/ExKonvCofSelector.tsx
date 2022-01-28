import { Button, FormControl, InputLabel, MenuItem, Select, Stack } from "@mui/material";
import React, { useState, useEffect } from "react";
import { KoversKofItem } from "../types/types";
import ExKofList from "./ExKofList";
import konversKofData from '../data/data.json';

interface IPopsExKoExKonvCofSelector {

    handleSetCurrentFreCoefficient: (t: number) => void;
}

const ExKoExKonvCofSelector = (props: IPopsExKoExKonvCofSelector) => {

    const [idxSelectedKofs, setIdxSelectedKofs] = useState(1);
    const [selKonversСofs, setSelKonversСofs] = useState<KoversKofItem[]>([]);
    const konversСofs: KoversKofItem[] = konversKofData.data;

    useEffect(() => {

        //Перемножим коэффиценты для дальнейшего применения
        var s = 1;
        for (var i = 0; i < selKonversСofs.length; i++) {
            s = (selKonversСofs[i].value * s);
        }
        props.handleSetCurrentFreCoefficient(Math.round((s) * 100) / 100);
    }, [selKonversСofs]);

    const addInMass = () => {
        if (selKonversСofs.indexOf(konversСofs[idxSelectedKofs - 1]) < 0) {
            setSelKonversСofs(selKonversСofs.concat(konversСofs[idxSelectedKofs - 1]));
        }
    };


    const removeInMass = (id: KoversKofItem) => {
        setSelKonversСofs(selKonversСofs.filter(k => k !== id));
    };

    return (
        <div>
            <Stack spacing={2} direction="row">
                <FormControl fullWidth>
                    <InputLabel id="konv_cof_lebel_id">Конверсионные коэффициенты</InputLabel>
                    <Select labelId="konv_cof_lebel_id" label="Конверсионные коэффициенты" value={idxSelectedKofs} onChange={(e) => { setIdxSelectedKofs(Number(e.target.value)); }}>
                        {
                            konversСofs.map((item) =>
                                <MenuItem key={item.id} value={item.id}>{item.name}, {item.value}</MenuItem>
                            )
                        }
                    </Select >
                </FormControl >
                <Button onClick={addInMass} variant="contained">Добавить</Button>
            </Stack>
            <ExKofList list={selKonversСofs} remove={removeInMass} />

        </div>

    );
}

export default ExKoExKonvCofSelector;