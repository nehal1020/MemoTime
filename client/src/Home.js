import React, { useState , useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import useStyles from './MainClassStyle.js';
import { useDispatch } from 'react-redux';
import { getPosts } from './actions/posts';



const Home = () => {
    const[ currentId, setCurrentId ] = useState(null);
    const classes = useStyles();
    const dispatch = useDispatch();
    useEffect(()=> {
        dispatch(getPosts());
    }, [currentId, dispatch]);

    return (
        <Container maxWidth="lg">
            <AppBar className={classes.appBar} position="static" color="inherit" algin-items="space-between">
                <Typography className={classes.heading} variant ="h4" align="center"> Memories are Timeless treasure of the heart! </Typography>
             </AppBar>
             <Grow in>
                <Container>
                    <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts setCurrentId={setCurrentId} />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form currentId={currentId} setCurrentId={setCurrentId} />
                        </Grid>
                    </Grid>
                </Container>
             </Grow>
        </Container>
    
    );
}

export default Home;