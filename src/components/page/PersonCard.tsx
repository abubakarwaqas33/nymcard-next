import { FC, ReactNode } from 'react'
import { Row } from 'react-grid-system'
import './PersonCard.less'

type PersonCardProps = {
  iconUrl: string
  title: ReactNode
  position: ReactNode
}

const PersonCard: FC<Partial<PersonCardProps>> = ({ iconUrl, title, position }) => (
  <Row className='card-person'>
    <div className='card-person-picture'>
      <img src={iconUrl} alt='person' className='card-person-image' />
    </div>
    <div className='card-person-info'>
      <div className='card-person-name-wrapper'>{title}</div>
      <div className='card-person-position-wrapper'>{position}</div>
    </div>
  </Row>
)

export { PersonCard }
