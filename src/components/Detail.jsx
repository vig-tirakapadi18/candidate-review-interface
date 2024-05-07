import { Fragment } from "react";

const Detail = ({ detailHeader, detailDescription, detailClassName }) => {
    return (
        <div className={`details-item ${detailClassName}`}>
            <h4>{detailHeader}</h4>
            <p>{detailDescription}</p>
        </div>
    );
};

export default Detail;
