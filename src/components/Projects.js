import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGitAlt } from '@fortawesome/free-brands-svg-icons';


class Projects extends Component {
    render() {
        return(
            <div id="projects_sec">
                {/* Project 1 */}
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{height: '176px', background: 'url(images/project_pics/Chowster.png) center / cover'}} >Chowster</CardTitle>
                    <CardText className="project_desc">
                        Chowster is a foodtruck locator application that incorporates the Google Maps API. The app is based off of geolocations from Google Maps, so the truck driver won't have to give a latitude and longitude, but will give an address.The app is split into 2 different interactions, the truck driver or the user. The truck driver sets their location, logo, and menu to show to the user. Once the location is set, the truck's logo will appear on the map.The user will be able to look on the map, or the list of trucks, to find a truck around their location. The map centers around the location of the user so they can see which truck is in their area. The user will be able to rate the different trucks and leave comments about the service. Also if a user gives their email address then they will recieve an email of the truck's new location if the driver chooses to give that location to the users who favorited their truck.
                    </CardText>
                    <CardActions border>
                        <Button href="https://github.com/rallen0150/final_project" target="_blank" colored>GitHub</Button>
                        <Button href="http://powerful-brook-42988.herokuapp.com/" target="_blank" colored>Live Demo</Button>
                    </CardActions>
                </Card>

                {/* Project 2 */}
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{height: '176px', background: 'url(images/project_pics/url.png) center / cover'}} >URL Shortner</CardTitle>
                    <CardText className="project_desc">
                        The URL Shortener will take any url and create a shorter url to link to that page. The user who wants to shorten a url will be allowed to make the new url public or private. The public urls can be seen by anyone, but private can only be seen by the user who first shortened the url.
                    </CardText>
                    <CardActions border>
                        <Button href="https://github.com/rallen0150/url_shortener" target='_blank' colored>GitHub</Button>
                        <Button href="http://rallen-url-short.herokuapp.com/" target="_blank" colored>Live Demo</Button>
                    </CardActions>
                </Card>

                {/* Project 3 */}
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{height: '176px', background: 'url(images/project_pics/bank_report.png) center / cover'}} >Iron Bank</CardTitle>
                    <CardText className="project_desc">
                        The Iron Bank is an online banking application. The user will be able to see how much money they have in their account. The user can only see their account and they will be able to do 3 different transactions: withdraw money, deposit money, or transfer money to another user. To transfer money, the user will need to know another user's id number.
                    </CardText>
                    <CardActions border>
                        <Button href="https://github.com/rallen0150/bank" target='_blank' colored>GitHub</Button>
                        <Button href="https://rallen-ironbank.herokuapp.com/"target='_blank' colored>Live Demo</Button>
                    </CardActions>
                </Card>
            </div>
        )
    }
}

export default Projects;