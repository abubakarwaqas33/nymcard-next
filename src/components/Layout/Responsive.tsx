import React, { FC } from 'react'
import { ScreenClassProvider, setConfiguration } from 'react-grid-system'

const ToggleModalContext = React.createContext({
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onClick: (): void => {
  },
})


const Responsive: FC = ({ children }) => {
  setConfiguration({
    gutterWidth: 32,
    gridColumns: 24,
    breakpoints: [480, 576, 768, 992, 1200],
    containerWidths: [420, 540, 740, 960, 1264],
  })

  return (
    <ScreenClassProvider>
      <ToggleModalContext.Provider
        value={{
          onClick: () => {
            document.head.parentElement?.classList.toggle('html-scroll')
            document.body.classList.toggle('modal-opened')
          },
        }}
      >
        {children}
      </ToggleModalContext.Provider>
    </ScreenClassProvider>
  )
}

export { Responsive }
