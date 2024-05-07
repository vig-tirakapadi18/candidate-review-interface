import { Fragment } from "react";

const CandidateDetails = ({ userData }) => {
    return (
        <Fragment>
            <div
                key={userData[0].id}
                className="candidate-details">
                <div className="profile-image"></div>
                <div className="name-email">
                    <p className="name">{userData[0].name}</p>
                    <p className="email">{userData[0].email}</p>
                </div>
                <div
                    className={`score ${
                        userData[0].id < 50 ? "color-success" : "color-warning"
                    }`}>
                    {userData[0].score}%
                </div>
            </div>
        </Fragment>
    );
};

export default CandidateDetails;
