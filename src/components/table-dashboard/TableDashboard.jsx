import React, { useState } from "react";
import './tableDashboard.css';
import Checkbox from '../checkbox/Checkbox';

const TableDashboard = (props) => {
    const toggleFilter = props.toggleFilter;

    return (
        <div className="tableDashboard">
            <button className="dasboard__deleteButton">
            Delete selected
            </button>
            <div className="dasboard__userFilter_wrapper">
                <div className="dashboard__userFilter-free">
                    <Checkbox label="Free" toggleFilter={toggleFilter} />
                </div>
                <div className="dashboard__userFilter-locked">
                    <Checkbox label="Locked" toggleFilter={toggleFilter} />
                </div>
            </div>
        </div>
    )
}

export default TableDashboard