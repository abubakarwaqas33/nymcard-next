import { FC, ReactText } from 'react'
import { Card } from '../../../components/page/Card'
import { CardEntity } from '../../../models/section'

type EasyToBuildCardProps = { data: CardEntity; index: ReactText }

const EasyToBuildCard: FC<EasyToBuildCardProps> = ({ data, index }) => (
  <Card
    maxWidth={320}
    key={index}
    type='numeric'
    numericTitle={`0${1 + +index}`}
    title={data.title}
    description={data.description}
  />
)

export { EasyToBuildCard }
