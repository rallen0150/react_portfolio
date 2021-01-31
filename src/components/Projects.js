import React, { Component } from 'react';
import { Card, CardTitle, CardText, CardActions, Button, Chip, Tooltip } from 'react-mdl';
import { faPython, faReact, faHtml5, faCss3, faJsSquare } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../App.css'

class Projects extends Component {
    render() {
        return(
            <div id="projects_sec">
                {/* Project 1 */}
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{height: '176px', background: 'url(images/project_pics/chowster/Chowster.png) center / cover'}} >Chowster</CardTitle>
                    <CardText className="project_desc">
                        Chowster is a foodtruck locator application that incorporates the Google Maps API. The app is based off of geolocations from Google Maps, so the truck driver won't have to give a latitude and longitude, but will give an address.The app is split into 2 different interactions, the truck driver or the user. The truck driver sets their location, logo, and menu to show to the user. Once the location is set, the truck's logo will appear on the map.The user will be able to look on the map, or the list of trucks, to find a truck around their location. The map centers around the location of the user so they can see which truck is in their area. The user will be able to rate the different trucks and leave comments about the service. Also if a user gives their email address then they will recieve an email of the truck's new location if the driver chooses to give that location to the users who favorited their truck.
                    </CardText>
                    <CardActions border>
                        <Button href="https://github.com/rallen0150/final_project" target="_blank" colored>GitHub</Button>
                        <Button href="http://powerful-brook-42988.herokuapp.com/" target="_blank" colored>Live Demo</Button>
                        <br/>
                        <Tooltip label={<span>Python</span>} position="top">
                            <Chip className="tech-chip"><FontAwesomeIcon icon={faPython}/></Chip>
                        </Tooltip>
                        <Tooltip label={<span>HTML</span>} position="top">
                            <Chip className="tech-chip"><FontAwesomeIcon icon={faHtml5}/></Chip>
                        </Tooltip>
                        <Tooltip label={<span>CSS</span>} position="top">
                            <Chip className="tech-chip"><FontAwesomeIcon icon={faCss3}/></Chip>
                        </Tooltip>
                        <Tooltip label={<span>JavaScript</span>} position="top">
                            <Chip className="tech-chip"><FontAwesomeIcon icon={faJsSquare}/></Chip>
                        </Tooltip>
                    </CardActions>
                </Card>

                {/* Project 2 */}
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{height: '176px', background: 'url(images/project_pics/videogame-library/game-title.png) center / cover' }} >Video Game Library/Search</CardTitle>
                    <CardText className="project_desc">
                        This video game library was my first true React project. I wanted to use an external API to connect from a React app, so I built a video game search using the <a href='https://rawg.io/' target="_blank" rel="noopener noreferrer">Rawg.io API</a>. You get to search a game you want and then you get the description, screenshots, where to find/buy the game online, and related games to what you searched. You are also able to navigate to the system's, genre's and publisher's page which is a description and top games for them.
                    </CardText>
                    <CardActions border>
                        <Button href="https://github.com/rallen0150/video-game-library" target='_blank' colored>GitHub</Button>
                        <Button href="https://robbie-video-library.netlify.app/"target='_blank' colored>Live Demo</Button>
                        <br/>
                        <Tooltip label={<span>React</span>} position="top">
                            <Chip className="tech-chip"><FontAwesomeIcon icon={faReact}/></Chip>
                        </Tooltip>
                        <Tooltip label={<span>HTML</span>} position="top">
                            <Chip className="tech-chip"><FontAwesomeIcon icon={faHtml5}/></Chip>
                        </Tooltip>
                        <Tooltip label={<span>CSS</span>} position="top">
                            <Chip className="tech-chip"><FontAwesomeIcon icon={faCss3}/></Chip>
                        </Tooltip>
                    </CardActions>
                </Card>

                {/* Project 3 */}
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{height: '176px', background: 'url(images/project_pics/url-shortener/url.png) center / cover'}} >URL Shortner</CardTitle>
                    <CardText className="project_desc">
                        The URL Shortener will take any url and create a shorter url to link to that page. The user who wants to shorten a url will be allowed to make the new url public or private. The public urls can be seen by anyone, but private can only be seen by the user who first shortened the url.
                    </CardText>
                    <CardActions border>
                        <Button href="https://github.com/rallen0150/url_shortener" target='_blank' colored>GitHub</Button>
                        <Button href="http://rallen-url-short.herokuapp.com/" target="_blank" colored>Live Demo</Button>
                        <br/>
                        <Tooltip label={<span>Python</span>} position="top">
                            <Chip className="tech-chip"><FontAwesomeIcon icon={faPython}/></Chip>
                        </Tooltip>
                        <Tooltip label={<span>HTML</span>} position="top">
                            <Chip className="tech-chip"><FontAwesomeIcon icon={faHtml5}/></Chip>
                        </Tooltip>
                        <Tooltip label={<span>CSS</span>} position="top">
                            <Chip className="tech-chip"><FontAwesomeIcon icon={faCss3}/></Chip>
                        </Tooltip>
                        <Tooltip label={<span>JavaScript</span>} position="top">
                            <Chip className="tech-chip"><FontAwesomeIcon icon={faJsSquare}/></Chip>
                        </Tooltip>
                    </CardActions>
                </Card>

                {/* Project 4 */}
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{height: '176px', background: 'url(images/project_pics/iron-bank/bank_report.png) center / cover'}} >Iron Bank</CardTitle>
                    <CardText className="project_desc">
                        The Iron Bank is an online banking application. The user will be able to see how much money they have in their account. The user can only see their account and they will be able to do 3 different transactions: withdraw money, deposit money, or transfer money to another user. To transfer money, the user will need to know another user's id number.
                    </CardText>
                    <CardActions border>
                        <Button href="https://github.com/rallen0150/bank" target='_blank' colored>GitHub</Button>
                        <Button href="https://rallen-ironbank.herokuapp.com/"target='_blank' colored>Live Demo</Button>
                        <br/>
                        <Tooltip label={<span>Python</span>} position="top">
                            <Chip className="tech-chip"><FontAwesomeIcon icon={faPython}/></Chip>
                        </Tooltip>
                        <Tooltip label={<span>HTML</span>} position="top">
                            <Chip className="tech-chip"><FontAwesomeIcon icon={faHtml5}/></Chip>
                        </Tooltip>
                        <Tooltip label={<span>CSS</span>} position="top">
                            <Chip className="tech-chip"><FontAwesomeIcon icon={faCss3}/></Chip>
                        </Tooltip>
                        <Tooltip label={<span>JavaScript</span>} position="top">
                            <Chip className="tech-chip"><FontAwesomeIcon icon={faJsSquare}/></Chip>
                        </Tooltip>
                    </CardActions>
                </Card>
            </div>
        )
    }
}

export default Projects;
