import { FC } from 'react'
//mport { useLocation } from 'react-router-dom'
import { useRouter } from 'next/router'
import './BurgerButton.less'

type BurgerButtonProps = {
  onClick: () => void
  opened?: boolean
}



const BurgerButton: FC<Partial<BurgerButtonProps>> = ({ onClick = () => {}, opened }) => {

  const { pathname } = useRouter()
  return (
    <div
     onClick = {onClick}
      className={
        pathname.endsWith('why-nymcard')
          ? opened
            ? 'burger-button burger-white'
            : 'burger-button-close close-white'
          : opened
          ? 'burger-button'
          : 'burger-button-close '
      }
      role={'button'}
    >
      <span className={'burger-line'} />
      <span className={'burger-line'} />
    </div>
  )
}

export { BurgerButton }
