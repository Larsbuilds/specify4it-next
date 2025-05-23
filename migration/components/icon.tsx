import { cn } from '@/lib/utils'

interface IconProps extends React.HTMLAttributes<HTMLImageElement> {
  name: IconName
  size?: number
}

// Available feature icons from specify4it.com
export type FeatureIconName =
  | 'check'
  | 'animate'
  | 'deduce'
  | 'prove'

// Available UI icons from specify4it.com
export type UiIconName =
  | 'footerlogomob'

export type IconName = 
  | `feature/${FeatureIconName}`
  | `ui/${UiIconName}`

export const Icon = ({ name, size = 24, className, ...props }: IconProps) => (
  <img
    src={`/migration/assets/icons/${name}.svg`}
    alt={`${name.split('/')[1]} icon`}
    width={size}
    height={size}
    className={cn('inline-block', className)}
    {...props}
  />
)

// Feature icon components from specify4it.com
export const FeatureIcons = {
  Check: (props: Omit<IconProps, 'name'>) => (
    <Icon name="feature/check" {...props} />
  ),
  Animate: (props: Omit<IconProps, 'name'>) => (
    <Icon name="feature/animate" {...props} />
  ),
  Deduce: (props: Omit<IconProps, 'name'>) => (
    <Icon name="feature/deduce" {...props} />
  ),
  Prove: (props: Omit<IconProps, 'name'>) => (
    <Icon name="feature/prove" {...props} />
  ),
}

// UI icon components from specify4it.com
export const UIIcons = {
  FooterLogoMobile: (props: Omit<IconProps, 'name'>) => (
    <Icon name="ui/footerlogomob" {...props} />
  ),
}

// Usage examples:
/*
// Using the base Icon component:
<Icon name="feature/check" size={32} />

// Using the convenience components:
<FeatureIcons.Check size={32} />
<UIIcons.Menu className="text-primary" />
*/
