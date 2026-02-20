'use client'

import { useTheme } from 'next-themes'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import {
  HiCheckCircle,
  HiExclamationCircle,
  HiInformationCircle,
} from 'react-icons/hi'
import { HiExclamationTriangle } from 'react-icons/hi2'
import { Toaster as Sonner, type ToasterProps } from 'sonner'

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = 'system' } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps['theme']}
      className='toaster group'
      icons={{
        success: <HiCheckCircle className='size-4' />,
        info: <HiInformationCircle className='size-4' />,
        warning: <HiExclamationTriangle className='size-4' />,
        error: <HiExclamationCircle className='size-4' />,
        loading: <AiOutlineLoading3Quarters className='size-4 animate-spin' />,
      }}
      style={
        {
          '--normal-bg': 'var(--popover)',
          '--normal-text': 'var(--popover-foreground)',
          '--normal-border': 'var(--border)',
          '--border-radius': 'var(--radius)',
        } as React.CSSProperties
      }
      {...props}
    />
  )
}

export { Toaster }
