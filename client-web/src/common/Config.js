import queryString from "query-string"

export const MOCK_API_LATENCY = 300

const shouldEnableFeature = (featureName, defaultValue) => () => {
  const params = queryString.parse(window.location.search)
  if (!params) {
    return defaultValue
  }
  return params[featureName] === "true"
}

export const shouldEnableQuickDelete = shouldEnableFeature("quickdelete", true)
