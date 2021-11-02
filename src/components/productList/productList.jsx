import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { GlobalContext } from "../../App"
import { getComma } from "../../commons/utils"
import {
  MainWrapper,
  List,
  Wrapper,
  Item,
} from "./productList.styles"

const ProductList = () => {
const {filter,setFilter} = useContext(GlobalContext)
const [list , setList] = useState([])

const getData = async(id) => {
  const res = await axios.get('http://ec2-3-37-62-104.ap-northeast-2.compute.amazonaws.com/api/product/',{
    tags:filter
  })
  setList(res.data)
  const res2 = await axios.get("http://ec2-3-37-62-104.ap-northeast-2.compute.amazonaws.com/api/place/",{
    tags:filter
  })
  const res3 = await axios.get("http://ec2-3-37-62-104.ap-northeast-2.compute.amazonaws.com/api/class/", {
    tags:filter
  })

}
useEffect(()=>{
  getData()
},[])

  return(
    <MainWrapper>
      {list.map((e)=>{
        return (
          
            <List key={e.id}>
              <Wrapper>
                <Item>지점: {e.b_place.name}</Item>
                <Item>프로그램: {e.name}</Item>
                <Item>금액 : {getComma(e.price)}원</Item>
                <Item>사용기간 : {e.use_days}일</Item>
              </Wrapper>
            </List>
          
        )
      })}
    </MainWrapper>
  )
}

export default ProductList