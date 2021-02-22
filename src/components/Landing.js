import React, {useState} from 'react'
import { Button, Card, Form, InputGroup } from 'react-bootstrap'
import userPic from '../asset/1.5x/Asset 3hdpi.png'
import mobile from '../asset/1.5x/Asset 4hdpi.png'
import fb from '../asset/1.5x/Asset 6hdpi.png'
import twitter from '../asset/1.5x/Asset 8hdpi.png'
import linkedIn from '../asset/1.5x/Asset 5hdpi.png'
import insta from '../asset/1.5x/Asset 7hdpi.png'
import car from '../asset/3x/Asset 2xxhdpi.png'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import ButtonBase from '@material-ui/core/ButtonBase';
import Hidden from '@material-ui/core/Hidden';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: '0 auto',
    maxWidth: 1000,
    maxHeight: 800,
    backgroundColor: '#E6E6E6',
    borderRadius: '30px',
    justifyContent: 'center',
  },
  image: {
    width: 550,
    height: 500,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

function Landing() {
    const classes = useStyles();
    const [step, setStep] = useState(1);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name + "is now registered!");
    }
    switch(step){
        case 1: 
        return(
            <div className={classes.root} boxShadow={3}>
                <Paper className={classes.paper}>
                    <Grid container>
                    <Hidden xsDown>
                        <Grid item sm={7} style={{backgroundColor: '#E6E6E6'}}>
                            <ButtonBase className={classes.image}>
                                <img className={classes.img} alt="complex" src={car} />
                            </ButtonBase>
                        </Grid>
                      </Hidden>
                        <Grid item xs={"auto"} sm={5} container>
                            <Grid item xs container direction="column" spacing={2}>
                                <Grid item xs>
                                    <Card style={{ justifyContent: "center", backgroundColor: 'transparent', border: "none", padding: '5px 0', margin: '0'}}>
                                        <Card.Body>
                                            <Form onSubmit={() => handleSubmit} style={{backgroundColor:"white", borderRadius:"50px", width: "350px", height:"450px"}} className="login-form">
                                                <Form.Text style={{paddingTop: '40px',paddingBottom: '35px',fontSize:"30px", color: "#db0a14", fontFamily: 'Montserrat', fontSize: '20px', fontWeight:'700'}}>Welcome To Mekvahan</Form.Text>
                                                <p style={{marginRight: '55%', marginBottom: '3px', fontFamily: 'Montserrat', fontSize: '15px', fontWeight: '500'}}>Name</p>
                                                <InputGroup className="mb-4" style={{padding: '0 45px'}}>
                                                    <InputGroup.Prepend>
                                                    <InputGroup.Text id="Username" className="inputArea" style={{borderRadius: '25px 0 0 25px', backgroundColor: '#F6F6F6', boxShadow: '1px 2px 3px rgba(0,0,0,0.5)', fontWeight: 'bold'}} ><img src={userPic} /></InputGroup.Text>
                                                    </InputGroup.Prepend>
                                                    <Form.Control
                                                    className="inputArea"
                                                    placeholder="Username"
                                                    aria-label="Username"
                                                    aria-describedby="Username"
                                                    value={name}
                                                    onChange={(e) => setName(e.target.value)}
                                                    style={{backgroundColor: '#F6F6F6', border: 'none',borderRadius: ' 0 25px 25px 0', height: '45px', boxShadow: '2px 2px 3px rgba(0,0,0,0.5)', fontFamily: 'Montserrat', fontWeight: 'bold'}}
                                                    />
                                                </InputGroup>

                                                <p style={{marginRight: '50%', marginBottom: '3px', fontFamily: 'Montserrat', fontSize: '15px', fontWeight: '500'}}>Phone No.</p>
                                                <InputGroup className="mb-4" style={{padding: "0 45px"}}>
                                                    <InputGroup.Prepend>
                                                    <InputGroup.Text id="number" style={{borderRadius: '25px 0 0 25px', backgroundColor: '#F6F6F6', boxShadow: '1px 2px 3px rgba(0,0,0,0.5)'}} ><img src={mobile} /></InputGroup.Text>
                                                    </InputGroup.Prepend>
                                                    <Form.Control
                                                    className="inputArea"
                                                    placeholder="phone number"
                                                    aria-label="phone number"
                                                    aria-describedby="phone number"
                                                    value={phone}
                                                    onChange={(e) => setPhone(e.target.value)}
                                                    style={{backgroundColor: '#F6F6F6', border: 'none',borderRadius: ' 0 25px 25px 0', height: '50px', boxShadow: '2px 2px 3px rgba(0,0,0,0.5)', fontFamily: 'Montserrat', fontWeight: 'bold'}}
                                                    />
                                                </InputGroup>
                                                <Button type="submit" onClick={() => setStep(step + 1)}
                                                style={{fontFamily: 'Montserrat', width: "200px", margin: "10px 10px 5px 10px", height: "50px", borderRadius: "25px", backgroundColor: 
                                                "#E6E6E6", border: "none", color: "black", fontWeight: 'bold'}}>Next</Button>
                                                <Form.Text style={{fontFamily: 'Montserrat'}}>Follow us on: </Form.Text>
                                                <img src={fb} style={{padding: "10px"}}></img>
                                                <img src={twitter} style={{padding: "10px"}}></img>
                                                <img src={linkedIn} style={{padding: "10px"}}></img>
                                                <img src={insta} style={{padding: "10px"}}></img>
                                            </Form>
                                        </Card.Body>
                                    </Card>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
            </div>
        )
        case 2:
            return(
                <div className={classes.root} boxShadow={3}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src={car} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
              <Card style={{ justifyContent: "center", backgroundColor: 'transparent', border: "none", padding: '5px 0', margin: '0'}}>
                    <Card.Body>
                        <Form style={{backgroundColor:"white", borderRadius:"50px", width: "350px", height:"450px"}} className="login-form">

                            <Form.Text style={{paddingTop: '40px',paddingBottom: '35px',fontSize:"30px", color: "#db0a14", fontFamily: 'Montserrat', fontSize: '20px', fontWeight:'700'}}>Welcome To Mekvahan</Form.Text>
                            <p style={{marginRight: '55%', marginBottom: '3px', fontFamily: 'Montserrat', fontSize: '15px', fontWeight: '500'}}>OTP</p>
                            <InputGroup className="mb-3" style={{padding: "0 30px"}}>
                                <InputGroup.Prepend>
                                <InputGroup.Text id="otp" style={{borderRadius: '25px 0 0 25px', backgroundColor: '#F6F6F6', boxShadow: '1px 2px 3px rgba(0,0,0,0.5)', fontWeight: 'bold'}}><img src={mobile} /></InputGroup.Text>
                                </InputGroup.Prepend>
                                <Form.Control
                                placeholder="OTP"
                                aria-label="OTP"
                                aria-describedby="OTP"
                                value={"0000"}
                                style={{backgroundColor: '#F6F6F6', border: 'none',borderRadius: ' 0 25px 25px 0', height: '50px', boxShadow: '2px 2px 3px rgba(0,0,0,0.5)', fontFamily: 'Montserrat', fontWeight: 'bold'}}
                                />
                            </InputGroup>
                            <Form.Text className="text-muted" style={{marginLeft: '55%'}}>Resend OTP</Form.Text>
                            <Button type="submit" onClick={() => setStep(step + 1)}
                            style={{fontFamily: 'Montserrat', width: "200px", margin: "50px 10px 5px 10px", height: "50px", borderRadius: "25px", backgroundColor: 
                            "#E6E6E6", border: "none", color: "black", fontWeight: 'bold'}}>Done</Button>
                            <Form.Text style={{fontFamily: 'Montserrat'}}>Follow us on: </Form.Text>
                            <img src={fb} style={{padding: "10px"}}></img>
                            <img src={twitter} style={{padding: "10px"}}></img>
                            <img src={linkedIn} style={{padding: "10px"}}></img>
                            <img src={insta} style={{padding: "10px"}}></img>
                        </Form>
                    </Card.Body>
                </Card>

          </Grid>
        </Grid>
        </Grid>
        </Grid>
      </Paper>
    </div>
            )
        case 3:
            return(
                <div className={classes.root} boxShadow={3}>
                <Paper className={classes.paper}>
                  <Grid container spacing={2}>
                    <Grid item>
                      <ButtonBase className={classes.image}>
                        <img className={classes.img} alt="complex" src={car} />
                      </ButtonBase>
                    </Grid>
                    <Grid item xs={12} sm container>
                      <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                        <Card className="submitCard" style={{fontFamily: 'Montserrat', fontWeight: 'bold', fontSize: '13px' ,position: "absolute", justifyContent: "center", backgroundColor: 'white', border: "none", borderRadius: '50px', width: '350px', height: '450px', padding: '10px 0', margin: '25px 0'}}>
                              <Card.Body>
                                  <Card.Text>Dear <bold style={{color: 'red', fontWeight: 'bold'}}>{name}</bold>,<br /> Greetings from Mekvahan!!!</Card.Text>
                                  <Card.Text>In the meantime, Mekvahan Mobile App link has been sent on your registered "<bold style={{color: 'red', fontWeight: 'bold'}}>{phone}</bold>" number.</Card.Text>
                                  <Card.Text>Book via Mobile App to get 100% cashback on your first booking.</Card.Text>
                                  <Card.Text><bold style={{color: 'red', fontWeight: 'bold'}}>Use Code: MVNEW</bold></Card.Text>
                                  <Card.Text>"Explore the world of Mekvahan, Just on your fingertips"</Card.Text>
                                  <Card.Text>Our service execuitve will connect with you shortly.</Card.Text>
                              </Card.Body>
                              {/* <Card.Body>
                                  <Form style={{backgroundColor:"white", borderRadius:"50px", width: "450px", height:"550px"}} className="login-form">
                                      <Form.Text style={{fontSize:"30px", padding:"50px 20px", color: "#db0a14"}}>Welcome To Mekvahan</Form.Text>
                                      
                                      <label htmlFor="number">OTP</label>
                                      <InputGroup className="mb-3" style={{padding: "0 30px"}}>
                                          <InputGroup.Prepend>
                                          <InputGroup.Text id="number" ><img src={phone} /></InputGroup.Text>
                                          </InputGroup.Prepend>
                                          <Form.Control
                                          placeholder="OTP"
                                          aria-label="OTP"
                                          aria-describedby="OTP"
                                          />
                                      </InputGroup>
                                      <Form.Text className="text-muted">Resend OTP</Form.Text>
                                      <Button type="submit" onClick={() => setStep(step + 1)}
                                      style={{width: "200px", margin: "20px", height: "50px", borderRadius: "25px", backgroundColor: 
                                      "#DCDCDC", border: "none", color: "black"}}>Done</Button> */}
                                      <Card.Footer style={{backgroundColor: 'white', border: 'none', borderRadius: '50px'}}>Follow us on: <br />
                                      <img src={fb} style={{padding: "10px"}}></img>
                                      <img src={twitter} style={{padding: "10px"}}></img>
                                      <img src={linkedIn} style={{padding: "10px"}}></img>
                                      <img src={insta} style={{padding: "10px"}}></img>
                                      </Card.Footer>
                                  {/* </Form> */}
                              {/* </Card.Body> */}
                          </Card>
          
                    </Grid>
                  </Grid>
                  </Grid>
                  </Grid>
                </Paper>
              </div>
            )
    }
    
}

export default Landing
