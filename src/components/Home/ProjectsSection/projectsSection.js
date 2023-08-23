import React, {Component} from 'react';
import projectImage1 from "../../../assets/projectImage1.png";
import projectImage2 from "../../../assets/projectImage2.png";
import projectImage3 from "../../../assets/projectImage3.png";


class ProjectsSection extends Component {
    render() {
        return (
            <section className="row">
                <h6>My Recent</h6>
                <h2 className="text-primary">Projects</h2>

                <div className="row justify-content-center">
                    <div className="col-md-3 p-3 m-5">
                        <h3>AutoCreditLK</h3>
                        <img src={projectImage1} alt="project 1 image" width='100%'/>
                        <p>Client is a person who lends money to people. He asked to create a system to keep track of his money. There is a jwt role based authorization to protect the data. There are multiple collectors who can access web application. Everyday summery report of days collection will email to the Admin. On collecting customers get payment confirmation sms. I'm working on the back-end.</p>
                    </div>
                    <div className="col-md-3 p-3 m-5">
                        <h3>Meeting room scheduling system</h3>
                        <img src={projectImage2} alt="project 1 image" width='100%'/>
                        <p>There are two meeting rooms that 5 companies share to hold meetings. This web application provide a way to schedule meeting without conflicts. Admin have access to manage meeting for any company. email will send when scheduling a new meeting. I Created the back-end of this application.</p>
                    </div>
                    <div className="col-md-3 p-3 m-5">
                        <h3>Rathnadeepa E-Magazine</h3>
                        <img src={projectImage3} alt="project 1 image" width='100%'/>
                        <p>This website is for a sinhala e-magazine that based on Australia. Admin can upload new pdf of the magazine with relevant data. readers can view the pdf with page flip effect. I created the back-end of the application.</p>
                    </div>
                </div>
            </section>
        );
    }
}

export default ProjectsSection;