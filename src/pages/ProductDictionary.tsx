import data from '../data/products.json';
import { DataGrid, GridColDef, GridToolbar, GridValueGetterParams } from '@mui/x-data-grid';
import React from 'react';
//ККр	Ккал	белок, г	жиры, г	углеводы,г	Продукты	Ккал	белок	жиры	углеводы

const columns: GridColDef[] = [
    {
        field: 'type', headerName: 'Тип', width: 55, filterable: true,
        type: 'singleSelect',
        valueOptions: ['смеси', 'САС', 'ПЭП']
    },
    { field: 'kkr', headerName: 'ККр', type: 'number', width: 60, editable: true },
    {
        field: 'kcal', headerName: 'Ккал', type: 'number', width: 65,
        valueGetter: (params: GridValueGetterParams) => (Number(params.getValue(params.id, 'kkr')) * Number(params.getValue(params.id, 'kcal_'))),
    },
    {
        field: 'protein_g', headerName: 'белок, г', type: 'number', width: 85,
        valueGetter: (params: GridValueGetterParams) => (Number(params.getValue(params.id, 'kkr')) * Number(params.getValue(params.id, 'proteins'))),
    },
    {
        field: 'fats_g', headerName: 'жиры, г', type: 'number', width: 85,
        valueGetter: (params: GridValueGetterParams) => (Number(params.getValue(params.id, 'kkr')) * Number(params.getValue(params.id, 'fats'))),
    },
    {
        field: 'carbohydrates_g', headerName: 'углеводы,г', type: 'number', width: 105,
        valueGetter: (params: GridValueGetterParams) => (Number(params.getValue(params.id, 'kkr')) * Number(params.getValue(params.id, 'carbohydrates'))),
    },
    { field: 'products', headerName: 'Продукты', width: 130 },
    { field: 'kcal_', headerName: 'Ккал', type: 'number', width: 65 },
    { field: 'proteins', headerName: 'белок', type: 'number', width: 80 },
    { field: 'fats', headerName: 'жиры', type: 'number', width: 80 },
    { field: 'carbohydrates', headerName: 'углеводы', type: 'number', width: 100 }
];
//	120	4	4	16

const rows = data.rows;

const ProductDictionary = () => {
    document.title = "Справочник питания";
    return (
        <div>
            <div style={{ height: 700, width: '100%' }}>
                <DataGrid

                    rows={rows}
                    columns={columns}
                    pageSize={15}
                    rowsPerPageOptions={[5]}
                    rowHeight={35}
                    hideFooterSelectedRowCount
                    disableColumnMenu
                    components={{
                        Toolbar: GridToolbar,
                    }}
                />
            </div>

        </div>

    )
}

export default ProductDictionary;