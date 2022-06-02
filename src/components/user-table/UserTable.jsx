import React, { useState } from "react";
import './userTable.css';
import TableDashboard from '../table-dashboard/TableDashboard';
import UserRow from './user-row/UserRow';
import StateFilteringTable from '../basic-table/StateFilteringTable';

const UserTable = () => {
    const [filters, setFilters] = useState( { 'Free': false, 'Locked': false} )
    const testUsers = [
        {login: 'user1', password: 'password1', isLocked: true},
        {login: 'user2', password: 'password2', isLocked: true},
        {login: 'user3', password: 'password3', isLocked: false}
    ]
    const [usersList, setUsersList] = useState( testUsers )
    const rows = [];

    const toggleFilter = (filter) => {
        filters[filter] = !filters[filter]
        console.log('The checkbox was toggled ' + filter + ': ' + filters[filter]);
        if ( filter == 'Free') {
            usersList.filter(user => !user.isLocked).forEach((user) => {
                rows.push(<UserRow user={user} />)
                console.log('rows content' + rows);
            });
        } else {
            usersList.filter(user => user.isLocked).forEach((user) => {
                rows.push(<UserRow user={user} />)
                console.log('rows content' + rows);
            });
        }
    }


    return (
        <div className="tm__UserTable">
            <TableDashboard toggleFilter={toggleFilter} />
            <StateFilteringTable />
        </div>
    )
}

export default UserTable