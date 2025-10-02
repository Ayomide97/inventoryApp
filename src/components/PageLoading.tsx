// Styling
import Spinner from "./loaders/Spinner";

export default function PageLoading() {
  return (
    <div className="bg-background flex h-screen items-center justify-center">
      <Spinner />
    </div>
  );
}
