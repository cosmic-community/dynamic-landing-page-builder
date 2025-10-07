interface ButtonProps {
  href: string
  variant: 'primary' | 'secondary'
  children: React.ReactNode
  className?: string
}

export default function Button({ href, variant, children, className = '' }: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center px-8 py-3 rounded-lg font-semibold transition-all'
  
  const variantStyles = {
    primary: 'bg-brand-primary text-white hover:opacity-90',
    secondary: 'bg-white text-gray-900 hover:bg-gray-100 border-2 border-white',
  }
  
  return (
    <a
      href={href}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      {children}
    </a>
  )
}