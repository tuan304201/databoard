import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import '../App.css';

const Data = () => {
    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        fetch('https://randomuser.me/api/?results=100')
            .then((response) => response.json())
            .then((data) => setCustomers(data.results));
    }, []);

    const fullName = (data) => {
        const getName = data.name;
        const fullname = `${getName.title} ${getName.first} ${getName.last}`;
        return fullname;
    };

    const avatar = (data) => {
        const getAvatar = data.picture;
        return <img src={getAvatar.thumbnail} alt={getAvatar.thumbnail} />;
    };

    const paginatorLeft = <Button type="button" icon="pi pi-refresh" className="p-button-text" />;
    const paginatorRight = <Button type="button" icon="pi pi-cloud" className="p-button-text" />;

    return (
        <div className="card">
            <DataTable
                value={customers}
                paginator
                responsiveLayout="scroll"
                paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
                currentPageReportTemplate="Showing {first} to {last} of {totalRecords}"
                rows={10}
                rowsPerPageOptions={[10, 20, 50]}
                paginatorLeft={paginatorLeft}
                paginatorRight={paginatorRight}
                sortMode="multiple"
            >
                <Column field={fullName} header="Fullname" sortable style={{ width: '33%' }}></Column>
                <Column field="login.username" header="Username" sortable style={{ width: '33%' }}></Column>
                <Column header="Image" body={avatar} style={{ width: '5%' }} />
            </DataTable>
        </div>
    );
};

export default Data;
