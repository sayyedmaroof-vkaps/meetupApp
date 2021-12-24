import NewMeetupForm from '../components/meetups/NewMeetupForm'

const MeetUp = () => {
  const addMeetupHandler = enteredMeetupData => {
    console.log(enteredMeetupData)
  }
  return (
    <div>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </div>
  )
}

export default MeetUp
