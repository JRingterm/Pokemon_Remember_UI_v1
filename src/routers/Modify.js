import Footer from "../components/Footer";
import divstyles from "../css/Div.module.css";
import btnstyles from "../css/Button.module.css";
import inputstyles from "../css/Input.module.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

//상세사항 페이지에서 수정 버튼을 누르면, /modify/:id로 이동하면서 Modify.js를 불러옴
function Modify() {
    const { id } = useParams(); //받아온 id값을 저장.
    const [detail, setDetail] = useState(""); //useState를 ""로 초기화 안해주니까 Uncaught TypeError: Cannot read properties 오류 발생.
    const getPokemonDetail = async () => { //id에 해당하는 api를 불러옴
        const detailjson = await(
            await fetch(`http://127.0.0.1:8000/pokemons/${id}/`)
        ).json();
        setDetail(detailjson);
    };
    //console.log(detail);//api가 state에 잘 들어갔나 확인
    useEffect(() => {
        getPokemonDetail();
    },[]);

    const onModify = (event) => { //수정 버튼 이벤트
        event.preventDefault();
        if(!window.confirm("정말 수정하시겠습니까?")){
            
        }else{
            axios.put(`http://127.0.0.1:8000/pokemons/${id}/`, {
                name: event.target.name.value,
                nature: event.target.nature.value,
                ability: event.target.ability.value,
                teratype: event.target.teratype.value,
                stats: event.target.stats.value,
                skills: event.target.skills.value,
                item: event.target.item.value,
                description: event.target.description.value,
            })
            alert("수정되었습니다.");
            window.location.href = "/"; //alert에서 확인을 누르면 메인페이지로 돌아감
        }
    }
    //input에 그냥 value로 하면, 무결성을 위해 read_only가 됨. defaultValue로 바꿔줌으로써 해결
    return(
        <>
        <div className={divstyles.maindiv}>
            <h1>{detail.name} 수정하기</h1>
            <div className={divstyles.menusdiv}></div>
            <div className={divstyles.addcontentsdiv}>
                <form onSubmit={onModify}>
                    <h2>이름</h2>
                    <input id="name" className={inputstyles.addinput} type="text" size="30" defaultValue={detail.name} required/>
                    <h2>성격</h2>
                    <input id="nature" className={inputstyles.addinput} type="text" size="30" defaultValue={detail.nature} required/>
                    <h2>특성</h2>
                    <input id="ability" className={inputstyles.addinput} type="text" size="30" defaultValue={detail.ability} required/>
                    <h2>테라스탈 타입</h2>
                    <input id="teratype" className={inputstyles.addinput} type="text" size="30" defaultValue={detail.teratype} required/>
                    <h2>노력치</h2>
                    <input id="stats" className={inputstyles.addinput} type="text" size="30" defaultValue={detail.stats} required/>
                    <h2>기술배치</h2>
                    <input id="skills" className={inputstyles.skillinput} type="text" size="50" defaultValue={detail.skills} required/>
                    <h2>도구</h2>
                    <input id="item" className={inputstyles.addinput} type="text" size="30" defaultValue={detail.item} required/>
                    <h2>조정의미</h2>
                    <textarea id="description" className={inputstyles.descriptinput} size="100" defaultValue={detail.description} required></textarea>
                    <button className={btnstyles.modifybtn}>수정하기</button>
                </form>
            </div>
        </div>

        <Footer />
        </>
    );
}

export default Modify;