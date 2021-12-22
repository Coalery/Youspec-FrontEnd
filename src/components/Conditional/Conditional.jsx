function Conditional({ condition, children }) {
  if (condition) return children[1];
  else return children[0];
}

export default Conditional;
