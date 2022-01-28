import { Stack } from '@mui/material';
import React, { useRef, useState } from 'react';
import ExInput from '../ExInput';

interface IProteinsGroup {
    currentWeight: number;
    proteins: number;
    proteinsPercent: number;
    handleSetProteinsPercent: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const ProteinsGroup = (props: IProteinsGroup) => {
    console.log("ProteinsGroup");

    // props.setProteins(calcProteins(props.fre, proteinsPercent));

    return (
        <Stack direction="row" spacing={2}>
            <ExInput fullWidth variant="outlined" type="number" label="Белки, г" value={props.proteins} />
            <ExInput variant="outlined" type="number" label="Белки, %" value={props.proteinsPercent} onChange={props.handleSetProteinsPercent} />
            <ExInput variant="outlined" type="number" label="Белки, г/кг" value={Math.round((props.proteins / props.currentWeight) * 10) / 10} />
        </Stack>
    );
}

export default ProteinsGroup;