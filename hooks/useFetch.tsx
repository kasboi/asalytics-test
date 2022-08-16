import request from "graphql-request"
import { useQuery } from "@tanstack/react-query"
import { Group } from "next/dist/shared/lib/router/utils/route-regex"

//query statement
const query = `{
  asalist {
    result {
      assetId
      available
      logo
      unitname1
    }
  }
}`
const url = 'https://analytics-api.herokuapp.com/analytics'

// function for fetching asalist data
const fetchData = async () => {
  const data = await request(url, query)
  const dataList = data.asalist.results
  return dataList
}

//custom hook to call react query
const useFetch = () => {
  return useQuery<Group[], Error>(['coins'], () => fetchData())
}

export { useFetch }
