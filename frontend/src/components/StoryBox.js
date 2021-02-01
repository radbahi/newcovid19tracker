import { Button, Card } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import axios from 'axios'

const StoryBox = () => {
  const [stories, setStories] = useState([])

  useEffect(() => {
    const addStories = async () => {
      const { data } = await axios.get('http://localhost:3000/stories')
      setStories(data)
    }
    addStories()
  }, [])

  return (
    <div>
      <h1>International News about COVID-19</h1>
      <div>
        {stories.map((stories) => {
          return (
            <Card key={stories.id}>
              <Card.Img
                variant='top'
                alt={stories.title}
                src={stories.urlToImage}
              />
              <Card.Body>
                <Card.Title>{stories.title}</Card.Title>
                <Card.Subtitle>{stories.publishedAt}.</Card.Subtitle>
                <Card.Text>{stories.description}</Card.Text>
                <Button variant='primary' target='_blank' href={stories.url}>
                  Go to story
                </Button>
              </Card.Body>
            </Card>
          )
        })}
      </div>
    </div>
  )
}

export default StoryBox
