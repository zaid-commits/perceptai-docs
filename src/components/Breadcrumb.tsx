import { Link, useParams } from "react-router-dom";

const Breadcrumbs = () => {
  const { docId } = useParams<{ docId: string }>();
  const crumbs = docId?.split("/");

  return (
    <nav className="breadcrumbs">
      <Link to="/">Home</Link> {">"}
      {crumbs?.map((crumb, index) => (
        <span key={index}>
          {crumb} {index < crumbs.length - 1 && ">"}
        </span>
      ))}
    </nav>
  );
};
