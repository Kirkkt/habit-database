import querystring from "querystring"

const run = async(processor, params, callback) => {
  try {
    await processor(params, callback)
  } catch (error) {
    callback({
      success: false,
      error: {
        message: "" + error.message,
      },
    })
  }
}

export default (processor, endPoint, requiredKeys) => (request, response, next) => {
  const callback = result => response.status((result.error && result.error.statusCode) || 200).send(result)
  response.setHeader("access-control-allow-origin", "*")
  if (request.path !== endPoint) {
    next()
    return
  }
  request.setEncoding("utf-8")
  let postData = ""
  request.addListener("data", postDataChunk => postData += postDataChunk)
  request.addListener("end", () => {
    const params = querystring.parse(postData)
    for (const i in requiredKeys) {
      if (!(requiredKeys[i] in params)) {
        callback({
          error: {
            message: missingKeys.toString() + " shall not be blank",
          },
          success: false,
        })
      }
    }
    run(processor, params, callback)
  })
}
