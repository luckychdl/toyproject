
import axios from 'axios';
import { useEffect, useState } from 'react';
import {
  MainWrapper,
  Title,
  CardUI,
  List,
  Wrapper,
  Item,
} from "./mainPage.styles"

const Main = () => {
  const [question, setQuestion ] = useState([])
  const [filter, setFilter] = useState([])
  const getData = async() => {
    const res = await axios.get("http://ec2-3-37-62-104.ap-northeast-2.compute.amazonaws.com/api/tag-group/")
    setQuestion(res.data)
    // setAnswer(question.tags)
  }
  
  useEffect(()=>{
    getData()
  },[])

const onChangeValue = (e) => {
  setFilter(filter.concat(e.target.value))
}
console.log(filter)
    return (
      <MainWrapper>
      <Title>프로그램</Title>
      <CardUI>
        {question.map((data) => {
          
          return (
          <>
            <List  key={data.id} title={data.name} >
              {data?.tags.map((list)=>
              <Wrapper> 
                <Item key={list.id} >{list.name}</Item>
                <input type="checkbox" value={list.id} onChange={onChangeValue}/>
              </Wrapper>
              )}
            </List>
          </>
          )
        })}
      </CardUI>
      </MainWrapper>
    );
};
export default Main