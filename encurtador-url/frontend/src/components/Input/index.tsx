import React, { InputHTMLAttributes, memo } from 'react'

const Input = memo(
  React.forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(
    ({ ...props }, ref) => {
      return (
        <input ref={ref} {...props} />
      )
    },
  ),
)

export { Input }
