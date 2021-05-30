import React, { useState, useEffect } from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import NativeSelect from '@material-ui/core/NativeSelect'
import InputBase from '@material-ui/core/InputBase'

const BootstrapInput = withStyles((theme) => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(2)
    }
  },
  input: {
    width: '350px',
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)'
    }
  }
}))(InputBase)

const useStyles = makeStyles((theme) => ({
  margin: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  }
}))

const DropDown = () => {
  const [authors, setAuthors] = useState([])
  const classes = useStyles()

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((json) => {
        setAuthors(json)
        console.log(json)
      })
  }, [])

  return (
    <div>
      <FormControl className={classes.margin}>
        <InputLabel htmlFor='demo-customized-select-native'>Author</InputLabel>
        <NativeSelect id='demo-customized-select-native' input={<BootstrapInput />}>
          <option aria-label='None' value='Author' />
          {authors.map((elem) => (
            <option key={elem.id}>{elem.name}</option>
          ))}
        </NativeSelect>
      </FormControl>
      <FormControl className={classes.margin}>
        <InputLabel htmlFor='demo-customized-select-native'>Count</InputLabel>
        <NativeSelect id='demo-customized-select-native' input={<BootstrapInput />}>
          <option aria-label='None' value='Count' />
          <option value={2}>2</option>
          <option value={5}>5</option>
          <option value={10}>10</option>
        </NativeSelect>
      </FormControl>
    </div>
  )
}

export default DropDown
