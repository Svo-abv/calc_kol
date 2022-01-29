import data from '../data/products.json';
import { DataGrid, GridCallbackDetails, GridColDef, GridColumnVisibilityModel, GridEditRowsModel, GridSortModel, GridState, GridToolbar, GridValueGetterParams, MuiEvent } from '@mui/x-data-grid';
import React, { useState } from 'react';
//ККр	Ккал	белок, г	жиры, г	углеводы,г	Продукты	Ккал	белок	жиры	углеводы


const calcKcal = (params: GridValueGetterParams, col: any): number => {
    return Number(params.row.kkr) * Number(params.row[col]);
}

const columns: GridColDef[] = [
    {
        field: 'type', headerName: 'Тип', width: 65, filterable: true,
        type: 'singleSelect',
        valueOptions: ['смеси', 'САС', 'ПЭП']

    },
    { field: 'kkr', headerName: 'ККр', type: 'number', width: 60, editable: true },
    {
        field: 'kcal', headerName: 'Ккал', type: 'number', width: 65,
        valueGetter: (params: GridValueGetterParams) => calcKcal(params, 'kcal_'),
    },
    {
        field: 'protein_g', headerName: 'белок, г', type: 'number', width: 85,
        valueGetter: (params: GridValueGetterParams) => calcKcal(params, 'proteins'),
    },
    {
        field: 'fats_g', headerName: 'жиры, г', type: 'number', width: 85,
        valueGetter: (params: GridValueGetterParams) => calcKcal(params, 'fats'),
    },
    {
        field: 'carbohydrates_g', headerName: 'углеводы,г', type: 'number', width: 105,
        valueGetter: (params: GridValueGetterParams) => calcKcal(params, 'carbohydrates'),
    },
    { field: 'products', headerName: 'Продукты', width: 130 },
    { field: 'kcal_', headerName: 'Ккал', type: 'number', width: 65 },
    { field: 'proteins', headerName: 'белок', type: 'number', width: 80 },
    { field: 'fats', headerName: 'жиры', type: 'number', width: 80 },
    { field: 'carbohydrates', headerName: 'углеводы', type: 'number', width: 100 }
];
interface IRows {
    id: number;
    type: string;
    kkr: number;
    products: string;
    kcal_: number;
    proteins: number;
    fats: number;
    carbohydrates: number;

}
const ProductDictionary = () => {
    document.title = "Справочник питания";
    const [pageSize, setPageSize] = React.useState(25);

    const handleOnSortModelChange = (editRowsModel: GridEditRowsModel, details: GridCallbackDetails) => {
        // console.log(editRowsModel);
        //console.log(GridCallbackDetails);
        //  console.log(details);
    }

    return (
        <div>
            <div style={{ height: 700, width: '100%' }}>
                <DataGrid
                    rows={data.rows}
                    columns={columns}
                    pageSize={pageSize}
                    onPageSizeChange={(newPage) => setPageSize(newPage)}
                    pagination
                    rowHeight={35}
                    hideFooterSelectedRowCount
                    disableColumnMenu
                    components={{
                        Toolbar: GridToolbar,
                    }}
                    onEditRowsModelChange={handleOnSortModelChange}
                />
            </div>

        </div>

    )
}

export default ProductDictionary;