import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
  root: {
    minWidth: 350,
    marginLeft: 7,
    marginTop: 15
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  },
  loadmore: {
    marginTop: 15,
    width: '100%',
    marginLeft: 7
  }
})

const Posts = () => {
  const classes = useStyles()
  return (
    <div>
      <Card className={classes.root} variant='outlined' spacing={1}>
        <CardContent>
          <Typography className={classes.title} color='textSecondary' gutterBottom>
            Word of the Day
          </Typography>
          <Typography variant='h5' component='h2'>
            kkldjlkdklgkl
          </Typography>
          <Typography className={classes.pos} color='textSecondary'>
            adjective
          </Typography>
          <Typography variant='body2' component='p'>
            well meaning and kindly.
            <br />
            {'"a benevolent smile"'}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size='small'>Learn More</Button>
        </CardActions>
      </Card>
      <div style={{ height: 400, width: '100%' }}>
        <Button className={classes.loadmore} variant='outlined' color='primary'>
          SHOW MORE
        </Button>
      </div>
    </div>
  )
}

export default Posts
