import React,{useEffect} from 'react';
import {Container, AppBar , Typography , Grow , Grid } from '@material-ui/core';
import meomeries from './images/meomeries.png'
import Posts from './Posts/Posts';
import Form from './Form/Form';
import useStyles from './styles'
import { useDispatch } from 'react-redux';
import {getPosts} from './actions/posts'
function App() {
  const classes = useStyles();
  const dispatch = useDispatch()

  useEffect(() => {
       dispatch(getPosts());
  }, [dispatch])
  
  return (
    <Container maxidth="lg">
<AppBar className={classes.appBar} position="static" color='inherit' >
  <Typography className={classes.heading} variant="h2" align="center">Atashi</Typography>
  <img className={classes.image} src={meomeries} alt='meomeries' height='60'></img>
</AppBar>
<Grow in>
  <container>
    <Grid container justify="space-between" alignItems='stretch' spacing={3}>
      <Grid item xs={12} sm={7}>
          <Posts/>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Form/>
      </Grid>
    </Grid>
  </container>
</Grow>
    </Container>
  );
}

export default App;
