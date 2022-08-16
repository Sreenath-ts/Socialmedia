import React from 'react'
import useStyles from './Styles'
import { TextField, Button, Typography, Paper} from '@material-ui/core'
function Form() {
    const classes = useStyles();
    const handleSubmit = ()=>{}
  return (
    <Paper className={classes.paper}>
      <form autoComplete='off' noValidate className={classes.form} onSubmit={handleSubmit}>
        <Typography variant="h6" >Creating a meomery</Typography>
        <TextField name="creator"
         variant="outlined"
          label="Creator"
           fullwidth
           value='post'
           onChange='hi'
           />
      </form>
    </Paper>
  )
}

export default Form