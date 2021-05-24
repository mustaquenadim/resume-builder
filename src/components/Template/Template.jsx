import React from 'react';

const Template = () => {
    return (
        <div className="text-center m-5">
            <p>Making a resume is the first step of any job search. Not sure <br />how to make a resume? Our online resume builder gives you free <br />resume templates to follow.</p>
            <hr className="w-25 m-auto" />
            <div className="d-flex justify-content-between align-items-center">
                <div className="w-100 h-100 p-4">
                    <a href="#">
                        <img className="w-100 h-100" src="https://d.novoresume.com/images/hmx/td-1.png" alt="" />
                    </a>
                </div>
                <div className="w-100 h-100 p-4">
                    <a href="#">
                        <img className="w-100 h-100" src="https://d.novoresume.com/images/doc/functional-resume-template.png" alt="" />
                    </a>
                </div>
                <div className="w-100 h-100 p-4">
                    <a href="#">
                        <img className="w-100 h-100" src="https://d.novoresume.com/images/doc/executive-resume-template.png" alt="" />
                    </a>
                </div>
                <div className="w-100 h-100 p-4">
                    <a href="#">
                        <img className="w-100 h-100" src="https://i.pinimg.com/originals/42/4b/ef/424bef6e0ddacab678afb3738f34bf68.png" alt="" />
                    </a>
                </div>
            </div>
            <button className="btn btn-primary">Get My Free Template</button>
        </div>
    );
};

export default Template;