import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Stack } from "@mui/material";
import React from "react";
import { Age, Height, Sex, Weight } from "../types/types";
import ExInput from "./ExInput";



interface IBiologicalParamGroup {
    sex: Sex;
    age: Age;
    weight: Weight;
    height: Height;
}

const BiologicalParamGroup = (params: IBiologicalParamGroup) => {
    return (<div>
        <Stack direction="row" spacing={2}>
            <FormControl fullWidth>
                <InputLabel id="sex_lebel_id">Пол</InputLabel>
                <Select labelId="sex_lebel_id" label="Пол" onChange={(e: SelectChangeEvent<HTMLSelectElement>) => params.sex.setSex(Number(e.target.value))}>
                    <MenuItem value="0">Мужской</MenuItem>
                    <MenuItem value="1">Женский</MenuItem>
                </Select>
            </FormControl>
            <ExInput variant="outlined" type="number" label="Возраст" value={params.age.age} onChange={(e: React.ChangeEvent<HTMLInputElement>) => params.age.setAge(Number(e.target.value))} />
            <ExInput variant="outlined" type="number" label="Рост" value={params.height.height} onChange={(e: React.ChangeEvent<HTMLInputElement>) => params.height.setHeight(Number(e.target.value))} />
            <ExInput variant="outlined" type="number" label="Вес" value={params.weight.weight} onChange={(e: React.ChangeEvent<HTMLInputElement>) => params.weight.setWeight(Number(e.target.value))} />
        </Stack>

    </div>)
}

export default BiologicalParamGroup;