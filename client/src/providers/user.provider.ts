import HttpRequest from './http.request'

export interface IUserProvider {
  register(name: string, lastName: string, email: string, password: string): Promise<any>
  login(email: string, password: string): Promise<string>
}

class UserProvider extends HttpRequest implements IUserProvider {
  private urlPrefix = '/user'

  public async register (name: string, lastName: string, email: string, password: string): Promise<any> {
    const result = await this.post(`${this.urlPrefix}`, {
      name,
      lastName,
      email,
      password
    })
    return result
  }

  public async login (email: string, password: string): Promise<string> {
    const result = await this.post(`${this.urlPrefix}/login`, {
      email,
      password
    })
    localStorage.setItem('auth_jwt', result.data)
    return result.data
  }
}

export default UserProvider
