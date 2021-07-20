import React, { FC } from 'react'
import { Block } from '../../components/blocks/Block'
import Text from '../typography'
import { useMediaQuery } from 'react-responsive'

const HeroBlock: FC = () => {
  const md = useMediaQuery({ minWidth: 768 })
  return (
    <Block
      subtitle={
        <Text.Category weight={700} size={'md'} opacity={0.3}>
          Contact Us
        </Text.Category>
      }
      title={
        <Text.Title font={'secondary'} level={1}>
          Get In Touch
        </Text.Title>
      }
      text={
        <Text.Paragraph maxWidth={md ? 400 : 224} size={'lg'}>
          Send us your details and we will get back to you on ways we can partner up to build something amazing!
        </Text.Paragraph>
      }
      style={{ marginBottom: md ? 0 : '65vw' }}
    />
  )
}

export { HeroBlock }
