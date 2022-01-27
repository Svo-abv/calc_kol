import React, { useState } from 'react';
import ExInput from '../ExInput';

interface INoneProteinCallories {
    fats: number;
    carbohydrates: number;
    proteins: number;
};

const NoneProteinCallories = (props: INoneProteinCallories) => {

    //const calcNoneProteinCallories = (_fats: number, _carbohydrates: number, _proteins: number) => { return Math.round((_fats * 9 + _carbohydrates * 4) / _proteins) };
    //const [noneProteinCallories, setNoneProteinCallories] = useState(calcNoneProteinCallories(props.fats, props.carbohydrates, props.proteins));

    return (
        <ExInput variant="outlined" type="number" label="Небелковые калории/1г белка" value={
            Math.round((props.fats * 9 + props.carbohydrates * 4) / props.proteins)
        } />
    );
}

export default NoneProteinCallories;