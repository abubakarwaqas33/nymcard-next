import { FC } from 'react'
import { Card } from '../../../components/page/Card'
import { CardEntity } from '../../../models/section'

type BenefitCardProps = { data: CardEntity; index: number }

const BenefitCard: FC<BenefitCardProps> = ({ data, index }) => (
  <Card key={index} type='numeric' numericTitle={`0${index + 1}`} title={data.title} description={data.description} />
)

export { BenefitCard }
