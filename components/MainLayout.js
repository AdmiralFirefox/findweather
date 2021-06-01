import Meta from "./Meta";

function MainLayout({ children }) {
  return (
    <div>
      <Meta />
      {children}
    </div>
  );
}

export default MainLayout;
