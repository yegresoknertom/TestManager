import StateColumnFilter from './basic-table/StateColumnFilter'

export const COLUMNS = [
    {
        Header: 'Login',
        accessor: 'login',
        disableFilters: true
    },
    {
        Header: 'Password',
        accessor: 'password',
        disableFilters: true
    },
    {
        Header: 'Status',
        accessor: 'status',
        Filter: StateColumnFilter
    }
]