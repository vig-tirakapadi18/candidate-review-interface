import { Fragment } from "react";

const SoftSkills = () => {
    return (
        <Fragment>
            <div className="soft-skills">
                <div className="behavioural">
                    <span>Behavioural</span>
                    <div className="slider"></div>
                    <span className="rating">9/10</span>
                </div>
                <div className="communication">
                    <span>Communication</span>
                    <div className="slider"></div>
                    <span className="rating">8/10</span>
                </div>
                <div className="situation">
                    <span>Situation Handling</span>
                    <div className="slider"></div>
                    <span className="rating">6/10</span>
                </div>
            </div>
        </Fragment>
    );
};

export default SoftSkills;
