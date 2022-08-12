import { NextPage } from "next"
import { useFetch } from "../hooks/useFetch"
import Skeleton from "./Skeleton"
import DataItem from "./Data"

const DataList: NextPage = () => {

  const {isError, error, isLoading, data} = useFetch()

  if (isLoading){
    return(
      <Skeleton />
    )
  }
  if (isError){
    return <h2>{error.message}</h2>
  }
  
  return(
    <DataItem data={data} />
  )
}

export default DataList