interface SwitchProps {
  condition: unknown;
  children: [positive: React.ReactNode, negative: React.ReactNode];
}

const Switch = ({ condition, children: [positive, negative] }: SwitchProps) => {
  if (condition) return positive;
  return negative;
};

export default Switch;
