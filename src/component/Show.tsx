const Show = ({
  active,
  children,
}: {
  active: unknown;
  children: React.ReactNode;
}) => {
  if (!active) return null;
  return children;
};

export default Show;
