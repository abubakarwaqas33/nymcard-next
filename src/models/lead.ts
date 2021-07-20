//import { Entity } from './entity'
export class LeadEntity {
  static urlRoot = `/api/leads`

  readonly firstName: string = ''
  readonly lastName: string = ''
  readonly email: string = ''
  readonly phone: string = ''
  readonly companySize: string = ''
  readonly reason: string = ''
  readonly message: string = ''
  readonly token: string = ''
}
