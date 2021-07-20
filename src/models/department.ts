//import { NestedEntity } from 'rest-hooks'
//import { Entity } from './entity'


// export class PositionEntity extends NestedEntity {
//   readonly id: number = 0
//   readonly title: string = ''
//   readonly url: string = ''

//   pk(): string | undefined {
//     return `${this.id}`
//   }
// }

export class DepartmentEntity {
  static urlRoot = `/api/departments`
  readonly title: string = ''
 // readonly openPositions: PositionEntity[] = []
}
