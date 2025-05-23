import { Check, Activity, Lightbulb, Shield, Menu, ArrowRight, Mail } from 'lucide-react'
import { cn } from '@/lib/utils'

interface IconProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: number
}

export const icons = {
  // Feature Icons
  Check: ({ className, size = 24, ...props }: IconProps) => (
    <div className={cn('text-primary', className)} {...props}>
      <Check size={size} />
    </div>
  ),
  Animate: ({ className, size = 24, ...props }: IconProps) => (
    <div className={cn('text-primary', className)} {...props}>
      <Activity size={size} />
    </div>
  ),
  Deduce: ({ className, size = 24, ...props }: IconProps) => (
    <div className={cn('text-primary', className)} {...props}>
      <Lightbulb size={size} />
    </div>
  ),
  Prove: ({ className, size = 24, ...props }: IconProps) => (
    <div className={cn('text-primary', className)} {...props}>
      <Shield size={size} />
    </div>
  ),

  // UI Icons
  Menu: ({ className, size = 24, ...props }: IconProps) => (
    <div className={cn('text-primary-dark', className)} {...props}>
      <Menu size={size} />
    </div>
  ),
  Arrow: ({ className, size = 16, ...props }: IconProps) => (
    <div className={cn('text-primary', className)} {...props}>
      <ArrowRight size={size} />
    </div>
  ),
  Email: ({ className, size = 24, ...props }: IconProps) => (
    <div className={cn('text-primary', className)} {...props}>
      <Mail size={size} />
    </div>
  ),
}

export type IconName = keyof typeof icons
