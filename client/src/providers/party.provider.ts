import HttpRequest from './http.request'

export interface IPartyProvider {
  getParties(page: number, perPage: number): Promise<any>
  create(name: string, size: number, location: string, arriveDate: string): Promise<any>
  join(partyId: number): Promise<any>
  unlink(partyId: number): Promise<any>
}

class PartyProvider extends HttpRequest implements IPartyProvider {
  private urlPrefix = '/party'

  public async getParties (page: number, perPage: number): Promise<any> {
    const result = await this.fetch(`${this.urlPrefix}`, { page, perPage })
    return result
  }

  public async create (name: string, size: number, location: string, arriveDate: string): Promise<any> {
    const result = await this.post(`${this.urlPrefix}`, {
      name,
      size,
      location,
      arriveDate
    })
    return result
  }

  public async join (partyId: number): Promise<any> {
    const result = await this.post(`${this.urlPrefix}/join/${partyId}`, {})
    return result.data
  }

  public async unlink (partyId: number): Promise<any> {
    const result = await this.post(`${this.urlPrefix}/unlink/${partyId}`, {})
    return result.data
  }
}

export default PartyProvider
