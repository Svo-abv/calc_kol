import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React, { FC, useState } from "react";
import { KoversKofItem } from "../types/types";

interface IPopsExKoExKonvCofSelector {
    konversKofs: KoversKofItem[];
    idxSelectedKofs: number;
    setIdxSelectedKofs: React.Dispatch<React.SetStateAction<number>>;
}

const ExKoExKonvCofSelector = (props: IPopsExKoExKonvCofSelector) => {

    return (
        <div>
            <FormControl fullWidth>
                <InputLabel id="konv_cof_lebel_id">Конверсионные коэффициенты</InputLabel>
                <Select labelId="konv_cof_lebel_id" label="Конверсионные коэффициенты" value={props.idxSelectedKofs} onChange={(e) => { props.setIdxSelectedKofs(Number(e.target.value)); }}>
                    {
                        props.konversKofs.map((item) =>
                            <MenuItem key={item.id} value={item.id}>{item.name}, {item.value}</MenuItem>
                        )
                    }
                </Select > </FormControl >

        </div>

    );
}

export default ExKoExKonvCofSelector;