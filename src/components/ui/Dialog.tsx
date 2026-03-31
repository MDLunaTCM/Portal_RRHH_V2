import { ReactNode } from 'react'
import { X } from 'lucide-react'
import { Button } from './Button'

export interface DialogProps {
  isOpen: boolean
  onClose: () => void
  title: string
  description?: ReactNode
  children?: ReactNode
  onConfirm?: () => void
  confirmText?: string
  cancelText?: string
  isDangerous?: boolean
  showCloseButton?: boolean
}

export function Dialog({
  isOpen,
  onClose,
  title,
  description,
  children,
  onConfirm,
  confirmText = 'Confirm',
  cancelText = 'Cancel',
  isDangerous = false,
  showCloseButton = true,
}: DialogProps) {
  if (!isOpen) return null

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm"
      onClick={handleBackdropClick}
    >
      <div className="relative w-full max-w-md rounded-2xl border bg-background shadow-lg">
        {showCloseButton && (
          <button
            onClick={onClose}
            className="absolute right-4 top-4 rounded-lg p-1 text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        )}

        <div className="border-b px-6 py-4">
          <h2 className="text-lg font-semibold">{title}</h2>
          {description && <p className="text-sm text-muted-foreground mt-1">{description}</p>}
        </div>

        {children && <div className="px-6 py-4">{children}</div>}

        <div className="flex gap-3 border-t px-6 py-4">
          <Button variant="outline" onClick={onClose} className="flex-1">
            {cancelText}
          </Button>
          {onConfirm && (
            <Button
              onClick={onConfirm}
              variant={isDangerous ? 'destructive' : 'primary'}
              className="flex-1"
            >
              {confirmText}
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
