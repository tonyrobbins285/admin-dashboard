import React, { useContext } from "react"
import { DataGrid, GridToolbar } from "@mui/x-data-grid"
import { mockDataContacts } from "../../data/mockData"
import { Box, Typography } from "@mui/material"
import Header from "../../components/Header"
import { ColorModeContext } from "../../theme"

function Contacts() {
    const { colors } = useContext(ColorModeContext)

    const columns = [
        { field: "id", headerName: "ID", flex: 0.5 },
        { field: "registrarId", headerName: "Registrar ID" },
        {
            field: "name",
            headerName: "Name",
            flex: 1,
            cellClassName: "name-column--cell",
        },
        {
            field: "age",
            headerName: "Age",
            headerAlign: "left",
            align: "left",
            type: "number",
            flex: 0.4,
        },
        {
            field: "phone",
            headerName: "Phone Number",
            flex: 1,
        },
        {
            field: "email",
            headerName: "Email",
            flex: 1,
            renderCell: ({ row: { email } }) => (
                <Typography>{email}</Typography>
            ),
        },
        { field: "address", headerName: "Address", flex: 1 },
        { field: "city", headerName: "City", flex: 1 },
        { field: "zipCode", headerName: "ZipCode", flex: 1 },
    ]

    return (
        <Box m="10px 20px">
            <Header
                title="CONTACTS"
                subtitle="List of Contacts Future Reference"
            />
            <Box
                height="75vh"
                m="40px 0 0 0"
                sx={{
                    "& .MuiDataGrid-footerContainer": {
                        border: "none",
                        backgroundColor: colors.blueAccent[700],
                    },
                    "& .MuiDataGrid-columnHeaders": {
                        backgroundColor: colors.blueAccent[700],
                        border: "none",
                    },
                    "& .MuiDataGrid-root": {
                        border: "none",
                    },
                    "& .MuiDataGrid-iconSeparator": {
                        display: "none",
                    },
                    "& .MuiDataGrid-virtualScroller": {
                        backgroundColor: colors.primary[400],
                    },
                    "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                        color: colors.grey[100],
                    },
                    "& .MuiDataGrid-cell": {
                        border: "none !important",
                    },
                    "& .name-column--cell": {
                        color: colors.greenAccent[300],
                    },
                    "& .MuiDataGrid-cellContent": {
                        fontSize: "16px",
                    },
                }}
            >
                <DataGrid
                    rows={mockDataContacts}
                    columns={columns}
                    components={{ Toolbar: GridToolbar }}
                />
            </Box>
        </Box>
    )
}

export default Contacts
