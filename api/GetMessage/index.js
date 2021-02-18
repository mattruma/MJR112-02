module.exports = async function (context, req) {
  context.res = {
    body: {
      text: "Hello world! - from the API"
    }
  };
};