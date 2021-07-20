import { FC, ReactElement } from 'react'
import { Card } from '../../../components/page/Card'
import { CardEntity } from '../../../models/section'

type MainDirectionCardProps = { data: CardEntity; className?: string; icon?: any }

const MainDirectionCard: FC<MainDirectionCardProps> = ({ data, className = '', icon = undefined }) => (
  <Card className={className} size='small' type='dark' icon={icon} title={data.title} description={data.description} />
)

export { MainDirectionCard }
