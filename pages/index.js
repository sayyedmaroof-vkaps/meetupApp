import { Fragment } from 'react'
import MeetupList from '../components/meetups/MeetupList'

const dummy_meetups = [
  {
    id: 'm1',
    title: 'The First Meetup',
    image: 'https://picsum.photos/1000/350',
    address: '5, 12345 This is going to be an address, dfjkaf',
  },
  {
    id: 'm2',
    title: 'The Second Meetup',
    image: 'https://picsum.photos/1000/350',
    address: '5, 12345 This is going to be an address, dfjkaf',
  },
  {
    id: 'm3',
    title: 'The Third Meetup',
    image: 'https://picsum.photos/1000/350',
    address: '5, 12345 This is going to be an address, dfjkaf',
  },
]

const Home = () => {
  return (
    <Fragment>
      <MeetupList meetups={dummy_meetups} />
    </Fragment>
  )
}

export default Home
