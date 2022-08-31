import './LoginPage.css'
import * as React from 'react';
import useState from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Grid, Slider, Box, TextField, Stack, Link } from '@mui/material';
import { Container, height } from '@mui/system';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';

function LoginPage() {

  const [custom, setCustom] = React.useState(false)

  const handleCustomClick = () => {
    setCustom(!custom)
  }
  return (
    <div>

      <AppBar position="static" style={{ backgroundColor: '#ecebe7' }}>
        <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
          <img src='https://staging.itsmaideasy.com/static/media/maideasy_stack.7b8e1733126c06bfa3de.png' className='nav_img'></img>
          <img src='https://files.stripe.com/links/MDB8YWNjdF8xSndXZHhCYnVpT1RPZDIyfGZsX3Rlc3RfS0R1QkRaanlOMWc4eTRBS0t3VUNRbWV3006eRJNcX5' className='nav_img'></img>
        </Toolbar>
      </AppBar>

      <Grid xs={12} sm={12} p={4} >
        <div className='main_body'>
          <h4 className='main_body_heading' mb={'10px'}>Tipping Fact Header 1</h4>
          <p  className='main_body_para'>If you’re a server in the Northeast, you’re in luck. The Northeastern states are very generous when it comes to tipping, leaving tip th</p>
        </div>



        <Container>
          <Box sx={{ display: 'flex', gap: "20px", alignItems: 'center', marginTop: "30px" }}>
            <Typography>$5</Typography>
            < Slider
              aria-label="Temperature"
              defaultValue={5}
              // getAriaValueText={valuetext}
              valueLabelDisplay="on"
              step={5}
              marks
              min={5}
              max={25}
            // padding={4}
            />
            <Typography>$25</Typography>

          </Box>
        </Container>

      </Grid>
      <Grid item xs={12} sm={12} >
        <Container xs={12} sm={12} md={6} style={{ display: 'flex', flexDirection: 'column', fontSize: "17px", padding: "40px", width: '48vw' }}>
          <p className='customtip' style={{ color: 'black',textAlign:"center" }} onClick={handleCustomClick} >Enter Custom tip</p>

          <div className={custom ? "show" : "notshow"}>    

          <div style={{display:'flex',justifyContent:"space-between"}}>
            <h3 className='tip_heading'>Tip Amount</h3>
            <a href='' style={{ color: "black" }}>Back to Default</a>
          </div>

          <input className='input_box primary' placeholder='$' type='number' style={{width:"41vw",height:"47px",borderRadius:"5px",padding:"3px",marginBottom:"12px",border:"1px red solid",marginTop:"3px"}}></input>

          </div>



          <input className='input_box primary'  placeholder='Room Number (Optional)' type='number'></input>
         
          
          <Button sx={{ p:2, mt:4 }} style={{backgroundColor:"#2878fa",fontSize:"16px"}} fullWidth variant='contained' >ENTER CARD</Button>

          <Container style={{border:"2px solid black", width:"800px",display:"none"}}>
          <Grid >
            <div >
              <h3>Card information</h3>
              <TextField sx={{backgroundColor:'white'}} fullWidth type='tel' pattern="\d*" placeholder='1234 1234 1234 1234'></TextField>
              <TextField sx={{backgroundColor:"white"}} fullWidth placeholder='MM / YY CVV'></TextField>
            </div>
            <h3>Name on Card</h3>
            <TextField sx={{backgroundColor:"white"}} fullWidth type={'name'}></TextField>
            <Button sx={{mt:1,p:2}} fullWidth variant='contained'>Pay</Button>
          </Grid>
          </Container>
          

          <p className='helvfont' style={{textAlign:"center",padding:'5px',fontSize:"14px  "}}>Your tip goes directly to the maids who clean this room.</p>
        </Container>
      </Grid>

      <Grid item xs={12} sm={12} style={{ display: "flex", flexDirection: 'column', alignItems: 'center' }}>
        <div><FacebookIcon fontSize='3px' />&nbsp;&nbsp;<YouTubeIcon fontSize='3px' />&nbsp;&nbsp;<TwitterIcon fontSize='3px' />&nbsp;&nbsp;<InstagramIcon fontSize='3px' /></div>

        <p style={{ fontSize: "10px",padding:"5px" }}>POWERED BY </p>
        <img src='https://staging.itsmaideasy.com/static/media/maideasy.ec082e1effb89fd6fb63.png' width={120} style={{ marginTop: "5px" }}></img>

      </Grid>

    </div>
  )
}

export default LoginPage



{/* <TextField fullWidth placeholder='$' type={'number'} style={{ backgroundColor: "white", color: 'black' }}></TextField> */}
