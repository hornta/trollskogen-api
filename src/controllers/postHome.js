export default function makePostHome({ addHome }) {
  return async function(httpRequest) {
    if (httpRequest.headers["API-key"] !== process.env.API_KEY) {
      return { statusCode: 401 };
    }
    try {
      const posted = await addHome(httpRequest.body);
      return {
        body: { posted },
        headers: {
          "Content-Type": "application/json"
        },
        statusCode: 201
      };
    } catch (e) {
      return {
        body: {
          error: e.message
        },
        headers: {
          "Content-Type": "application/json"
        },
        statusCode: 400
      };
    }
  };
}
