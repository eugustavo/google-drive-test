import { FastifyInstance } from 'fastify'
import { watch } from '../controllers/google-drive/watch'

export async function appRoutes(app: FastifyInstance) {
  app.post('/watch/google-drive', watch)
}
