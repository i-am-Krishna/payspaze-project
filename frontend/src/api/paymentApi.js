// Function to mock an API response based on the provided status code
const mockApiResponse = (status) => {
    switch (status) {
      case 200:
        return Promise.resolve({ status, data: { message: 'Payment successful' } }); // Simulate successful payment
      case 400:
        return Promise.reject({ response: { status, data: { message: 'Bad Request' } } }); // Simulate client-side error
      case 401:
        return Promise.reject({ response: { status, data: { message: 'Unauthorized' } } }); // Simulate unauthorized error
      case 500:
        return Promise.reject({ response: { status, data: { message: 'Server Error' } } }); // Simulate server-side error
      default:
        return Promise.reject({ response: { status: 500, data: { message: 'Server Error' } } }); // Default to server-side error
    }
  };
  
  // Function to simulate sending a payment request
  export const sendPayment = async (paymentData) => {
    // Function to get a random element from an array
    function getRandomElement(arr) {
      const randomIndex = Math.floor(Math.random() * arr.length);
      return arr[randomIndex];
    }
    
    // Example usage: Array of possible status codes
    const values = [200, 400, 401, 500];
    const randomValue = getRandomElement(values); // Get a random status code
    
    // Mocking an API response based on the random status code
    const response = await mockApiResponse(randomValue);
    return response;
  };
  