import { Fragment } from "react";
import { FaHome } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";

const Dashboard = () => {
    return (
        <Fragment>
            <div className="dashboard">
                <h1 className="header">Hi, AltWorld</h1>
                <div className="dashboard-text">
                    <FaHome
                        color="#4FD1C5"
                        size={28}
                        className="home-icon"
                    />
                    <span>Dashboard</span>
                </div>
                <div className="new-assignment">
                    <FaPlus
                        size={32}
                        className="plus-icon"
                    />
                    <h3>New Assignment?</h3>
                    <p>
                        Select from pre-defined questions to have a quick
                        turnaround.
                    </p>
                    <button type="button">Create New Assignment</button>
                </div>
            </div>
        </Fragment>
    );
};

export default Dashboard;
