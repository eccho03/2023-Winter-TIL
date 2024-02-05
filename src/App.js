import { useRef, useState } from 'react';
import './App.css';
import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList';

const dummyList = [
  {
    id: 1,
    author: "조은채",
    content: "하이 1",
    emotion: 5,
    created_date: new Date().getTime() // 현재 시간을 기준으로 일기가 생성됨
  },
  {
    id: 2,
    author: "화석os",
    content: "하이 2",
    emotion: 2,
    created_date: new Date().getTime() // 현재 시간을 기준으로 일기가 생성됨
  },
  {
    id: 3,
    author: "정희진",
    content: "하이 3",
    emotion: 3,
    created_date: new Date().getTime() // 현재 시간을 기준으로 일기가 생성됨
  },
  {
    id: 4,
    author: "강하현",
    content: "하이 4",
    emotion: 4,
    created_date: new Date().getTime() // 현재 시간을 기준으로 일기가 생성됨
  },
]

function App() {

  const [data, setData] = useState([]);

  const dataId = useRef(0)

  const onCreate = (author, content, emotion) => {
    const created_date = new Date().getTime();
    const newItem = {
      author,
      content, 
      emotion,
      created_date,
      id : dataId.current,
    };
    dataId.current += 1;
    setData([newItem, ...data]) // 일기를 추가하면 맨앞에 나오게 만들 것이기 때문에 newItem을 제일 앞으로
  };

  const onDelete = (targetId) => {
    console.log(`${targetId}가 삭제되었습니다`);
    const newDiaryList = data.filter((it) => it.id !== targetId);
    setData(newDiaryList);
  }

  return (
    <div className="App">
      <DiaryEditor onCreate={onCreate} />
      <DiaryList onDelete={onDelete} diaryList={data} />
    </div>
  );
}

export default App;
