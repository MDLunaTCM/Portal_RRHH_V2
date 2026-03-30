import { ReactNode } from 'react'
import { X } from 'lucide-react'
import { cn } from '@/lib/utils'

export interface DrawerProps {
  isOpen: boolean
  onClose: () => void
  title?: string
  children: ReactNode
  position?: 'left' | 'right'
  width?: 'sm' | 'md' | 'lg'
}

export function Drawer({
  isOpen,
  onClose,
  title,
  children,
  position = 'right',
  width = 'md',
}: DrawerProps) {
  if (!isOpen) return null

  const widthClasses = {
    sm: 'w-80',
    md: 'w-96',
    lg: 'w-[28rem]',
  }

  const positionClasses = {
    left: 'left-0',
    right: 'right-0',
  }

  return (
    <>
      <div
        className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      <div
        className={cn(
          'fixed top-0 z-50 h-full border-l bg-background shadow-lg transition-transform duration-300',
          widthClasses[width],
          positionClasses[position]
        )}
      >
        <div className="flex h-16 items-center justify-between border-b px-6">
          {title && <h2 className="text-lg font-semibold">{title}</h2>}
          <button
            onClick={onClose}
            className="rounded-lg p-1 text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="overflow-y-auto h-[calc(100%-64px)]">
          <div className="p-6">{children}</div>
        </div>
      </div>
    </>
  )
}
