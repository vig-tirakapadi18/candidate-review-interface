import { Fragment } from "react";
import { FaPlay } from "react-icons/fa";
import { FaAnglesLeft } from "react-icons/fa6";
import { FaAnglesRight } from "react-icons/fa6";

const ProfileVideo = () => {
    return (
        <Fragment>
            <div className="video-overlay"></div>
            <div className="profile-video">
                <div className="play-icon">
                    <FaPlay />
                </div>
                <div className="questions">
                    <div>
                        <FaAnglesLeft className="arrow" />
                    </div>
                    <div className="question">
                        <div>Tell me about yourself</div>
                        <div>Question 1 / 11</div>
                    </div>
                    <div>
                        <FaAnglesRight className="arrow" />
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default ProfileVideo;
