import React, { ButtonHTMLAttributes, memo } from 'react'

const Button = memo(
  React.forwardRef<HTMLButtonElement, ButtonHTMLAttributes<HTMLButtonElement>>(
    ({ children, ...props }, ref) => {
      return (
        <button ref={ref} {...props}>
          {children}
        </button>
      )
    },
  ),
)

export { Button }
