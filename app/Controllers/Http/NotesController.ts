import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Note from '../../Models/Note'

export default class NotesController {
  public async index({}: HttpContextContract) {
    return await Note.all()
  }

  public async create({}: HttpContextContract) {}

  public async store({ request, response }: HttpContextContract) {
    const name = request.input('name')

    const note = await Note.findBy('name', name)

    if (note) {
      response.header('Allow', 'GET')
      return response.status(405)
    }

    await Note.create({
      name,
      description: request.input('description'),
      source: request.input('source'),
    })

    return response.status(201)
  }

  public async show({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
