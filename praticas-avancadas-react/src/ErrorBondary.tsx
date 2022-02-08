import React, { Component, ErrorInfo, ReactNode } from 'react'

interface State {
  hasError: boolean
}

interface Props {
  children: ReactNode
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  }

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true }
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Errou:', error, errorInfo)
  }

  public render() {
    if (this.state.hasError) {
      return <h1>Errou!!!!</h1>
    }

    return this.props.children
  }
}

export { ErrorBoundary }
