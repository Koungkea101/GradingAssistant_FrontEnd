import { ReactNode } from 'react'

interface LayoutProps {
  children: ReactNode
}

export default function GradingPageLayout({ children }: LayoutProps) {
  return (
    <>
      {children}
    </>
  )
}
