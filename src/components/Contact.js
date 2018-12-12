import React from "react";
import media from "../media";
import Chip from "./Chip";

const Contact = (props) => {
    return (
        <div className="container contact">
            <div className="row">
                <div class="chip ">
                    <img src="/images/gmail.png" alt="Contact Person" />
                    jiraseandrew@gmail.com
                </div>
                {media.map(media => {
                    return <Chip name={media.name} image={`/images/${media.image}`} link={media.link} />
                })}
            </div>
        </div>
    )
}

export default Contact;