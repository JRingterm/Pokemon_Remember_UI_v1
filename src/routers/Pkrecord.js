import divstyles from "../css/Div.module.css";
import Footer from "../components/Footer";
import styles from "../css/styles.css";
import inputstyles from "../css/Input.module.css";
import btnstyles from "../css/Button.module.css";
import { useState, useEffect } from "react";
import Pokemons from "../components/Pokemons";
import { Link } from "react-router-dom";

//이 프로젝트에서 Home에 해당하는 파일
function Pkrecord() {
    const [records, setRecords] = useState([]); //api에서 받아온 데이터를 저장하는 state
    const [keyword, setKeyword] = useState(""); //검색할때 사용되는 state
    //api에서 데이터 받아오기==========================================================================
    const getRecord = async() => { 
        const json = await(
            await fetch("http://34.64.224.17:8000/pokemons/")  //gcp로 서버를 열어서 주소 변경
        ).json();
        setRecords(json);
    };
    useEffect(() => { //api는 한번만 불러오도록
        getRecord();
    },[]);
    //console.log(records);
 
    //keyword state가 변경될 수 있도록 이벤트 설정.
    const onChange = (event) => setKeyword(event.target.value);
    //keyword state가 비어있지 않고, 1글자 이상일 때만 검색하라
    useEffect(() => {
        if (keyword !== "" && keyword.length >= 1) {
            console.log("Search for", keyword);
        }
    },[keyword])

    //이벤트를 명시적으로 처리하지 않은경우, 디폴트동작을 실행하지 않도록.
    const onSubmit = (event) => {
        event.preventDefault(); 
        if(keyword === "") {
            return;
        }
    }
    return(
        <>
        <div className={divstyles.maindiv}>
            <h1>실전개체 기록소</h1>
            <div className={divstyles.menusdiv}>
                <form onSubmit={onSubmit}>
                    <input value={keyword}
                        onChange={onChange}
                        type="text"
                        placeholder="포켓몬 이름으로 검색하기"
                        className={inputstyles.searchinput}
                     />
                    <Link to={`/search/${keyword}`}><button className={btnstyles.searchbtn}>검색</button></Link>
                    <Link to={"/add"}><button className={btnstyles.postlinkbtn}>등록하기</button></Link> {/*등록하기 버튼을 같은 form에 두는게 맞나..? 등록하기는 작동되긴 함.*/}
                </form>
            </div>
            <div className={divstyles.contentsdiv}>
                {records.map((record) =>
                    <Pokemons //api에서 가져온 값을 props로 Pokemons 컴포넌트에 넘김
                        key={record.id}
                        id={record.id}
                        name={record.name}
                        ability={record.ability}
                        teratype={record.teratype}
                        stats={record.stats}
                        item={record.item}
                        description={record.description}
                    />
                )}
            </div>
        </div>
        <Footer />
        </>
    );
}

export default Pkrecord;