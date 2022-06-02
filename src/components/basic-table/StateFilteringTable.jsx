import React, { useMemo } from 'react'
import { useTable, useFilters } from 'react-table'
import MOCK_DATA from '../MOCK_DATA.json'
import { COLUMNS } from '../COLUMNS'
import '../table.css'
import StateColumnFilter from './StateColumnFilter'

const StateFilteringTable = () => {

    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => MOCK_DATA, [])

    const { 
        getTableProps,
        getTableBodyProps, 
        headerGroups, 
        rows, 
        prepareRow,
        state,
        setGlobalFilter
    } = useTable({
        columns,
        data
    },
    useFilters)

    const { globalFilter } = state

    return (
        <>
        <table {...getTableProps()}>
            <thead>
                {headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map((column) => (
                        <th {...column.getHeaderProps()}>{column.render('Header')}
                        <div>{column.canFilter ? column.render('Filter') : null}</div>
                        </th>
                    ))}
                </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {rows.map(row => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map((cell) => {
                                        return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                    })}
                            </tr>
                        )
                    })}
            </tbody>
        </table>
        </>
    )
}

export default StateFilteringTable