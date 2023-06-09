function MainLayout({ children }) {
  return (
    <div className="bg-slate-100">
      <div className="container pt-20">{children}</div>
    </div>
  );
}

export default MainLayout;
