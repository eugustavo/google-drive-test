import { FastifyReply, FastifyRequest } from 'fastify'

export async function watch(request: FastifyRequest, reply: FastifyReply) {
  console.log(request.body)

  return reply.status(200).send()
}
