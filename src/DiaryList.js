import DiaryItem from "./DiaryItem";

const DiaryList = ({onEdit , onRemove, diaryList }) => {
    return (
        <div className="DiaryList">
        <h2>일기 리스트</h2>
        <h4>{diaryList.length}개의 일기가 있습니다.</h4>
        <div>
            {diaryList.map((it) => ( // it을 사용하여 원소 하나하나 순회
            <DiaryItem key={it.id} {...it} onEdit={onEdit} onRemove={onRemove}/>
            // 고유한 id를 갖고 있을 경우 굳이 idx 사용하지 않기 -> 아이템 삭제, 추가로 순서 변경 시 문제가 생길 수 있음.
            ))}
        </div>
        </div>
    );
};

DiaryList.defaultProps = {
    diaryList: [],
};

export default DiaryList;