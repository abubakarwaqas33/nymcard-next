import { FC } from 'react'
import Image from 'next/image'
import { Block } from '../../../components/blocks/Block'
import { AntButton } from '../../../components/form/Button'
import { Icon } from '../../../components/icon/Icon'
//import RightArrow from '../../../components/icon/images/RightArrow.svg'
import { ReactComponent as  RightArrow } from '../../../components/icon/images/RightArrow.svg'
import Text from '../../../components/typography'
import { SectionEntity } from '../../../models/section'

type HeroBlockProps = { data: SectionEntity }

const HeroBlock: FC<any> = ({ data }) => {
  return (
    <Block
      type={'hero'}
      subtitle={
        <Text.Category opacity={0.3} size={'md'} color={'primary'}>
          {data.subtitle}
        </Text.Category>
      }
      title={<Text.Title level={2}>{data.title}</Text.Title>}
      text={
        <Text.Paragraph size={'xl'}>
          <span dangerouslySetInnerHTML={{ __html: `${data.description}` }} />
        </Text.Paragraph>
      }
      button={
        <AntButton
          href={data.button?.url}
          icon={
            <Icon color={'secondary'} type={'default'} width={32} height={32} shape={'circle'} gap={14} padding={10}>
              <RightArrow  />
              {/* <img src={RightArrow} /> */}
              {/* <Image  src={RightArrow} width="10" height="10" color="#fff"/> */}
            </Icon>
          }
          type={'ghost'}
        >
          <Text.Paragraph font='primary' color={'secondary'} style={{ fontSize: '17px' }} weight={500}>
            {data.button?.title}
          </Text.Paragraph>
        </AntButton>
      }
    />
  )
}

export { HeroBlock }
