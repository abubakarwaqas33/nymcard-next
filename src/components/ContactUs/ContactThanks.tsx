import { Dispatch, FC, SetStateAction } from 'react'
import Text from '../typography'
import './ContactThanks.less'

type ThanksProps = {
  thanks: boolean
  setThanks: Dispatch<SetStateAction<boolean>>
  isMobile?: boolean
  footer?: boolean
  onClose?: () => void
}

const ContactThanks: FC<ThanksProps> = ({ thanks, setThanks, isMobile, footer, onClose }) => (
  <div
    className={
      (footer ? 'thanks-footer thanks-wrapper mobile-thanks' : '') ||
      (isMobile && !footer ? 'thanks-wrapper mobile-thanks' : 'thanks-wrapper')
    }
    hidden={thanks}
  >
    <div style={{ display: 'flex', marginLeft: '14px' }}>
      <span className={'thanks-icon'} />
      <Text.Paragraph className={'thanks-paragraph'}>
        {footer ? 'Thanks for subscribing!' : ' Thanks for getting in touch, we will get back to you soon'}
      </Text.Paragraph>
    </div>
    <button
      onClick={() => {
        setThanks(!thanks)
        onClose && onClose()
      }}
      className={'thanks-btn'}
    />
  </div>
)

export { ContactThanks }
