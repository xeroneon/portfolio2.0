import React from "react";

const Tech = (props) => {
    return (

        <div className="container tech">
            <div class="divider"></div>
            <h2>Tech I've worked with</h2>
            <br/>
            <div className="row valign-wrapper">
                <img className="col s3 m2" src="/images/css3.png" alt="CSS3" />
                <img className="col s3 m2" src="/images/html5.png" alt="HTML5" />
                <img className="col s3 m2" src="/images/js.jpg" alt="Javascript" />
                <img className="col s3 m2" src="/images/nodejs.jpg" alt="NodeJS" />
            </div>
            <div className="row valign-wrapper">
                <img className="col s3 m2" src="/images/react.png" alt="React" />
                <img className="col s3 m2" src="/images/mongodb.png" alt="MongoDB" />
                <img className="col s3 m2" src="/images/mysql.png" alt="MySQL" />
                <img className="col s3 m2" src="/images/firebase.png" alt="FireBase" />
            </div>
        </div>
    )
}

export default Tech; 