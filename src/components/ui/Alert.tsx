import { HTMLAttributes, ReactNode } from 'react'
import { AlertCircle, CheckCircle2, AlertTriangle, Info, X } from 'lucide-react'
import { cn } from '@/lib/utils'

export interface AlertProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'success' | 'warning' | 'destructive' | 'info'
  title?: string
  description?: ReactNode
  onClose?: () => void
  closeable?: boolean
}

export function Alert({
  variant = 'default',
  title,
  description,
  onClose,
  closeable = false,
  className,
  ...props
}: AlertProps) {
  const variantClasses = {
    default: 'bg-muted text-muted-foreground border-border',
    success: 'bg-success/10 text-success border-success/20',
    warning: 'bg-warning/10 text-warning border-warning/20',
    destructive: 'bg-destructive/10 text-destructive border-destructive/20',
    info: 'bg-primary/10 text-primary border-primary/20',
  }

  const iconVariants = {
    default: AlertCircle,
    success: CheckCircle2,
    warning: AlertTriangle,
    destructive: AlertCircle,
    info: Info,
  }

  const Icon = iconVariants[variant]

  return (
    <div
      className={cn(
        'relative rounded-lg border p-4 flex gap-3',
        variantClasses[variant],
        className
      )}
      {...props}
    >
      <Icon className="h-5 w-5 flex-shrink-0 mt-0.5" />

      <div className="flex-1">
        {title && <h3 className="font-semibold mb-1">{title}</h3>}
        {description && <p className="text-sm">{description}</p>}
      </div>

      {closeable && onClose && (
        <button
          onClick={onClose}
          className="absolute right-3 top-3 text-muted-foreground hover:text-foreground transition-colors"
        >
          <X className="h-4 w-4" />
        </button>
      )}
    </div>
  )
}

export interface ToastProps {
  message: string
  type?: 'success' | 'error' | 'warning' | 'info'
  duration?: number
  onClose?: () => void
}

export function Toast({ message, type = 'info', onClose }: ToastProps) {
  const typeClasses = {
    success: 'bg-success text-success-foreground',
    error: 'bg-destructive text-destructive-foreground',
    warning: 'bg-warning text-warning-foreground',
    info: 'bg-primary text-primary-foreground',
  }

  return (
    <div
      className={cn(
        'fixed bottom-4 right-4 rounded-lg px-4 py-3 shadow-lg flex items-center gap-3',
        typeClasses[type]
      )}
    >
      <span className="text-sm font-medium">{message}</span>
      {onClose && (
        <button
          onClick={onClose}
          className="ml-2 hover:opacity-80 transition-opacity"
        >
          <X className="h-4 w-4" />
        </button>
      )}
    </div>
  )
}
