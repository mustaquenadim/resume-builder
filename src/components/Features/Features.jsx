import React from 'react';

const Features = () => {
    return (
        <div>
            <h2>Take your application to the next level</h2>
            <div className="row">
                <div className="col">
                    <p>Want even more tools for your job application? Register for a low-cost Premium account so you can produce multiple resumes online, have access to more design features, or create a longer curriculum vitae (CV). You can even test the Premium features first for free.</p>
                </div>
                <div className="col">
                    <p>Want an amazing cover letter to pair with your resume? Use one of our cover letter templates to create the total package for impressing employers. Your resume and cover letter will have the same design and fonts, making them the ideal match.</p>
                </div>
            </div>
            <div className="text-center">
                <button className="btn btn-primary">View Premium Options</button>
                <button className="btn btn-primary">Create My Cover Letter</button>
            </div>
        </div>
    );
};

export default Features;