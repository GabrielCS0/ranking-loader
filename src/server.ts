import express from 'express'

const app = express()

app.get('/', (_, res) => {
  return res.json({ message: 'Hello, World!' })
})

app.listen(process.env.PORT || 5000, () =>
  console.log(`Server is running on port ${process.env.PORT || 5000}`)
)
