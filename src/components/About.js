import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
// import { ProgressBar } from 'react-bootstrap';
import Homepage from './Homepage';

class About extends Component {
    render() {
        return(
            <div>
                <Homepage/>
                <div id="about_sec" style={{ width: '100%' }} >
                    <Grid>
                        <Cell col={2}>
                            {/* <img className="aboutPic" alt="avatar" src="images/USCPhoto.jpg"/>                    */}
                        </Cell>
                        <Cell col={8}>
                            <div>
                                {/* <h1>Software Engineer</h1> */}
                                <p>I am a graduate of the Back-End Engineering course from The Iron Yard in Greenville, South Carolina. I learned the skills needed to prepare myself for a career in web development as well as the process that goes into this line of work.<br/><br/>
                                For the past 3 and a half years I have worked mainly as a <b>Backend Engineer</b> so I have been learning React and Angular to get familiar with frontend technologies. My main goal in the near future is to become a <b><i>Full-Stack Engineer</i></b>
                                <br/><br/>
                                In my free time I am a nerd at heart. I love to play video games and watching movies. However I do like to go out and explore new places. Now that I live in Eugene, OR I love to go to hiking trails or drive to the coast. I also play in multiple rec leagues to play softball or flag football. I (maybe to a fault) am a major University of South Carolina fan. Growing up I live and breath USC and I am still the same loyal fan as I was growing up.</p>
                            </div>
                        </Cell>
                        <Cell col={2}></Cell>
                    </Grid>
                </div>
            </div>
        )
    }
}

export default About;