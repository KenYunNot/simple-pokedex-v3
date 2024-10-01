import React from 'react'
import { cn } from '@/lib/cn'

const Badge = ({
  ...props
}: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => {
  return (
    <div className={cn(`w-fit px-2 py-1 rounded-full border border-black`, props.className)}>
      {props.children}
    </div>
  )
}

export default Badge