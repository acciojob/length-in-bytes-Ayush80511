
const byteSize = (str) => {
  return new TextEncoder().encode(str).length;
};


const str = prompt("Enter some string.");
alert(byteSize(str));

