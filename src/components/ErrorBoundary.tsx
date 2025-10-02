// import { RotateCw } from "lucide-react";
// import ErrorIllustration from "media/svgs/something-went-wrong.svg?react";
import { Component, ErrorInfo, ReactNode } from "react";
// import { Button } from "ui";

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error("Error caught by error boundary:", error, errorInfo);
    this.props.onError?.(error, errorInfo);
  }

  private handleRefresh = (): void => {
    window.location.reload();
  };

  private handleRetry = (): void => {
    this.setState({ hasError: false, error: undefined });
  };

  render(): ReactNode {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <section className="flex h-full w-full flex-col items-center justify-center gap-2.5 font-medium text-sm text-gray-800 bg-background">
          <div className="w-full max-w-[500px] max-h-[500px]">
            {/* <ErrorIllustration className="w-full h-full" /> */}
          </div>

          <div className="flex flex-col items-center justify-center">
            <span className="text-lg font-bold text-textcolor mb-2">
              Oops something went wrong!
            </span>
            <span className="text-base text-gray-600 dark:text-textcolor mb-5 mt-2 text-center max-w-md">
              Try to refresh this page or contact us if the problem persists.
            </span>
            {/* 
            <div className="flex gap-3">
              <Button
                size="sm"
                onClick={this.handleRetry}
                variant="outline"
                className="h-9"
              >
                Try Again
              </Button>
              <utton
                size="sm"
                onClick={this.handleRefresh}
                leftIcon={<RotateCw size={18} />}
                className="h-9 bg-[#3ed696] hover:bg-[#33bf84] text-white border-none"
              >
                Refresh
              </utton>
            </div> */}
          </div>
        </section>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
