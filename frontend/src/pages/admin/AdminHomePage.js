import { Container, Grid, Paper } from '@mui/material';
import { useEffect } from 'react';
import CountUp from 'react-countup';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import SeeNotice from '../../components/SeeNotice';
import { getAllSclasses } from '../../redux/sclassRelated/sclassHandle';
import { getAllStudents } from '../../redux/studentRelated/studentHandle';
import { getAllTeachers } from '../../redux/teacherRelated/teacherHandle';

const AdminHomePage = () => {
    const dispatch = useDispatch();
    const { studentsList } = useSelector((state) => state.student);
    const { sclassesList } = useSelector((state) => state.sclass);
    const { teachersList } = useSelector((state) => state.teacher);

    const { currentUser } = useSelector(state => state.user)

    const adminID = currentUser._id

    useEffect(() => {
        dispatch(getAllStudents(adminID));
        dispatch(getAllSclasses(adminID, "Sclass"));
        dispatch(getAllTeachers(adminID));
    }, [adminID, dispatch]);

    const numberOfStudents = studentsList && studentsList.length;
    const numberOfClasses = sclassesList && sclassesList.length;
    const numberOfTeachers = teachersList && teachersList.length;

    return (
        <>
            <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                <Grid container spacing={3}>
                    {/* <Grid item xs={12} md={3} lg={3}>
                        <StyledPaper>
                            <img src={Students} alt="Students" />
                            <Title>
                                Total Students
                            </Title>
                            <Data start={0} end={numberOfStudents} duration={2.5} />
                        </StyledPaper>
                    </Grid> */}
                    <Grid item xs={12} md={3} lg={3}style={{margin:'30px',marginLeft:'250px' }}>
                        <StyledPaper style={{height:"250px",borderRadius:"50px"}}>
                            <img src={'https://w7.pngwing.com/pngs/352/671/png-transparent-student-child-laptop-pc-kid-boy-young-studying-online-learning-online-education.png'} alt="Classes" style={{width:'80px',height:'80px'}}/>
                            <Title>
                                Total Classes
                            </Title>
                            <Data start={0} end={numberOfClasses} duration={5} />
                        </StyledPaper>
                    </Grid>
                    <Grid item xs={12} md={3} lg={3}style={{margin:'30px',marginLeft:'50px'}}>
                        <StyledPaper style={{height:"250px",borderRadius:"50px"}}>
                            <img src={"https://w7.pngwing.com/pngs/305/453/png-transparent-teacher-boy-computer-icons-teacher-angle-child-cartoon.png"} alt="Teachers" style={{width:'80px',height:'80px'}} />
                            <Title style={{}}>
                                Total Teachers
                            </Title>
                            <Data start={0} end={numberOfTeachers} duration={2.5} />
                        </StyledPaper>
                    </Grid>
                   
                    <Grid item xs={12} md={12} lg={12}>
                        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' ,borderRadius:"30px",textAlign:'center',paddingTop:'0px'}}>
                            <SeeNotice />
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};


const StyledPaper = styled(Paper)`
  padding: 16px;
  display: flex;
  flex-direction: column;
  height: 200px;
  justify-content: space-between;
  align-items: center;
  text-align: center;
`;

const Title = styled.p`
  font-size: 1.25rem;
`;

const Data = styled(CountUp)`
  font-size: calc(1.3rem + .6vw);
  color: green;
`;

export default AdminHomePage