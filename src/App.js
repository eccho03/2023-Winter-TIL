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
  return (
    <div className="App">
      <DiaryEditor/>
      <DiaryList diaryList={dummyList} />
    </div>
  );
}

export default App;
