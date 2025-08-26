import React, { Component } from 'react';
import PDF from '../documents/resume/Robert_Allen_Resume.pdf';
import { Button, Grid, Cell } from 'react-mdl';
import Education from './Education';
import Experience from './Experience';
import Technologies from './Technologies';

class Resume extends Component {
    render() {
        return(
            <div id="experience_sec" className="resume_div">
                <Grid>
                    <Cell col={4}>
                        <h2>Robert Allen</h2>
                        <h4 style={{color: 'grey'}}>Senior Software Engineer</h4>
                        <hr style={{borderTop: '3px solid #833fb2', width: '95%'}}/>
                        <Button raised primary ripple href={PDF} target="_blank">View Resume</Button>
                        <hr style={{borderTop: '3px solid #833fb2', width: '95%'}}/>
                        <p>A Senior Software Engineer offering enthusiasm and understanding of various server-side programming languages. Looking to join an organization where the opportunity for growth and personal development is embraced.</p>
                        <hr style={{borderTop: '3px solid #833fb2', width: '95%'}}/>
                        <h5>Address</h5>
                        <p>Asheville, NC</p>
                        <h5>Phone</h5>
                        <p>(864) 561-8074</p>
                        <h5>Email</h5>
                        <p><a href="mailto:rallen0150@gmail.com" style={{ color: "blue" }}>rallen0150@gmail.com</a></p>
                        <hr style={{borderTop: '3px solid #833fb2', width: '95%'}}/>
                        <h2>Skills</h2>
                        <Technologies />
                    </Cell>
                    <Cell col={1}></Cell>
                    <Cell className="resume-right-col" col={7}>
                        <h2>Education</h2>


                        <Education
                        startMonth={"September"}
                        startYear={2016}
                        endMonth={"December"}
                        endYear={2016}
                        schoolName="Iron Yard"
                        schoolDescription="A 12 week programming bootcamp where I leaned Backend development for web applications. I learned Python/Django as the core language and vanilla HTML, CSS and JavaScript/jQuery."
                        />

                        <Education
                            startMonth={"May"}
                            startYear={2012}
                            endMonth={"May"}
                            endYear={2016}
                            schoolName="Greenville Technical College"
                            schoolDescription="Associate of Science, Electrical Engineering"
                            />
                            <hr style={{borderTop: '3px solid #e22947'}} />

                        <h2>Experience</h2>

                        <Experience
                        startMonth={"March"}
                        startYear={2022}
                        endMonth={"present"}
                        endYear={""}
                        company={"FareHarbor"}
                        jobName="Senior Software Engineer"
                        jobDescription="I started as a mid level Software Engineer assigned to our API focused team. It started out as a small team, in fact when I was hired I was the second engineer on the team! Since then we have grown and became an important part of our company's growth. On this team I have mainly focused on building new connections and maintaining existing connections on our OTA connections. In September of 2023 I became a Senior Software Engineer! Since then I have worked on multiple projects to help our clients maintain and get the correct information from our API specs and our webhooks. A huge project that I was in charge of was leading the integration with Airbnb as a new OTA connection!"
                        />

                        <Experience
                        startMonth={"June"}
                        startYear={2017}
                        endMonth={"Feburary"}
                        endYear={"2022"}
                        company={"MedProcure, LLC"}
                        jobName="Web App Developer"
                        jobDescription="I started as a member of a small team to assist our senior level developer maintain 4 of our applications using LAMP stack. When our company expanded and that senior level developer left to do a different project, I led the new developers to learn our system and assisted them to build a new application. We spent 3-4 months developing a new application (that is similar to the 3 I was previously working on) before we went live with the new application. Then I moved to a new project where I learned Java and Spring on my own to build the new internal tool. This tool is keeping track of all transactions that go through our servers and I am creating a web based application to show what is flowing through the servers and if there are errors with these documents."
                        />

                        <hr style={{borderTop: '3px solid #e22947'}} />
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;
