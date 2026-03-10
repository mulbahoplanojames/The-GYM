const getFirstElement = <T>(arr: T[]) => {
  return arr[0];
};

const stringElements = ["james", "peter", "abdo"];
const numberElements = [1, 2, 3, 5, 67];

getFirstElement<string>(stringElements);
getFirstElement(numberElements);

// const convertToArray = (value) =>{

// }
