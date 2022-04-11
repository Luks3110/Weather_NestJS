// Formula used to convert Kelvin to Celsius
export const kelvinToCelsius = (temp: number) => {
  return parseFloat((temp - 273.15).toFixed(2));
};

// Capitalizes the first letter of each word
export const capitalizeFirstLetter = (str: string) => {
  // Transform the string to lowercase and split by blankspace and stores in a array
  const splitStr = str.toLowerCase().split(' ');
  // Iterate over the array and capitalize the first letter of each word
  for (let i = 0; i < splitStr.length; i++) {
    // Capitalize the first letter of each word
    splitStr[i] =
      splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
  }
  // Join the array back to a string
  return splitStr.join(' ');
};
