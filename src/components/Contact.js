import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { faSkype } from '@fortawesome/free-brands-svg-icons';
// import axios from 'axios';


class Contact extends Component {
  render() {
    return(
      <div id="contact_sec">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Robert Allen</h2>
            <img
              src="images/picture.jpg"
              alt="avatar"
              style={{height: '250px', "borderRadius": "50%"}}
            />

          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr/>

            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <FontAwesomeIcon icon={faPhoneAlt} style={{ "paddingRight": "10px" }} />
                        (864) 561-8074
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <FontAwesomeIcon icon={faEnvelope} style={{ "paddingRight": "10px" }} />
                        <a href="mailto:rallen0150@gmail.com" style={{ color: "blue" }}>rallen0150@gmail.com</a>
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                  <FontAwesomeIcon icon={faSkype} style={{ "paddingRight": "10px" }} />
                        rob.allen93
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
    // onNameChange(event) {
    //     this.setState({name: event.target.value})
    // }

    // onEmailChange(event) {
    //     this.setState({email: event.target.value})
    // }

    // onMessageChange(event) {
    //     this.setState({message: event.target.value})
    // }
}

export default Contact;
