import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
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

const Posts = ({ selected, count }) => {
  const [posts, setPosts] = useState()
  const [comments, setComments] = useState()
  const [filteredComments, setFilterComments] = useState()
  const [commentAmount, setCommentAmount] = useState(0)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((posts) => posts.json())
      .then((parsedPosts) => {
        setPosts(parsedPosts)
        return fetch('https://jsonplaceholder.typicode.com/comments')
      })
      .then((comments) => comments.json())
      .then((parsedComments) => {
        setComments(parsedComments)
      })
      .catch((err) => {
        console.error('Request failed', err)
      })
  }, [])

  const findComments = (comments, postid) => {
    let count = 0
    comments.forEach((comment) => {
      if (comment.postId === postid) {
        count = count + 1
      }
    })
    return count
  }

  const classes = useStyles()
  return (
    <div>
      {selected && count
        ? posts
            .filter((post) => post.userId == selected.id)
            .slice(0, count)
            .map((elem, idx) => (
              <Card key={idx} className={classes.root} variant='outlined' spacing={1}>
                <CardContent>
                  <Typography variant='h5' component='h2'>
                    {elem.title}
                  </Typography>
                  <Typography variant='body1' component='p'>
                    {elem.body}
                  </Typography>
                  <Typography variant='body1' component='p'>
                    {findComments(comments, elem.id)}
                  </Typography>
                </CardContent>
              </Card>
            ))
        : ''}
      <div style={{ height: 400, width: '99%' }}>
        <Button className={classes.loadmore} onClick={()=>{}} variant='outlined' color='primary'>
          SHOW MORE
        </Button>
      </div>
    </div>
  )
}

export default Posts
