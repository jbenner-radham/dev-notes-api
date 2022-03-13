import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from '../../Models/User'

export default class UsersController {
  public async index({}: HttpContextContract) {
    return await User.all()
  }

  public async create({}: HttpContextContract) {}

  public async store({ request, response }: HttpContextContract) {
    const email = request.input('email')
    const user = await User.findBy('email', email)

    if (user) {
      response.header('Allow', 'GET')
      return response.status(405)
    }

    await User.create({
      email,
      password: request.input('password'),
    })

    return response.status(201)
  }

  public async show({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
