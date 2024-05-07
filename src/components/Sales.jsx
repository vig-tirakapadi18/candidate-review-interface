import { Fragment } from "react";
import { RiPencilFill } from "react-icons/ri";
import { GiCube } from "react-icons/gi";
import { IoDocuments } from "react-icons/io5";

const Sales = ({ userData }) => {
    return (
        <Fragment>
            <div className="sales">
                <div className="sales-top">
                    <h4>
                        <span className="sales-top-pages">Pages</span> /{" "}
                        <span>Assignment</span>
                    </h4>
                    <h2>Sales BDE</h2>
                </div>

                <div className="sales-main">
                    <div className="sales-header">
                        <h2>Sales BDE</h2>
                        <h2 className="color-success">
                            Active{" "}
                            <RiPencilFill
                                color="#000"
                                className="pencil-icon"
                            />
                        </h2>
                    </div>
                    <div className="assignment-link">
                        <h4>Assignment Link</h4>
                        <a href="https://tiny.url/asknakdna/">
                            https://tiny.url/asknakdna/
                        </a>
                    </div>
                    <div className="assignment-hour">
                        <h4>Assignment Hour</h4>
                        <h4>3 hours</h4>
                    </div>
                    <div className="assignment-end">
                        <h4>Assignment Ends at</h4>
                        <h4>11 March 2024</h4>
                    </div>
                    <div className="review-shortlisted">
                        <div className="review">
                            <GiCube size={14} /> <span>TO REVIEW</span>
                        </div>
                        <div className="shortlisted">
                            <IoDocuments size={14} /> <span>SHORTLISTED</span>
                        </div>
                    </div>
                    <div className="candidate-score">
                        <div className="candidtate-score-title">
                            <h3>CANDIDATE</h3>
                            <h3>SCORE</h3>
                        </div>

                        {userData.map((item) => (
                            <div
                                key={item.id}
                                className="candidate-details">
                                <div className="profile-image"></div>
                                <div className="name-email">
                                    <p className="name">{item.name}</p>
                                    <p className="email">{item.email}</p>
                                </div>
                                <div
                                    className={`score ${
                                        item.score > 50
                                            ? "color-success"
                                            : "color-warning"
                                    }`}>
                                    {item.score}%
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Sales;
