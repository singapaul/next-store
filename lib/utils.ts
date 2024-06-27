export const formatToDecimalPlace = (
    value: number,
    numberDecimals: number
  ): string => {
    // Check if numberDecimals is valid
    if (numberDecimals < 0 || numberDecimals > 20) {
      throw new Error(
        "Invalid number of decimal places. Please provide a number between 0 and 20."
      );
    }
  
    // Use Number.toFixed to format the number to the specified decimal places
    const formattedValue = value.toFixed(numberDecimals);
  
      return formattedValue;
  };
  