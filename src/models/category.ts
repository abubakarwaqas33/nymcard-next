//import { useResource } from '@rest-hooks/core'
//import { Entity } from './entity'
import { PageEntity } from './page'
export class CategoryEntity {
 // static urlRoot = `/api/categories`
  readonly title: string = ''
  readonly uri: string = ''
  readonly pages: PageEntity[] = []
}

// export function useMenuCategories(): CategoryEntity[] {
//   return useResource(CategoryEntity.listShape(), { type: 'Website' })
// }

// export function useDeveloperPortalCategories(): CategoryEntity {
//   return useResource(CategoryEntity.detailShape(), { id: 5 })
// }
