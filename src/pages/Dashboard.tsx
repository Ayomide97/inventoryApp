import Heading from "../components/Heading";
import PageLoading from "../components/PageLoading";
import { useGetPostsQuery } from "../store/api/endpoints/Posts";

const Dashboard = () => {
  const { data: posts, isFetching, error } = useGetPostsQuery();
  console.log("posts", posts);

  if (isFetching) {
    return <PageLoading />;
  }

  if (error) {
    // Try to handle different types of error objects
    let errorMessage = "An unknown error occurred";
    if (typeof error === "object" && error !== null) {
      if ("message" in error && typeof error.message === "string") {
        errorMessage = error.message;
      } else if ("status" in error && "data" in error) {
        // FetchBaseQueryError type
        errorMessage = `Status: ${error.status}`;
        if (typeof error.data === "string") {
          errorMessage += ` - ${error.data}`;
        }
      }
    }
    return <div>Error: {errorMessage}</div>;
  }

  return (
    <>
      <Heading type="h1">Dashboard</Heading>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts?.map((post) => (
          <div key={post.id}>
            <Heading type="h2">{post.title}</Heading>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Dashboard;
