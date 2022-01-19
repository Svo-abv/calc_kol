import React, { ChangeEvent, useMemo, useState } from 'react';
import { isTemplateExpression } from 'typescript';
import './App.css';
import ExInput from './components/ExInput';
import ExKofList from './components/ExKofList';
import konversKofData from './data/data.json';
import { kofOO, kofItemOO, kofOOHB, KoversKofItem } from './types/types';



function App() {

  const [sex, setSex] = useState(0);
  const [weight, setWeight] = useState<number>(15);
  const [height, setHeight] = useState<number>(1.2);
  const [age, setAge] = useState<number>(3);
  const [IMT, setIMT] = useState(0);


  const calcIMT = useMemo(() => {
    let tmpIMT: number = 0;
    if (weight > 0 && height > 0 && age > 0)
      tmpIMT = weight / Math.pow(height, 2);

    setIMT(Math.round(tmpIMT * 100) / 100);
  }, [height, weight]);


  const [OP, setOP] = useState<number>(17.5);
  const [KZST, setKZST] = useState<number>(8);
  const [OMP, setOMP] = useState<number>(0);

  const calcOMP = useMemo(() => {

    let tmpOP: number = 0;
    if (OP > 0 && KZST > 0)
      tmpOP = OP - (KZST * 0.314);

    setOMP(Math.round(tmpOP * 1000) / 1000);
  }, [OP, KZST]);

  const [OOVOZ, setOOVOZ] = useState<number>(0);
  const [OOWH, setOOWH] = useState<number>(0);
  const [OOHB, setOOHB] = useState<number>(0);

  const kofWH: kofOO[] = [ // ОО по формулам Schofield (WH)
    { sex: [{ k1: 0.167, k2: 1517.4, k3: -617.6 }, { k1: 19.6, k2: 130.3, k3: 414.9 }, { k1: 16.25, k2: 137.2, k3: 515.5 }] },  // Мужские 
    { sex: [{ k1: 16.25, k2: 1023.2, k3: -413.5 }, { k1: 16.97, k2: 161.8, k3: 371.2 }, { k1: 8.365, k2: 465, k3: 200 }] }   // Женские
  ];

  const kofVOZ: kofOO[] = [ // ОО по формулам ВОЗ
    { sex: [{ k1: 60.9, k2: -54, k3: 0 }, { k1: 22.7, k2: 495, k3: 0 }, { k1: 17.5, k2: 651, k3: 0 }] },  // Мужские 
    { sex: [{ k1: 61, k2: -51, k3: 0 }, { k1: 22.5, k2: 499, k3: 0 }, { k1: 12.2, k2: 746, k3: 0 }] }   // Женские
  ];
  const kofHB: kofOOHB[] = [ // ОО по формуле Харриса-Бенедикта
    { sex: { k1: 664.7, k2: 13.75, k3: 5, k4: 6.77 } },  // Мужские
    { sex: { k1: 655.1, k2: 9.56, k3: 1.85, k4: 4.67 } }   // Женские =655,1+9,56*J30+1,85*K30-4,67*L30
  ];

  const calcOO = useMemo(() => {

    let idxAge = 0;

    if (age >= 0 && age < 3)
      idxAge = 0;
    else if (age >= 3 && age < 10)
      idxAge = 1;
    else
      idxAge = 2;


    console.log(`used ${kofVOZ[sex].sex[idxAge].k1} ${kofVOZ[sex].sex[idxAge].k2} ${kofVOZ[sex].sex[idxAge].k3}`);

    let tmpWH = (kofWH[sex].sex[idxAge].k1 * weight) + (kofWH[sex].sex[idxAge].k2 * height) + kofWH[sex].sex[idxAge].k3;
    let tmpVOZ = (kofVOZ[sex].sex[idxAge].k1 * weight) + kofVOZ[sex].sex[idxAge].k2;
    let tmpHB = kofHB[sex].sex.k1 + (kofHB[sex].sex.k2 * weight) + (kofHB[sex].sex.k3 * height) - (kofHB[sex].sex.k4 * age);
    setOOWH(Math.round(tmpWH * 10) / 10);
    setOOVOZ(Math.round(tmpVOZ * 10) / 10);
    setOOHB(Math.round(tmpHB * 10) / 10);


  }, [weight, height, age, sex]);


  const konversKofs: KoversKofItem[] = konversKofData.data;

  const [selKonversKofs, setSelKonversKofs] = useState<KoversKofItem[]>([]);

  const [idxSelectedKofs, setIdxSelectedKofs] = useState(0);


  const addInMass = () => {
    console.log('click');

    setSelKonversKofs((prev) => {
      prev.push(konversKofs[idxSelectedKofs])
      console.log(prev);

      return prev
    });
  }

  // const selected

  return (
    <div>
      <select onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setSex(Number(e.target.value))}>
        <option value="0">Мужской</option>
        <option value="1">Женский</option>
      </select>
      <ExInput type="number" placeholder="Введите возраст...." value={age} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAge(Number(e.target.value))} />
      <ExInput type="number" placeholder="Введите рост...." value={height} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setHeight(Number(e.target.value))} />
      <ExInput type="number" placeholder="Введите вес...." value={weight} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setWeight(Number(e.target.value))} />
      {IMT > 0
        ? <h1>ИМТ: {IMT}</h1>
        : <h1>Данные не введены или не расчитаны</h1>
      }

      <ExInput type="number" placeholder="Введите ОП...." value={OP} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setOP(Number(e.target.value))} />
      <ExInput type="number" placeholder="Введите КЖСИ...." value={KZST} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setKZST(Number(e.target.value))} />

      {OMP > 0
        ? <h1>ОМП: {OMP}</h1>
        : <h1>Данные не введены или не расчитаны</h1>
      }
      {OOWH > 0
        ? <h1>ОО Schofield (WH): {OOWH}</h1>
        : <h1></h1>
      }
      {OOVOZ > 0
        ? <h1>ОО ВОЗ: {OOVOZ}</h1>
        : <h1></h1>
      }
      {OOHB > 0
        ? <h1>ОО ОО Харриса-Бенедикта: {OOHB}</h1>
        : <h1></h1>
      }
      <select value={idxSelectedKofs} onChange={(e: ChangeEvent<HTMLSelectElement>) => { setIdxSelectedKofs(Number(e.target.value)) }}>
        {
          konversKofs.map((item) =>
            <option key={item.id} value={item.id}>{item.name}, {item.value}</option>
          )
        }
      </select>
      <button onClick={addInMass}>Добавить условие</button>
      <hr />
      <ExKofList list={selKonversKofs} />
    </div>

  );
}

export default App;
