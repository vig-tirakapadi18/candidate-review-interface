import { Fragment } from "react";
import CandidateDetails from "../CandidateDetails";
import SoftSkills from "../SoftSkills";
import Details from "../Details";

const MainProfile = ({ userData }) => {
    return (
        <Fragment>
            <div className="main-profile">
                <CandidateDetails userData={userData} />
                <SoftSkills />
                <Details />
            </div>
        </Fragment>
    );
};

export default MainProfile;
