import divstyles from "../css/Div.module.css";
import Footer from "../components/Footer";
import styles from "../css/styles.css";
import inputstyles from "../css/Input.module.css";
import btnstyles from "../css/Button.module.css";
import axios from "axios";
import { useState, useEffect } from "react";

function Pkrecord() {
    const [records, setRecord] = useState([]); //api에서 받아온 데이터를 저장하는 state
    const [keyword, setKeyword] = useState(""); //검색할때 사용되는 state

    const getRecord = async() => { //api에서 데이터 받아오기
        const json = await(
            await fetch("http://127.0.0.1:8000/pokemons/")
        ).json();
        setRecord(json);
    };
    useEffect(() => { //api는 한번만 불러오도록
        getRecord();
    },[]);
    console.log(records);

    const onChange = (event) => setKeyword(event.target.value); //keyword state가 변경될 수 있도록.
    const onSubmit = (event) => {
        event.preventDefault(); //이벤트를 명시적으로 처리하지 않은경우, 디폴트동작을 실행하지 않도록.
        if(keyword === "") {
            return;
        }
    }
//검색창에 이름 입력하고, 검색버튼 누르면 그 이름에 해당하는 api만 찾아오고싶은데..===========
    const getSearchRecord = async() => { 
        const json = await(
            await fetch(`http://127.0.0.1:8000/pokemons?name=${keyword}/`)
        ).json();
        setRecord(json);
    };
    useEffect(() => {
        getSearchRecord();
    },[keyword])
    const onSearchClick = () => {
        getSearchRecord();
    }
//=======================================================================================
//등록하기 버튼 누르면, 입력받고, api에 post 하도록===========================================================================//전부 입력해야지만 post됨.
    const onPostClick = () => {
        var inputname = prompt("*이름: ", "");
        var inputnature = prompt("*성격: ");
        var inputability = prompt("*특성: ");
        var inputteratype = prompt("*테라스탈 타입: ");
        var inputstats = prompt("*노력치: ");
        var inputskills = prompt("*기술배치: ");
        var inputitem = prompt("*도구: ");
        var inputdescription = prompt("조정의미: ", []);
        if (inputname && inputnature && inputability && inputteratype && inputstats && inputskills && inputitem){  
            //api에 post하도록 axios를 설정.
            axios({method:"POST",   
                url: 'http://127.0.0.1:8000/pokemons/',
                data: {
                    name: inputname,
                    nature: inputnature,
                    ability: inputability,
                    teratype: inputteratype,
                    stats: inputstats,
                    skills: inputskills,
                    item: inputitem,
                    description: inputdescription,
                }
            })
            alert("성공적으로 등록되었습니다.");
        }
        else
            alert("실패!");    
    }

//=========================================================================================================================
    
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
                    <button className={btnstyles.searchbtn} onClick={onSearchClick}>검색</button>
                    <button className={btnstyles.postbtn} onClick={onPostClick}>등록하기</button> {/*등록하기 버튼을 같은 form에 두는게 맞나..? 등록하기는 작동되긴 함.*/}
                </form>
                
            </div>
            
            <div className={divstyles.contentsdiv}>
                {records.map((record) =>
                    <div className={divstyles.partsdiv}>
                        <h2>{record.name}</h2>
                        <p>특성: {record.ability}</p>
                        <p>테라스탈 타입: {record.teratype}</p>
                        <p>노력치: {record.stats}</p>
                        <p>아이템: {record.item}</p>
                        <p>조정의미: {record.description}</p>
                    </div>
                )}
            </div>
            

        </div>

        <Footer />
        </>
    );
}

export default Pkrecord;