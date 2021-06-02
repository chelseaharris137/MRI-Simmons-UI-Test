import React, { useState, useEffect } from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import NativeSelect from '@material-ui/core/NativeSelect'
import InputBase from '@material-ui/core/InputBase'
import Grid from '@material-ui/core/Grid'
import Posts from './Posts'

const BootstrapInput = withStyles((theme) => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(2)
    }
  },
  input: {
    width: '100%',
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 26px 10px 20px',
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
  root: {
    flexGrow: 1,
    maxWidth: 800,
    marginTop: theme.spacing(3)
  },
  margin: {
    marginTop: theme.spacing(1),
    marginLeft: theme.spacing(1),
    width: '98%'
  }
}))

const DropDown = () => {
  const [authors, setAuthors] = useState([])
  const [selected, setSelected] = useState()
  const [count, setCount] = useState()
  const classes = useStyles()

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((json) => {
        setAuthors(json)
      })
  }, [])

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <FormControl className={classes.margin}>
            <InputLabel id='author' htmlFor='author-select'>
              Author
            </InputLabel>
            <NativeSelect
              labelId='author'
              id='author-select'
              input={<BootstrapInput />}
              onChange={(e) =>
                setSelected({
                  author: e.target.value,
                  id: e.target.options[e.target.options.selectedIndex].getAttribute('authorId')
                })
              }
            >
              <option aria-label='None' value='Author' />
              {authors.map((elem) => (
                <option key={elem.id} authorId={elem.id} value={elem.name}>
                  {elem.name}
                </option>
              ))}
            </NativeSelect>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <FormControl className={classes.margin}>
            <InputLabel htmlFor='count-select'>Count</InputLabel>
            <NativeSelect id='count-select' input={<BootstrapInput />} onChange={(e) => setCount(e.target.value)}>
              <option aria-label='None' value='Count' />
              <option value={2}>2</option>
              <option value={5}>5</option>
              <option value={10}>10</option>
            </NativeSelect>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <Posts selected={selected} count={count} setCount={setCount} />
        </Grid>
      </Grid>
    </div>
  )
}

export default DropDown
