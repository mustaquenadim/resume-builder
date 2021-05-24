import React from 'react';

const Banner = () => {
    return (
        <div className="text-center">
            <h1 className="fw-bolder">The Online Resume Builder You Deserve</h1>
            <p>Creating a Professional Resume and Cover Letter <br />Has Never Been <span className="fw-bold">So Easy</span></p>
            <button className="btn-green-tr my-5">Build My Resume</button><br />
            <img className="rounded shadow-sm" src="https://d.novoresume.com/images/hmx/resume-builder.png" alt="" width="600" />
            <h4>Featured In: </h4>
        </div>
    );
};

export default Banner;