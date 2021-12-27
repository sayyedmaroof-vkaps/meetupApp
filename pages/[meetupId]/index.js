import { Fragment } from 'react'
import MeetupDetail from '../../components/meetups/MeetupDetail'
import { MongoClient, ObjectId } from 'mongodb'
import Meta from '../../components/Meta'

const MeetupDetails = ({ meetupData }) => {
  return (
    <Fragment>
      <Meta title={meetupData.title} />
      <MeetupDetail
        image={meetupData.image}
        title={meetupData.title}
        description={meetupData.description}
        address={meetupData.address}
      />
    </Fragment>
  )
}

export const getStaticPaths = async () => {
  // fetching data from an api
  const client = await MongoClient.connect(process.env.MONGODB_URI)
  const db = client.db()

  const meetupsCollection = db.collection('meetups')

  const meetupData = await meetupsCollection.find({}, { _id: 1 }).toArray()

  client.close()

  return {
    fallback: false,
    paths: meetupData.map(meetup => ({
      params: {
        meetupId: meetup._id.toString(),
      },
    })),
  }
}

export const getStaticProps = async context => {
  const meetupId = context.params.meetupId

  // fetching data from an api
  const client = await MongoClient.connect(process.env.MONGODB_URI)
  const db = client.db()

  const meetupsCollection = db.collection('meetups')

  const selectedMeetup = await meetupsCollection.findOne({
    _id: ObjectId(meetupId),
  })

  client.close()

  return {
    props: {
      meetupData: {
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title,
        image: selectedMeetup.image,
        address: selectedMeetup.address,
        description: selectedMeetup.description,
      },
    },
  }
}

export default MeetupDetails
