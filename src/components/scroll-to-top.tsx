import type { PropsWithChildren } from 'react'
import { Fragment, useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'

export function ScrollToTop({ children }: PropsWithChildren) {
  const { pathname } = useLocation()

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return <Fragment>{children}</Fragment>
}
