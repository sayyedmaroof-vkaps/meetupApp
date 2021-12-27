import { Fragment } from 'react'
import MeetupList from '../components/meetups/MeetupList'
import { MongoClient } from 'mongodb'
import Meta from '../components/Meta'

const Home = props => {
  return (
    <Fragment>
      <Meta />
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
  // fetching data from an api
  const client = await MongoClient.connect(
    'mongodb+srv://taskapp:0208@cluster0.lfxl7.mongodb.net/nextMeetupApp?retryWrites=true&w=majority'
  )
  const db = client.db()

  const meetupsCollection = db.collection('meetups')

  const meetupsData = await meetupsCollection.find().toArray()

  client.close()

  return {
    props: {
      meetups: meetupsData.map(meetup => ({
        title: meetup.title,
        image: meetup.image,
        address: meetup.address,
        description: meetup.description,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 10,
  }
}

export default Home
