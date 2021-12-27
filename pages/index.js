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

const Home = props => {
  return (
    <Fragment>
      <MeetupList meetups={props.meetups} />
    </Fragment>
  )
}

// export const getServerSideProps = async context => {
//   return {
//     props: {
//       meetups: dummy_meetups,
//     },
//   }
// }

export async function getStaticProps() {
  return {
    props: {
      meetups: dummy_meetups,
    },
    revalidate: 10,
  }
}

export default Home
