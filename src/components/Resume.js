import React, { Component } from 'react';
import PDF from '../documents/resume/RobertAllenResume.pdf';
import { Button, Grid, Cell, List, ListItem, ProgressBar } from 'react-mdl';
import Education from './Education';
import Experience from './Experience';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhp, faPython, faJava, faJsSquare, faHtml5, faCss3, faReact, faAngular, faGitAlt } from '@fortawesome/free-brands-svg-icons';

class Resume extends Component {
    render() {
        return(
            <div id="experience_sec" className="resume_div">
                <Grid>
                    <Cell col={4}>
                        <h2>Robert Allen</h2>
                        <h4 style={{color: 'grey'}}>Web App Developer</h4>
                        <hr style={{borderTop: '3px solid #833fb2', width: '95%'}}/>
                        <Button raised primary ripple href={PDF} target="_blank">View Resume</Button>
                        <hr style={{borderTop: '3px solid #833fb2', width: '95%'}}/>
                        <p>A Web App Developer offering enthusiasm and understanding of various programming languages. Looking to join an organization where the opportunity for growth and personal development is embraced.</p>
                        <hr style={{borderTop: '3px solid #833fb2', width: '95%'}}/>
                        <h5>Address</h5>
                        <p>Eugene, OR</p>
                        <h5>Phone</h5>
                        <p>(864) 561-8074</p>
                        <h5>Email</h5>
                        <p>rallen0150@gmail.com</p>
                        <hr style={{borderTop: '3px solid #833fb2', width: '95%'}}/>
                        <h2>Skills</h2>
                        <List>
                            <ListItem>
                                <span className="img_span">
                                    <FontAwesomeIcon icon={faPhp} size={"2x"}/>
                                </span>
                                <ProgressBar progress={70} style={{ height: "15px" }} />
                            </ListItem>
                            <ListItem>
                                <span className="img_span">
                                    <FontAwesomeIcon icon={faJava} size={"2x"}/>
                                </span>
                                <ProgressBar progress={60} style={{ height: "15px" }}/>
                            </ListItem>
                            <ListItem>
                                <span className="img_span">
                                <FontAwesomeIcon icon={faPython} size={"2x"}/>
                                </span>
                                <ProgressBar progress={60} style={{ height: "15px" }}/>
                            </ListItem>
                            <ListItem>
                                <span className="img_span">
                                    <FontAwesomeIcon icon={faHtml5} size={"2x"}/>
                                </span>
                                <ProgressBar progress={70} style={{ height: "15px" }}/>
                            </ListItem>
                            <ListItem>
                                <span className="img_span">
                                    <FontAwesomeIcon icon={faCss3} size={"2x"}/>
                                </span>
                                <ProgressBar progress={60} style={{ height: "15px" }}/>
                            </ListItem>
                            <ListItem>
                                <span className="img_span">
                                    <FontAwesomeIcon icon={faJsSquare} size={"2x"}/>
                                </span>
                                <ProgressBar progress={60} style={{ height: "15px" }}/>
                            </ListItem>
                            <ListItem>
                                <span className="img_span">
                                    <FontAwesomeIcon icon={faReact} size={"2x"}/>
                                </span>
                                <ProgressBar progress={30} style={{ height: "15px" }}/>
                            </ListItem>
                            <ListItem>
                                <span className="img_span">
                                    <FontAwesomeIcon icon={faAngular} size={"2x"}/>
                                </span>
                                <ProgressBar progress={20} style={{ height: "15px" }}/>
                            </ListItem>
                            <ListItem>
                                <span className="img_span">
                                    <FontAwesomeIcon icon={faGitAlt} size={"2x"}/>
                                </span>
                                <ProgressBar progress={60} style={{ height: "15px" }}/>
                            </ListItem>
                        </List>
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
                        startMonth={"June"}
                        startYear={2017}
                        endMonth={"present"}
                        endYear={""}
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
