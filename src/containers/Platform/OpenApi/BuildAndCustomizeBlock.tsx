import { FC } from 'react'
import { Text } from '../../../components'
import { Block } from '../../../components/blocks/Block'
import { SectionEntity } from '../../../models/section'

type BuildAndCustomizeBlockProps = { data: SectionEntity }

const BuildAndCustomizeBlock: FC<BuildAndCustomizeBlockProps> = ({ data }) => (
  <Block
    type={'primary'}
    title={<Text.Title level={3}>{data.title}</Text.Title>}
    text={
      <Text.Paragraph size={'lg'}>
        <span dangerouslySetInnerHTML={{ __html: `${data.description}` }} />
      </Text.Paragraph>
    }
  />
)

export { BuildAndCustomizeBlock }
