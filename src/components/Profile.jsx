import { Fragment } from "react";
import MainProfile from "./Profile/MainProfile";
import ProfileVideo from "./Profile/ProfileVideo";

const Profile = ({ userData }) => {
    return (
        <Fragment>
            <div className="profile">
                <MainProfile userData={userData} />
                <ProfileVideo />
            </div>
        </Fragment>
    );
};

export default Profile;
