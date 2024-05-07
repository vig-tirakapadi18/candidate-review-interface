import { Fragment } from "react";
import Detail from "./Detail";

const Details = () => {
    return (
        <Fragment>
            <div className="details">
                <Detail
                    detailClassName="about"
                    detailHeader="About"
                    detailDescription="Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Distinctio, reprehenderit?"
                />
                <Detail
                    detailClassName="experience"
                    detailHeader="Experience"
                    detailDescription="Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Distinctio, reprehenderit?"
                />
                <Detail
                    detailClassName="hobbies"
                    detailHeader="Hobbies"
                    detailDescription="Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Distinctio, reprehenderit?"
                />
                <Detail
                    detailClassName="introduction"
                    detailHeader="Introduction"
                    detailDescription="Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Distinctio, reprehenderit?"
                />
                <button className="shortlist">SHORTLIST</button>
            </div>
        </Fragment>
    );
};

export default Details;
