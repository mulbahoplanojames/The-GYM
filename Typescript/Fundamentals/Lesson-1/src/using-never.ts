// Inferred
const error = () => {
  throw new Error("Error using the Never Type");
};

// Annotated
const fail = (): never => {
  throw new Error();
};
