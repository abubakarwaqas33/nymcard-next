// import { Entity } from './entity'


export class ButtonEntity {
  readonly title: string = ''
  readonly uri: string = ''
}

export class MediaEntity {
  readonly url: string = ''
}

export class CardEntity {
  readonly title: string = ''
  readonly description: string = ''
  readonly image: MediaEntity | undefined
}

export class SectionEntity  {
  readonly id: number | undefined
  readonly title: string = ''
  readonly description: string = ''
  readonly subtitle: string = ''
  readonly images: MediaEntity[] = []
  readonly video: MediaEntity | undefined
  readonly align: string = 'left'
  readonly cards: CardEntity[] = []
  readonly button:any = ""
}
