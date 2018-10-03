import React from "react";

const Chip = (props) => {
    return (

        <a href={props.link}  target="_blank" rel="noopener noreferrer">
            <div class="chip ">
                <img src={props.image} alt="Contact Person" />
                {props.name}
            </div>
        </a>
    )
}

export default Chip;