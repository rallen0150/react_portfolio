import React, { Component } from 'react';
import { Grid, Cell, ProgressBar, List, ListItem } from 'react-mdl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhp, faPython, faJava, faJsSquare, faHtml5, faCss3, faReact, faAngular, faGitAlt, faVuejs } from '@fortawesome/free-brands-svg-icons';

class Technologies extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Cell col={8}>
                        <List>
                            <ListItem>
                                <span className="img_span">
                                    <FontAwesomeIcon icon={faPython} size={"2x"} />
                                </span>
                                <ProgressBar progress={80} style={{ height: "15px" }} />
                            </ListItem>
                            <ListItem>
                                <span className="img_span">
                                    <FontAwesomeIcon icon={faPhp} size={"2x"} />
                                </span>
                                <ProgressBar progress={60} style={{ height: "15px" }} />
                            </ListItem>
                            <ListItem>
                                <span className="img_span">
                                    <FontAwesomeIcon icon={faJava} size={"2x"} />
                                </span>
                                <ProgressBar progress={50} style={{ height: "15px" }} />
                            </ListItem>
                            <ListItem>
                                <span className="img_span">
                                    <FontAwesomeIcon icon={faHtml5} size={"2x"} />
                                </span>
                                <ProgressBar progress={80} style={{ height: "15px" }} />
                            </ListItem>
                            <ListItem>
                                <span className="img_span">
                                    <FontAwesomeIcon icon={faCss3} size={"2x"} />
                                </span>
                                <ProgressBar progress={70} style={{ height: "15px" }} />
                            </ListItem>
                            <ListItem>
                                <span className="img_span">
                                    <FontAwesomeIcon icon={faJsSquare} size={"2x"} />
                                </span>
                                <ProgressBar progress={60} style={{ height: "15px" }} />
                            </ListItem>
                            <ListItem>
                                <span className="img_span">
                                    <FontAwesomeIcon icon={faReact} size={"2x"} />
                                </span>
                                <ProgressBar progress={40} style={{ height: "15px" }} />
                            </ListItem>
                            <ListItem>
                                <span className="img_span">
                                    <FontAwesomeIcon icon={faVuejs} size={"2x"} />
                                </span>
                                <ProgressBar progress={30} style={{ height: "15px" }} />
                            </ListItem>
                            <ListItem>
                                <span className="img_span">
                                    <FontAwesomeIcon icon={faAngular} size={"2x"} />
                                </span>
                                <ProgressBar progress={20} style={{ height: "15px" }} />
                            </ListItem>
                            <ListItem>
                                <span className="img_span">
                                    <FontAwesomeIcon icon={faGitAlt} size={"2x"} />
                                </span>
                                <ProgressBar progress={60} style={{ height: "15px" }} />
                            </ListItem>
                        </List>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Technologies;