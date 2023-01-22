import React, { PropsWithChildren } from 'react'
import { useLocation } from 'react-router-dom'

export function ScrollToTop({ children }: PropsWithChildren) {
  const location = useLocation()

  React.useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return <React.Fragment>{children}</React.Fragment>
}
