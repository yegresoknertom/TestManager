import React from 'react';

import Header from './components/header/Header';
import UserTable from './components/user-table/UserTable';
import './App.css';

const App = () => (
    <div className="App">
        <Header />
        <UserTable />
    </div>
);

export default App