import { Box, Container, Grid } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { LightPurpleButton } from '../components/buttonStyles';

const Homepage = () => {
    return (
        <StyledContainer>
            <Grid container spacing={0}>
                <Grid item xs={12} md={6}>
                    <img src={"https://assets-global.website-files.com/5ef061301549585c93061932/611b9b4ed0dfca5a9804b606_Faculty%20Management%20Systems.jpg"} alt="students" style={{ width: '100%',margin:'50%',marginTop:'15px' }} />
                </Grid>
                
            </Grid>
            <Grid item xs={12} md={6}  style={{marginTop:'-250px'}}>
                    <StyledPaper elevation={3}>
                        <StyledTitle style={{fontSize:'3rem'}}>
                            Welcome to
                            Faculty Management
                            System
                        </StyledTitle>
                        <StyledText style={{fontSize:'1.2rem',marginTop:'5px'}}>
                        Welcome to our Faculty Management site! Streamline academic administration with our user-friendly platform. Effortlessly manage faculty information, assignments, and schedules for a more organized and productive educational experience. Join us in redefining excellence in faculty management.
                        </StyledText>
                        <StyledBox>
                            <StyledLink to="/choose">
                                <LightPurpleButton variant="contained" fullWidth>
                                    Login
                                </LightPurpleButton>
                            </StyledLink>
                            <StyledLink to="/chooseasguest">
                            </StyledLink>
                            <StyledText style={{color:"black", marginTop:"-15px"}}>
                                Don't have an account?{' '}
                                <Link to="/Adminregister" style={{color:"#1D5E8A"}} >
                                    Sign up
                                </Link>
                            </StyledText>
                        </StyledBox>
                    </StyledPaper>
                </Grid>
        </StyledContainer>
    );
};

export default Homepage;

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
//   height: 100vh;
`;

const StyledPaper = styled.div`
  padding: 24px;
  height: 50vh;
`;

const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:center;
  gap: 16px;
//   padding: 24px;
`;

const StyledTitle = styled.h1`
  font-size: 3rem;
  color: #1D5E8A;
  /* font-family: "Manrope"; */
  font-weight: bold;
  padding-top: 0;
  letter-spacing: normal;
  line-height: normal;
`;

const StyledText = styled.p`
  /* color: #550080; */
  margin-top: 50px;
  margin-bottom: 30px; 
  letter-spacing: normal;
  line-height: normal;
`;


const StyledLink = styled(Link)`
  text-decoration: none;
`;
