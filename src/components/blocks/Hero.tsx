import { FC } from 'react'
import Text from '../../components/typography'
import { AntButton } from '../form/Button'
import { Icon } from '../icon/Icon'
import { ReactComponent as RightArrow } from '../icon/images/RightArrow.svg'
import { Block, BlockData } from './Block'

const Hero: FC<any> = ({ data }) => {

  return (
      <Block
        type={'hero'}
        subtitle={
          <Text.Category opacity={0.3} size={'md'} color={'primary'}>
            {data?.subtitle}
          </Text.Category>
        }
        title={<Text.Title level={1}>{data?.title}</Text.Title>}
        text={
          <Text.Paragraph size={'xl'}>
            <span dangerouslySetInnerHTML={{ __html: `${data?.description}` }} />
          </Text.Paragraph>
        }
        button={
          data?.button && (
            <AntButton
              href={data?.button.url}
              icon={
                <Icon color={'secondary'} type={'default'} width={32} height={32} shape={'circle'} gap={14} padding={10}>
                  {/* <Image src={RightArrow} alt="Picture of the author"  width={32} height={32}/> */}
                  <RightArrow color={'#fff'}/>
                </Icon>
              }
              type={'ghost'}
            >
              <Text.Paragraph font='primary' color={'secondary'} weight={500}>
                {data?.button.title}
              </Text.Paragraph>
            </AntButton>
          )
        }
      />
  )
}

export { Hero }
