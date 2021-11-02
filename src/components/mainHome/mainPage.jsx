
import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../../App';
import {
  MainWrapper,
  Title,
  CardUI,
  List,
  Wrapper,
  Item,
  Answer,
  SubmitBtn
} from "./mainPage.styles"

const Main = ({ history }) => {
  const {filter, setFilter, check, setCheck} = useContext(GlobalContext)
  const [question, setQuestion ] = useState([])

  const getData = async() => {
    const res = await axios.get("http://ec2-3-37-62-104.ap-northeast-2.compute.amazonaws.com/api/tag-group/")
    setQuestion(res.data)
  }
  
  useEffect(()=>{
    getData()
  },[])
const onClickMove = () => {
  history.push("/product")
}
const onChangeValue = (e) => {
  setCheck(check.concat(e.target.value))
}
useEffect(()=>{
  setFilter(Array.from(new Set(check)).toString())
},[check])

    return (
      <MainWrapper>
      <Title>프로그램</Title>
      <Answer>답변을 선택해주세요.</Answer>
      <CardUI>
        {question.map((data) => {
          return (
          <>
            <List key={data.id} title={data.name} >
              {data?.tags.map((list)=> {
                return (
              <Wrapper> 
                <Item key={list.id} >{list.name}</Item>
                <input type="checkbox" value={list.id} onChange={onChangeValue}/>
              </Wrapper>
                )}
              )}
            </List>
          </>
          )
        })}
        
      </CardUI>
      <SubmitBtn onClick={onClickMove}>확인</SubmitBtn>
      </MainWrapper>
    );
};
export default Main