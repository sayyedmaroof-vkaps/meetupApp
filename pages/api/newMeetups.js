import { MongoClient } from 'mongodb'

// /api/newMeetup
// POST /api/newMeetup

const handler = async (req, res) => {
  if (req.method === 'POST') {
    try {
      const data = req.body

      const client = await MongoClient.connect(
        'mongodb+srv://taskapp:0208@cluster0.lfxl7.mongodb.net/nextMeetupApp?retryWrites=true&w=majority'
      )
      const db = client.db()

      const meetupsCollection = db.collection('meetups')

      const result = await meetupsCollection.insertOne(data)

      console.log(result)

      client.close()

      res.status(201).json({ message: 'Meetup Inserted' })
    } catch (err) {
      res.json({ error: err.message })
    }
  }
}

export default handler
