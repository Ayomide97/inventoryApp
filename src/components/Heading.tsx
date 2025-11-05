import React from "react";

const Heading = ({
  children,
  type = "h1",
}: {
  children: React.ReactNode;
  type?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}) => {
  return (
    <>
      {type === "h1" && <h1 className="text-2xl font-bold">{children}</h1>}
      {type === "h2" && <h2 className="text-xl font-bold">{children}</h2>}
      {type === "h3" && <h3 className="text-lg font-bold">{children}</h3>}
      {type === "h4" && <h4 className="text-base font-bold">{children}</h4>}
      {type === "h5" && <h5 className="text-sm font-bold">{children}</h5>}
      {type === "h6" && <h6 className="text-xs font-bold">{children}</h6>}
    </>
  );
};

export default Heading;
