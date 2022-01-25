import { Button, FormControl, InputLabel, MenuItem, Select, Stack } from "@mui/material";
import React, { FC, useState, useEffect } from "react";
import { KoversKofItem } from "../types/types";
import ExKofList from "./ExKofList";
import konversKofData from '../data/data.json';

interface IPopsExKoExKonvCofSelector {
    //  konversСofs: KoversKofItem[];
    // selKonversСofs: KoversKofItem[];
    currentFreCoefficient: number;
    setCurrentFreCoefficient: React.Dispatch<React.SetStateAction<number>>;
}

const ExKoExKonvCofSelector = (props: IPopsExKoExKonvCofSelector) => {

    const [idxSelectedKofs, setIdxSelectedKofs] = useState(1);
    const [selKonversСofs, setSelKonversСofs] = useState<KoversKofItem[]>([]);
    const konversСofs: KoversKofItem[] = konversKofData.data;

    const addInMass = () => {

        if (selKonversСofs.indexOf(konversСofs[idxSelectedKofs - 1]) < 0) {
            let tmp = selKonversСofs.concat(konversСofs[idxSelectedKofs - 1]);
            //Перемножим коэффиценты для дальнейшего применения
            var s = 1;
            for (var i = 0; i < tmp.length; i++) {

                s = (tmp[i].value * s);
            }
            setSelKonversСofs(tmp);
            props.setCurrentFreCoefficient(s);
        }
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
            <hr />
            <ExKofList list={selKonversСofs} />

        </div>

    );
}

export default ExKoExKonvCofSelector;