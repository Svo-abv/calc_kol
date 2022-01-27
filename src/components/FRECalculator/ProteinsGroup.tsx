import { Stack } from '@mui/material';
import React, { useRef, useState } from 'react';
import ExInput from '../ExInput';

interface IProteinsGroup {
    fre: number;
    currentWeight: number;
    proteins: number;
    setProteins: React.Dispatch<React.SetStateAction<number>>;
};

const ProteinsGroup = (props: IProteinsGroup) => {

    const calcProteinsPerKg = (_proteins: number, _currentWeight: number) => { return Math.round((_proteins / _currentWeight) * 10) / 10 };
    const calcProteins = (_fre: number, _proteinsPercent: number) => { return Math.round((_fre * _proteinsPercent) / 4); };

    const handleSetProteinsPercent = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newProteinsPercent = Number(e.target.value);
        setProteinsPercent(newProteinsPercent);
        const newProteins = calcProteins(props.fre, newProteinsPercent);
        props.setProteins(newProteins);
        setProteinsPerKg(calcProteinsPerKg(newProteins, props.currentWeight));
    }

    const [proteinsPercent, setProteinsPercent] = useState(0.15);
    const [proteinsPerKg, setProteinsPerKg] = useState(calcProteinsPerKg(props.proteins, props.currentWeight));

    console.log("ProteinsGroup");

    // props.setProteins(calcProteins(props.fre, proteinsPercent));

    return (
        <Stack direction="row" spacing={2}>
            <ExInput fullWidth variant="outlined" type="number" label="Белки, г" value={props.proteins} />
            <ExInput variant="outlined" type="number" label="Белки, %" value={proteinsPercent} onChange={handleSetProteinsPercent} />
            <ExInput variant="outlined" type="number" label="Белки, г/кг" value={proteinsPerKg} />
        </Stack>
    );
}

export default ProteinsGroup;