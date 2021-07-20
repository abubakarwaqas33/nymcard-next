// import { useResource } from '@rest-hooks/core'
// import { NestedEntity } from 'rest-hooks'
// import { string } from 'yup/lib/locale'
//import { Entity } from './entity'
import { CategoryEntity } from './category'
import { SectionEntity } from './section'
interface ISeo {
  keywords: string;
  metaDescription: string;
  metaTitle: string;
  preventIndexing: string;
  sharedImage: {
    id: number,
    media: any
  }
}

export class ButtonEntity {
  readonly id: number = 0
  readonly title: string = ''
  readonly url: string = ''

  pk(): string | undefined {
    return this.id.toString()
  }
}

export class PageEntity {
  static urlRoot = `/api/pages`
  readonly id: number | undefined
  readonly title: string = ''
  readonly uri: string = ''
  readonly createdAt: Date | undefined
  readonly publishedAt: Date | undefined
  readonly updatedAt: Date | undefined
  readonly subTitle: string = ''
  readonly category: CategoryEntity | undefined
  readonly description: string = ''
  readonly sections: SectionEntity[] = []
  readonly seo: ISeo | undefined;
  

  // get hero(): SectionEntity {
  //   return this.sections.length > 0 ? this.sections[0] : new SectionEntity()
  // }

  // get first(): SectionEntity | null {
  //   return this.sections.length > 1 ? this.sections[1] : null
  // }
}

// export function usePressRoomPages(): PageEntity[] {
//   return useResource(PageEntity.listShape(), { category: 6 })
// }
