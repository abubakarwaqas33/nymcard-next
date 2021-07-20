import 'antd/lib/drawer/style/index.less'
import React, { FC, useContext, useEffect, useState } from 'react'
import { Container, Visible } from 'react-grid-system'
import { useMediaQuery } from 'react-responsive'
//import { Link, useLocation } from 'react-router-dom';
import { useRouter } from 'next/router'
import Link from 'next/link'
//import { useMenuCategories } from '../../models/category'
import { CategoryEntity } from '../../../models/category'
import { Logo } from '../logo/Logo'
import { CategoryMenu, BurgerButton, Overlay } from '../../menu'
import { UserMenu } from '../../menu/UserMenu'
import { Menu } from '../Footer/Menu'
import './style.less';
//import { ToggleModalContext } from './Website'
export const ToggleModalContext = React.createContext({
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onClick: (): void => {
    },
  })


const Header: FC<{ menu: CategoryEntity[] }> = ({ menu }) => {
  const { pathname } = useRouter()
  const { onClick } = useContext(ToggleModalContext)
  const isMobileDevice = useMediaQuery({ maxWidth: 768 })
  const [hidden, setHidden] = useState(true)
  const toggle = (hidden: boolean) => {
    setHidden(hidden)
    onClick()
  }
  useEffect(() => {
    !isMobileDevice && !hidden && setHidden(true)
  }, [isMobileDevice, hidden])


  // ========= fixed header =========

  if (!pathname.includes('/docs/api') && (typeof window === 'object')) {
    const body = document.body
    const nav = document.querySelector('.fixed-header')
    const scrollBlock = document.querySelector('.scroll-block')
    const scrollUp = 'scroll-up'
    const scrollDown = 'scroll-down'
    let lastScroll = 0

    window.addEventListener('scroll', () => {
      const currentScroll = window.pageYOffset

      if (currentScroll <= 116) {
        nav?.classList.remove(scrollUp)
        scrollBlock?.classList.remove('header-block')
        return
      }
      if (currentScroll > lastScroll && !body.classList.contains(scrollDown)) {
        // down
        scrollBlock?.classList.add('header-block')
        nav?.classList.remove(scrollUp)
        nav?.classList.add(scrollDown)
      } else if (currentScroll < lastScroll && nav?.classList.contains(scrollDown)) {
        // up
        nav?.classList.remove(scrollDown)
        nav?.classList.add(scrollUp)
      }
      lastScroll = currentScroll
    })
  }
  //=================================

  return (
    <>
      <Container
        hidden={pathname === '/docs/api'}
        style={{ padding: 0 }}
        fluid
        className={`${pathname.endsWith('why-nymcard') ? 'inverse fixed-header' : 'fixed-header'} ${
          pathname.includes('/docs') && !isMobileDevice ? 'scroll-up' : ''
        }`}
      >
        <Container>
          <header className={'header'}>
            <Visible key={0} xs sm md lg xl xxl>
              <Link href={'/'} >
                <a className={pathname.endsWith('why-nymcard') ? 'logo-inverse' : undefined}>
                   <Logo type={'text'} />
                </a>
              </Link>
            </Visible>
            <Visible key={1} lg xl xxl>
              <CategoryMenu data={menu} />
              <UserMenu />
            </Visible>
            <Visible key={2} xs sm md>
              <BurgerButton opened={hidden} onClick={() => {toggle(!hidden);document.head.parentElement?.classList.toggle('html-scroll')}} />
            </Visible>
          </header>
          <Visible xs sm md>
           <Overlay hidden={hidden} onClick={() => toggle(true)}>
             <Menu type='header' data={menu} />
              <UserMenu />
            </Overlay>
          </Visible>
        </Container>
      </Container>
      <div className='scroll-block' />
    </>
  )
}

export { Header }
