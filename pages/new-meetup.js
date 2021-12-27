import { useRouter } from 'next/router'
import { Fragment } from 'react'
import NewMeetupForm from '../components/meetups/NewMeetupForm'
import Meta from '../components/Meta'

const MeetUp = () => {
  const router = useRouter()

  const addMeetupHandler = async enteredMeetupData => {
    const response = await fetch('/api/newMeetups', {
      method: 'POST',
      body: JSON.stringify(enteredMeetupData),
      headers: {
        'Content-Type': 'application/json',
      },
    })

    const data = await response.json()

    console.log(data)

    router.push('/')
  }
  return (
    <Fragment>
      <Meta title="New Meetup" />
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </Fragment>
  )
}

export default MeetUp
