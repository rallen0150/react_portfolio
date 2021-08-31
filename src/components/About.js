import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
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
                                <p style={{ "fontSize": "20px" }}>I am a graduate of the Back-End Engineering course from The Iron Yard in Greenville, South Carolina. I learned the skills needed to prepare myself for a career in web development as well as the process that goes into this line of work.<br/><br/>
                                Since attending the Iron Yard, I have worked mainly as a <b>Back-End Engineer</b> so I have been learning React and Angular to get familiar with Front-End technologies. My main goal in the near future is to become a <b><i>Full-Stack Engineer</i></b>.
                                <br/><br/>
                                In my free time I am a nerd at heart. I love to play video games and watch movies. However, I do like to go out and explore new places. Now that I live in Eugene, OR, I enjoy exploring hiking trails or driving to the coast. I have also joined multiple rec leagues to play softball or flag football. I (maybe to a fault) am a major University of South Carolina fan. Growing up, I have lived and breathed USC, and I am still the same loyal fan as I was when I lived in South Carolina.</p>
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