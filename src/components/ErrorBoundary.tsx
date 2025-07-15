'use client';

import { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen bg-deep-blue flex items-center justify-center p-4">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-golden-accent mb-4">
              Something went wrong
            </h1>
            <p className="text-text-white mb-6">
              We're sorry, but something unexpected happened. Please try
              refreshing the page.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="bg-golden-accent text-deep-blue px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-golden-accent focus:ring-offset-2 focus:ring-offset-deep-blue"
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
