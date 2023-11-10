import * as React from 'react';
import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { themeSettings } from './Theme.js';

import HomeImage from './images/main.jpeg';
import GetBuzzedLogo from './images/getBuzzedLogo.png';

import BlakeHeadshot from './images/headshots/blake_togerson.jpg';
import KellyHeadshot from './images/headshots/kelly_togerson.png';
import CoralHeadshot from './images/headshots/coral_faradjian.jpeg';
import MarcusHeadshot from './images/headshots/marcus_grindstaff.jpeg';
import JubalHeadshot from './images/headshots/jubal_delong.jpeg';
import AndrewHeadshot from './images/headshots/andrew_grindstaff.jpeg';
import JonahHeadshot from './images/headshots/jonah_renyolds.jpg';

import DoubleBand from './images/double_pic.jpeg';
import SingleBand from './images/single_pic.jpeg';

import ManOnCouch from './images/man_on_couch_with_woman_watering.jpeg';
import ManInBed from './images/man_in_bed_with_tv_and_woman.jpeg';
import WomanReading from './images/woman_reading.jpeg';
import WomanWatering from './images/woman_watering.jpeg';
import BlakeOnStairs from './images/blake-on-stairs.jpeg';
import Corvette from './images/getting_out_corvette.jpeg';

function Copyright() {
  return (
    <Typography variant="body2" color="white" align="center">
      {'Copyright © '}
      <Link color="inherit">
        GetBuzzed Inc
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const FORM_ENDPOINT = "https://GetBuzzedalert.com/formSubmit"

function HeadshotCard(id, image, name, position, description) {
  this.id = id;
  this.image = image;
  this.name = name;
  this.position = position;
  this.description = description;
}

const cards = [
  new HeadshotCard(0, BlakeHeadshot, "Blake Togerson", "CEO / Co-Founder", "Blake is a Point Loma Nazarene University undergraduate majoring in Business. He serves as a legislative intern for Senator Joel Anderson delivering public proclamations at speaking engagements throughout the community and creating legislative briefs."),
  new HeadshotCard(1, KellyHeadshot, "Kelly Togerson", "CCO / Co-Founder", "Kelly is a Research and Creative Development specialist. She has been a Communication professor for more than 20 years and holds Master’s Degrees in Communication and Education."),
  new HeadshotCard(2, CoralHeadshot, "Coral Faradjian", "CFO", "Coral is the Director of Legal and Regulatory for Iridium Communications responsible for leadership of contracts team tasked with full life cycle management of all contracts. She is the Legal and Strategic Execution Advisor for Get Buzzed."),
  new HeadshotCard(3, MarcusHeadshot, "Marcus Grindstaff", "CTO", "Marcus is the Technical Lead for Get Buzzed. He has 28 years of high-tech experience including 17 years in semiconductor development at Intel and 5 years as COO/CTO at Care Innovations."),
  new HeadshotCard(4, JubalHeadshot, "Jubal Delong", "Industrial Design", "Jubal and his company JDID provide industrial design and product development for Get Buzzed. JDID is an award-winning product design and development studio specializing in 3D, CAD, prototyping and comprehensive product development."),
  new HeadshotCard(5, AndrewHeadshot, "Andrew Grindstaff", "Software Design", "Andrew leads software design for Get Buzzed. He is experienced in designing embedded systems for Intel and building software archeticture for underwater robots."),
  new HeadshotCard(6, JonahHeadshot, "Jonah Renyolds", "Elecrical Design", "Jonah is an electrical design specialist. He is responsible for the creation of all custom boards and electrical engineering for Get Buzzed.")
  ];

function Images(title, img) {
  this.img = img;
  this.title = title;
}

const aboutUsImages = [
  new Images("Man With Remote", ManInBed),
  new Images("Woman Outside", WomanWatering),
  new Images("Woman Reading", WomanReading),
  new Images("Man On Couch", ManOnCouch),
  new Images("Blake On Stairs", BlakeOnStairs),
  new Images("Getting Out Of The Corvette", Corvette)
  ]

const headerSlogan = "Instant, wrist-to-wrist, in-home, reliable communication from caretaker to recipients."

const productDescription = "Get Buzzed brings innovation in instant, reliable, inexpensive and non-intrusive communication between care takers and recipients of care. For more information, please fill out out contact form in the bottom of our page to get in contact with us directly."
const twoWristBandsDescription = "Pair of wristbands pre-paired and fully ready to use straight out of the box."
const oneWristBandDescription = "Single wristband ready to be paired and used as additional unit in your care network"

const aboutUs = ["Six years ago, our journey began when we moved in with my parents, shedding light on the unique challenges that families living with aging individuals face. My father’s battle with Parkinson's necessitated immediate, full-time access to a caregiver because he was susceptible to falling. However, he didn't require the extensive amenities of a costly assisted living center, especially when the average price in California is a staggering $146,000 a year.",
  "We, like millions of others, sought an in-home solution, but the market offered no easy way to instantly alert a caregiver of a need or emergency. Traditional options like Life Alert proved too expensive with costly set up and subscription fees. We didn’t necessarily need an ambulance automatically every time he pressed a button. Using a cell phone or app was impractical, confusing, and unreliable for my dad, particularly after a fall. Employing a full-time caregiver would also be very costly. Relying on my aging mom to care for him would be exhausting for her. I was a dedicated family member who wanted to help but I was also a single mom of of three, working full time which limited my ability to watch over my dad.",
  "In response to this pressing need, we conceptualized Get Buzzed an affordable, lightweight, wristband that connects caregiver the recipient of care instantly. Quick charging, extended battery life, exceptional range, and a user-friendly design are the hallmarks of our innovative solution, offering aging individuals and their families the freedom they deserve. No cell phone, app, or WiFi needed. My mom can go outside and work in her garden knowing my dad can reach her. My son can play video games with his AirPods in knowing he’ll feel the buzz if his grandpa needs help. I can work from home, attend Zoom meetings, make dinner, do laundry and help the kids with homework without wondering if dad is ok. My dad now has more privacy without us hovering over him and constantly checking on him. Get Buzzed gives us all more freedom and peace of mind. We know Get Buzzed will help your family, just as it has helped ours.",
  "Buy time, Get Buzzed."
  ]

const contactUsDescription = "Get in contact with us as we continue to raise funds and build our product. For those interested in investing or preorders, please reach out to our CCO and Co-Founder Kelly Togerson through email: kelly@getbuzzedalert.com"

const footerSlogan = "Buy time and Get Buzzed"

const theme = createTheme(themeSettings);

export default function Page() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const inputs = e.target.elements;
    const data = {};

    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].name) {
        data[inputs[i].name] = inputs[i].value;
      }
    }

    fetch(FORM_ENDPOINT, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Form response was not ok');
        }

        setSubmitted(true);
      })
      .catch((err) => {
        // Submit the form manually
        e.target.submit();
      });
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar sx={{ bgcolor: 'primary' }}>
        <Toolbar>
          <Stack
              direction="row"
              spacing={2}
              justifyContent="end"
            >
            <Button variant="text" href="#home" color="inherit" style={{textTransform: 'none'}}>
              <Typography variant="h6" color="text.secondary" noWrap>Get Buzzed</Typography>
            </Button>
            <Button variant="text" href="#product" color="inherit" style={{textTransform: 'none'}}>
              <Typography variant="h6" color="text.secondary" noWrap>Product</Typography>
            </Button>
            <Button variant="text" href="#about" color="inherit" style={{textTransform: 'none'}}>
              <Typography variant="h6" color="text.secondary" noWrap>Story</Typography>
            </Button>
            <Button variant="text" href="#team" color="inherit" style={{textTransform: 'none'}}>
              <Typography variant="h6" color="text.secondary" noWrap>Team</Typography>
            </Button>
            <Button variant="text" href="#contact" color="inherit" style={{textTransform: 'none'}}>
              <Typography variant="h6" color="text.secondary" noWrap>Contact</Typography>
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>
      <main>

      <div id='home'>
        <center>
          <Box
            style={{
              height:600,

              backgroundImage: `url(${HomeImage})`,
              // background-size takes height and width but shorthand is one value used for both
              backgroundSize: "center",
              // background-position options include center, cover, and more: https://developer.mozilla.org/en-US/docs/Web/CSS/background-position
              backgroundPosition: "bottom 10% center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <Container maxWidth="100%" sx={{ pt:"70px" }}>
              <Box
              component='img'
              src={GetBuzzedLogo}
            style={{
              width:"100%",
              // background-size takes height and width but shorthand is one value used for both
              backgroundSize: "cover",
              // background-position options include center, cover, and more: https://developer.mozilla.org/en-US/docs/Web/CSS/background-position
              backgroundRepeat: "no-repeat",
            }}
          />
              {/*<Box
                style={{
                  height:500,
                  backgroundImage: `url(${Logo})`,
                  // background-size takes height and width but shorthand is one value used for both
                  backgroundSize: "cover",
                  // background-position options include center, cover, and more: https://developer.mozilla.org/en-US/docs/Web/CSS/background-position
                  backgroundRepeat: "no-repeat",
                }}
              >
              </Box>*/}
              <Typography variant="h5" align="center" color="text.primary" paragraph 
                style={{ textShadow: "1px 1px 1px black"}}>
                { headerSlogan }
              </Typography>
            </Container>
          </Box>
          </center>
        </div>
        <div id='product'>
          <Typography
            component="h3"
            variant="h3"
            align="center"
            color="white"
            fontWeight='fontWeightMedium'
            sx={{ pt:"1%", textShadow: "0px 1px black" }}
          >
            The Product
          </Typography>
          <Typography component="h6" variant="h6" align='center' color="white" sx={{ px:"7%" }} style={{ textShadow: "1px 1px 1px black" }}>
            { productDescription }
          </Typography>
          <Container sx={{ py: "1.5%", px:"3%", bgcolor: 'background' }} maxWidth='xxl'>
            <Grid container spacing={4} justifyContent='center' sx={{ px: "5%" }}>
                <Grid item key="double" xs={12} sm={6} md={6}>
                  <Card
                    sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                  >
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography variant="h6" sx={{ fontSize:"250%" }} color="text.secondary">Two Paired Wristbands - $99</Typography>
                      <Typography color="text.secondary" sx={{ fontSize:"120%" }}>
                        { twoWristBandsDescription }
                      </Typography>
                    </CardContent>
                    <CardMedia
                      sx={{ height: 200,
                            imagePosition: "bottom -60px center",
                            paddingTop: '100%' }}
                      image={DoubleBand}
                      title="Two Pre-paired Wristbands"
                    />
                  </Card>
                </Grid>
                <Grid item key="single" xs={12} sm={6} md={6}>
                  <Card
                    sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                  >
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography variant="h6" sx={{ fontSize:"250%" }} color="text.secondary">One Singular Wristband - $49</Typography>
                      <Typography color="text.secondary" sx={{ fontSize:"120%" }}>
                        { oneWristBandDescription }
                      </Typography>
                    </CardContent>
                  <CardMedia
                      sx={{ height: 200,
                            imagePosition: "bottom -60px center",
                            paddingTop: '100%' }}
                      image={SingleBand}
                      title="One Wristband"
                    />
                    </Card>
                </Grid>
            </Grid>
          </Container>

        </div>
        <div id='about'>
          <Typography
            component="h3"
            variant="h3"
            align="center"
            color="white"
            fontWeight='fontWeightMedium'
            sx={{ textShadow: "0px 1px black" }}
          >
            Our Story
          </Typography>
                <Grid container sx={{ pt:"0.5%" }}>
          <Grid item key="form" md={6} sx={{ pl:"2%", pr:"2%" }}>
          {aboutUs.map((line) => (
            <Typography align='right' variant="h6" color="white" style={{ margin: "0px 0px 4% 0px", textShadow: "1px 1px 1px black"}}>{ line }</Typography>
          ))}
          </Grid>
          <Grid item key="title" md={6} sx={{ pl:"0.5%", pr:"2%" }} >
            <ImageList sx={{ height: "auto" }} cols={2}>
              {aboutUsImages.map((item) => (
                <ImageListItem key={item.img}>
                  <img
                    srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                    src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                    alt={item.title}
                    loading="lazy"
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </Grid>
          </Grid>

        </div>
        <div id='team' style={{ margin: "0px 0px 0px 0px" }}>
          <Typography
            component="h3"
            variant="h3"
            align="center"
            color="white"
            fontWeight='fontWeightMedium'
            sx={{ textShadow: "0px 1px black"}}
          >
            Meet Our Team
          </Typography>
          <Container sx={{ py: "1.5%", px:"1%", bgcolor: 'background' }} maxWidth='xxl'>
            <Grid container spacing={4} justifyContent='center' sx={{ px: "4%" }}>
              {cards.map((card) => (
                <Grid item key={card.id} xs={12} sm={6} md={3}>
                  <Card
                    sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                  >
                    <CardMedia
                      sx={{ height: 200,
                            imagePosition: "bottom -60px center",
                            paddingTop: '100%' }}
                      image={card.image}
                      title={card.name}
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography variant="h6" sx={{ fontSize:31 }} color="text.secondary">{card.name}</Typography>
                      <Typography variant="h6" sx={{ fontSize:17 }} color="text.secondary">{card.position}</Typography>
                      <Typography color="text.secondary" sx={{ fontSize:15 }}>
                        {card.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </div>
        <div id='contact' style={{ margin: "0px 0px 1% 0px" }}>
          <Typography
         align="center"
            component="h3"
            variant="h3"
            color="white"
            fontWeight="fontWeightMedium"
            sx={{ pt:10, textShadow: "0px 1px black"}}
            style={{ margin: "-3% 0px 1% 0px" }}
          >
            Contact Us
          </Typography>
          <Typography align='center' variant="h6" color="white" style={{ margin: "0% 15% 5% 15%", textShadow: "0px 1px black" }}>{ contactUsDescription }</Typography>
        </div>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: 'background.footer', p: 4, boxShadow: "2px 2px 2px black" }} component="footer">
        <Typography variant="h5" align="center" color="white">
          Get Buzzed Inc
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="white"
          component="h6"
        >
          { footerSlogan }
        </Typography>
        <Copyright/>
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}
