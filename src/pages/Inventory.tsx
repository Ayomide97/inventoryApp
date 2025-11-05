import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import Heading from "../components/Heading";
import PageLoading from "../components/PageLoading";
import { useGetObjectsQuery } from "../store/api/endpoints/Objects";

const Inventory = () => {
  const { data: objects, isFetching, error } = useGetObjectsQuery();
  console.log("objects", objects);
  if (isFetching) {
    return <PageLoading />;
  }
  if (error) {
    return <div>Error: {(error as FetchBaseQueryError).status as string}</div>;
  }
  if (!objects) {
    return <div>No objects found</div>;
  }
  return (
    <>
      <Heading type="h1">Inventory</Heading>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {objects?.map((object) => (
          <div key={object.id}>
            <Heading type="h3">{object.title}</Heading>
            <p>{object.price}</p>
            <p>{object.description}</p>
            <p>{object.category}</p>
            <img src={object.image} alt={object.title} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Inventory;
