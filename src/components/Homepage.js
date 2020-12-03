import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
// import { ProgressBar } from 'react-bootstrap';

class Homepage extends Component {
    render() {
        return(
            <div className="homepage_sec" style={{ width: '100%' }} >
                <Grid className="seg_grid">
                    <Cell col={12}>
                        <div style={{ "textAlign": "center" }}>
                            <img className="avatarPic center" alt="avatar" src="images/myAvatar.png"/>
                        </div>
                        <div className="banner_text">
                            <h3>Robert Allen</h3><br/><h1>Software Engineer</h1>
                            <hr/>
                            <p className="main_languages">PHP | Java/Spring Boot | Python/Django | HTML | CSS | JavaScript | MySQL</p>
                            <div className="social_links">
                                <a href="https://www.linkedin.com/in/robert-allen-03ba5b132/">
                                    <FontAwesomeIcon size={"4x"} icon={faLinkedin} />
                                </a>
                                <a href="https://github.com/rallen0150/">
                                    <FontAwesomeIcon size={"4x"} icon={faGithub} />
                                </a>
                            </div>
                        </div>  
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Homepage;