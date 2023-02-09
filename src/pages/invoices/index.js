import React, { useContext } from "react"
import { DataGrid } from "@mui/x-data-grid"
import { mockDataInvoices } from "../../data/mockData"
import { Box, Typography } from "@mui/material"
import Header from "../../components/Header"
import { ColorModeContext } from "../../theme"

function Invoices() {
    const { colors } = useContext(ColorModeContext)

    const columns = [
        { field: "id", headerName: "ID" },
        {
            field: "name",
            headerName: "Name",
            flex: 1,
            cellClassName: "name-column--cell",
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
        {
            field: "cost",
            headerName: "Cost",
            flex: 1,
            renderCell: ({ row: { cost } }) => (
                <Typography fontSize="16px" color={colors.greenAccent[500]}>
                    ${cost}
                </Typography>
            ),
        },
        {
            field: "date",
            headerName: "Date",
            flex: 1,
        },
    ]

    return (
        <Box m="10px 20px">
            <Header title="INVOICES" subtitle="List of Invoice Balances" />
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
                    "& .MuiDataGrid-cell": {
                        border: "none !important",
                    },
                    "& .MuiCheckbox-root": {
                        color: colors.greenAccent[200],
                    },
                    "& .name-column--cell": {
                        color: colors.greenAccent[300],
                    },
                    "& .MuiDataGrid-cellContent": {
                        fontSize: "16px",
                    },
					"& svg.MuiSvgIcon-root.MuiSvgIcon-fontSizeMedium.css-havevq-MuiSvgIcon-root": {
						color: "#b7ebde"
					}
                }}
            >
                <DataGrid
                    rows={mockDataInvoices}
                    columns={columns}
                    checkboxSelection
                />
            </Box>
        </Box>
    )
}

export default Invoices
