import React, { Fragment } from 'react'
import MeetupDetail from '../../components/meetups/MeetupDetail'

const MeetupDetails = props => {
  return (
    <MeetupDetail
      image={props.image}
      title={props.title}
      description={props.description}
      address={props.address}
    />
  )
}

export const getStaticPaths = () => {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: 'm1',
        },
        params: {
          meetupId: 'm2',
        },
      },
    ],
  }
}

export const getStaticProps = async context => {
  const meetupId = context.params.meetupId

  console.log(meetupId)
  return {
    props: {
      image: 'https://picsum.photos/1000/350',
      title: 'The first meetup',
      description: 'The meetup description',
      address: 'Some street 5, some city, some country',
    },
  }
}

export default MeetupDetails
