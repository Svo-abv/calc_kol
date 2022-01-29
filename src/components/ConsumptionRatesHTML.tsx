import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { borderRight } from '@mui/system';
import React from 'react';
import classes from './ConsumptionRatesHTML.module.css';


const ConsumptionRatesHTML = () => {

    return (
        <div>
            <TableContainer component={Paper}>
                <Table className={classes.ConsumptionRatesTable} size="small" stickyHeader >
                    <TableHead className='tableHead'>
                        <TableRow>
                            <TableCell align='center' size='small' sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }} rowSpan={3}>Показатели</TableCell>
                            <TableCell align='center' size='small' sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }} colSpan={11}>Возрастные группы</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align='center' size='small' sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }} rowSpan={2}>0—3 мес.</TableCell>
                            <TableCell align='center' size='small' sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }} rowSpan={2}>4—6 мес.</TableCell>
                            <TableCell align='center' size='small' sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }} rowSpan={2}>7—12 мес.</TableCell>
                            <TableCell align='center' size='small' sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }} rowSpan={2}>от 1 года до 2 лет</TableCell>
                            <TableCell align='center' size='small' sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }} rowSpan={2}>от 2 до 3 лет</TableCell>
                            <TableCell align='center' size='small' sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }} rowSpan={2}>от 3 до 7 лет</TableCell>
                            <TableCell align='center' size='small' sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }} rowSpan={2}>от 7 до 11 лет</TableCell>
                            <TableCell align='center' size='small' sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }} colSpan={2}>от 11 до 14 лет</TableCell>
                            <TableCell align='center' size='small' sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }} colSpan={2}>от 14 до 18 лет</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align='center' sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }}>мальчики</TableCell>
                            <TableCell align='center' sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }}>девочки</TableCell>
                            <TableCell align='center' sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }}>юноши</TableCell>
                            <TableCell align='center' sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }}>девушки</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align='center' sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }}></TableCell>
                            <TableCell align='center' size='small' sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }} colSpan={11}>Энергия и пищевые вещества</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow className={classes.energyRow}>
                            <TableCell align='center' sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }}>Энергия, ккал</TableCell>
                            <TableCell align='center' sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }}>115*</TableCell>
                            <TableCell align='center' sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }}>115*</TableCell>
                            <TableCell align='center' sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }}>110*</TableCell>
                            <TableCell align='center' sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }}>1200</TableCell>
                            <TableCell align='center' sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }}>1400</TableCell>
                            <TableCell align='center' sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }}>1800</TableCell>
                            <TableCell align='center' sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }}>2100</TableCell>
                            <TableCell align='center' sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }}>2500</TableCell>
                            <TableCell align='center' sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }}>2300</TableCell>
                            <TableCell align='center' sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }}>2900</TableCell>
                            <TableCell align='center' sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }}>2500</TableCell>
                        </TableRow>
                        <TableRow className={classes.proteinsRow}>
                            <TableCell align='center' sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }}>Белок , г</TableCell>
                            <TableCell align='center' sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }}>—</TableCell>
                            <TableCell align='center' sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }}>—</TableCell>
                            <TableCell align='center' sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }}>—</TableCell>
                            <TableCell align='center' sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }}>36</TableCell>
                            <TableCell align='center' sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }}>42</TableCell>
                            <TableCell align='center' sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }}>54</TableCell>
                            <TableCell align='center' sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }}>63</TableCell>
                            <TableCell align='center' sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }}>75</TableCell>
                            <TableCell align='center' sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }}>69</TableCell>
                            <TableCell align='center' sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }}>87</TableCell>
                            <TableCell align='center' sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }}>75</TableCell>
                        </TableRow>
                        <TableRow hover>
                            <TableCell align='center' sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }}>*в т. ч. животный (%)</TableCell>
                            <TableCell align='center' sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }}>—</TableCell>
                            <TableCell align='center' sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }}>—</TableCell>
                            <TableCell align='center' sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }}>—</TableCell>
                            <TableCell align='center' size='small' sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }} colSpan={2}>70</TableCell>
                            <TableCell align='center' sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }}>65</TableCell>
                            <TableCell align='center' size='small' sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }} colSpan={5}>60</TableCell>
                        </TableRow>
                        <TableRow hover>
                            <TableCell align='center' sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }}>** г/кг массы тела</TableCell>
                            <TableCell align='center' sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }}>2,2</TableCell>
                            <TableCell align='center' sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }}>2,6</TableCell>
                            <TableCell align='center' sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }}>2,9</TableCell>
                            <TableCell align='center' sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }}>—</TableCell>
                            <TableCell align='center' sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }}>—</TableCell>
                            <TableCell align='center' sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }}>—</TableCell>
                            <TableCell align='center' sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }}>—</TableCell>
                            <TableCell align='center' sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }}>—</TableCell>
                            <TableCell align='center' sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }}>—</TableCell>
                            <TableCell align='center' sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }}>—</TableCell>
                            <TableCell align='center' sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }}>—</TableCell>
                        </TableRow>
                        <TableRow hover>
                            <TableCell align='center' sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }}>% по ккал</TableCell>
                            <TableCell align='center' sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }}>—</TableCell>
                            <TableCell align='center' sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }}>—</TableCell>
                            <TableCell align='center' sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }}>—</TableCell>
                            <TableCell align='center' size='small' sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }} colSpan={8}>12</TableCell>
                        </TableRow>
                        <TableRow className={classes.fatsRow}>
                            <TableCell align='center' sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }}>Жиры, г</TableCell>
                            <TableCell align='center' sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }}>6,5*</TableCell>
                            <TableCell align='center' sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }}>6*</TableCell>
                            <TableCell align='center' sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }}>5,5*</TableCell>
                            <TableCell align='center' sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }}>40</TableCell>
                            <TableCell align='center' sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }}>47</TableCell>
                            <TableCell align='center' sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }}>60</TableCell>
                            <TableCell align='center' sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }}>70</TableCell>
                            <TableCell align='center' sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }}>83</TableCell>
                            <TableCell align='center' sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }}>77</TableCell>
                            <TableCell align='center' sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }}>97</TableCell>
                            <TableCell align='center' sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }}>83</TableCell>
                        </TableRow>
                        <TableRow hover>
                            <TableCell align='center' sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }}>Жир, % по ккал</TableCell>
                            <TableCell align='center' sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }}>—</TableCell>
                            <TableCell align='center' sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }}>—</TableCell>
                            <TableCell align='center' sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }}>—</TableCell>
                            <TableCell align='center' size='small' sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }} colSpan={8}>30</TableCell>
                        </TableRow>
                        <TableRow hover>
                            <TableCell align='center' sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }}>ПНЖК, % по ккал</TableCell>
                            <TableCell align='center' sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }}>—</TableCell>
                            <TableCell align='center' sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }}>—</TableCell>
                            <TableCell align='center' sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }}>—</TableCell>
                            <TableCell align='center' size='small' sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }} colSpan={6}>5—10</TableCell>
                            <TableCell align='center' size='small' sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }} colSpan={2}>6—10</TableCell>
                        </TableRow>
                        <TableRow hover>
                            <TableCell align='center' sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }}>Омега-6, % по ккал</TableCell>
                            <TableCell align='center' sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }}>—</TableCell>
                            <TableCell align='center' sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }}>—</TableCell>
                            <TableCell align='center' sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }}>—</TableCell>
                            <TableCell align='center' size='small' sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }} colSpan={6}>4—9</TableCell>
                            <TableCell align='center' size='small' sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }} colSpan={2}>5—8</TableCell>
                        </TableRow>
                        <TableRow hover>
                            <TableCell align='center' sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }}>Омега-3, % по ккал</TableCell>
                            <TableCell align='center' sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }}>—</TableCell>
                            <TableCell align='center' sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }}>—</TableCell>
                            <TableCell align='center' sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }}>—</TableCell>
                            <TableCell align='center' size='small' sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }} colSpan={6}>0,8—1</TableCell>
                            <TableCell align='center' size='small' sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }} colSpan={2}>1—2</TableCell>
                        </TableRow>
                        <TableRow hover>
                            <TableCell align='center' sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }}>Холестерин, мг</TableCell>
                            <TableCell align='center' sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }}></TableCell>
                            <TableCell align='center' sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }}></TableCell>
                            <TableCell align='center' sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }}></TableCell>
                            <TableCell align='center' size='small' sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }} colSpan={8}>&lt; 300</TableCell>
                        </TableRow>
                        <TableRow className="carbohydratesRow">
                            <TableCell align='center' sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }}>Углеводы, г</TableCell>
                            <TableCell align='center' sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }}>13*</TableCell>
                            <TableCell align='center' sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }}>13*</TableCell>
                            <TableCell align='center' sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }}>13*</TableCell>
                            <TableCell align='center' sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }}>174</TableCell>
                            <TableCell align='center' sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }}>203</TableCell>
                            <TableCell align='center' sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }}>261</TableCell>
                            <TableCell align='center' sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }}>305</TableCell>
                            <TableCell align='center' sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }}>363</TableCell>
                            <TableCell align='center' sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }}>334</TableCell>
                            <TableCell align='center' sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }}>421</TableCell>
                            <TableCell align='center' sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }}>363</TableCell>
                        </TableRow>
                        <TableRow hover>
                            <TableCell align='center' sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }}>Углеводы, % по ккал</TableCell>
                            <TableCell align='center' sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }}>—</TableCell>
                            <TableCell align='center' sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }}>—</TableCell>
                            <TableCell align='center' sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }}>—</TableCell>
                            <TableCell align='center' size='small' sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }} colSpan={8}>58</TableCell>
                        </TableRow>
                        <TableRow hover>
                            <TableCell align='center' sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }}>в т. ч. сахар, % по ккал</TableCell>
                            <TableCell align='center' sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }}></TableCell>
                            <TableCell align='center' sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }}></TableCell>
                            <TableCell align='center' sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }}></TableCell>
                            <TableCell align='center' size='small' sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }} colSpan={8}>&lt; 10</TableCell>
                        </TableRow>
                        <TableRow hover>
                            <TableCell align='center' sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }}>Пищевые волокна, г</TableCell>
                            <TableCell align='center' sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }}>—</TableCell>
                            <TableCell align='center' sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }}>—</TableCell>
                            <TableCell align='center' sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }}>—</TableCell>
                            <TableCell align='center' size='small' sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }} colSpan={2}>8</TableCell>
                            <TableCell align='center' size='small' sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }} >10</TableCell>
                            <TableCell align='center' sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }}>15</TableCell>
                            <TableCell align='center' size='small' sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }} colSpan={4}>20</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align='center' sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }}></TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </div>

    )
}

export default ConsumptionRatesHTML;