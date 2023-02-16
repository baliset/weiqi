import React, {useRef, useState} from 'react';
// import "ag-grid-enterprise";
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-dark.css';
import {CheckboxRenderer} from '../agstuff/CheckboxRenderer';
import {LinnParamRenderer} from "../agstuff/LinnParamRenderer";

const style = {height: '700px', width: '100%'};


const frameworkComponents = {
    checkboxRenderer:CheckboxRenderer,
    linnParamRenderer: LinnParamRenderer
};

export const  MyGrid = ({rowData, columnDefs, ref, getRowNodeId}) => {
    const gridRef = useRef(null);

    // setInterval(()=>gridRef?.current?.api?.gridOptionsWrapper?.ons,1000);

    const ready = (e)=>{
        console.log(`ready event`, e)
    }

    const gridOptions = {suppressPropertyNamesCheck : true};

    return (
        <div className="ag-theme-dark" style={style}>
            <AgGridReact
                onGridReady={ready}
                ref={gridRef}
                frameworkComponents={frameworkComponents}
                gridOptions={gridOptions}
                immutableData={true}
                toolPanel={'columns'}
                showToolPanel={true}
                reactNext={true}
                getRowNodeId={getRowNodeId}
                columnDefs={columnDefs} rowData={rowData}/>
        </div>
    );
}