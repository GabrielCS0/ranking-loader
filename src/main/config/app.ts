import { setupRoutes } from '@main/config/routes'
import { setupApolloServer } from '@main/config/apolloServer'

import express from 'express'

const app = express()
setupApolloServer(app)
setupRoutes(app)

export { app }
