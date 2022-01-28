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

    const handleSexChanghe = (e: SelectChangeEvent) => params.sex.setSex(Number(e.target.value));
    const handleAgeChanghe = (e: React.ChangeEvent<HTMLInputElement>) => params.age.setAge(Number(e.target.value));
    const handleHeightChanghe = (e: React.ChangeEvent<HTMLInputElement>) => params.height.setHeight(Number(e.target.value));
    const handleWeightChanghe = (e: React.ChangeEvent<HTMLInputElement>) => params.weight.setWeight(Number(e.target.value));
    return (<div>
        <Stack direction="row" spacing={2}>
            <FormControl fullWidth>
                <InputLabel id="sex_lebel_id">Пол</InputLabel>
                <Select defaultValue="0" labelId="sex_lebel_id" label="Пол" onChange={handleSexChanghe}>
                    <MenuItem value={0} >Мужской</MenuItem>
                    <MenuItem value={1}>Женский</MenuItem>
                </Select>
            </FormControl>
            <ExInput variant="outlined" type="number" label="Возраст" value={params.age.age} onChange={handleAgeChanghe} />
            <ExInput variant="outlined" type="number" label="Рост" value={params.height.height} onChange={handleHeightChanghe} />
            <ExInput variant="outlined" type="number" label="Вес" value={params.weight.weight} onChange={handleWeightChanghe} />
        </Stack>
    </div>)
}

export default BiologicalParamGroup;