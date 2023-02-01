import Footer from "../components/Footer";
import divstyles from "../css/Div.module.css";
import inputstyles from "../css/Input.module.css";
import btnstyles from "../css/Button.module.css";
import axios from "axios";

//메인화면에서 등록하기 버튼을 누르면 /add로 이동하면서 Add.js를 불러옴.
function Add() {
    const onReset = (event) => { //input창 리셋
        event.target.name.value="";
        event.target.nature.value="";
        event.target.ability.value="";
        event.target.teratype.value="";
        event.target.stats.value="";
        event.target.skills.value="";
        event.target.item.value="";
        event.target.description.value="";
    }
    const onSubmit = (event) => { //form을 제출하면 발생하는 이벤트
        event.preventDefault();
        if(!window.confirm("등록하시겠습니까?")){
            
        }else{
            axios({method:"POST",   //api에 Post
            url: 'http://34.64.224.17:8000/pokemons/',
            data: {
                name: event.target.name.value,
                nature: event.target.nature.value,
                ability: event.target.ability.value,
                teratype: event.target.teratype.value,
                stats: event.target.stats.value,
                skills: event.target.skills.value,
                item: event.target.item.value,
                description: event.target.description.value,
            }
            })
            alert("등록되었습니다.");
            onReset(event);
        }
    }
    return(
        <>
        <div className={divstyles.maindiv}>
            <h1>실전개체 등록하기</h1>
            <div className={divstyles.menusdiv}></div>
            <div className={divstyles.addcontentsdiv}>
                <form onSubmit={onSubmit}>
                    <h2>이름</h2>
                    <input id="name" className={inputstyles.addinput} type="text" size="30" required placeholder="ex)피카츄" />
                    <h2>성격</h2>
                    <input id="nature" className={inputstyles.addinput} type="text" size="30" required placeholder="ex)명랑" />
                    <h2>특성</h2>
                    <input id="ability" className={inputstyles.addinput} type="text" size="30" required placeholder="ex)정전기" />
                    <h2>테라스탈 타입</h2>
                    <input id="teratype" className={inputstyles.addinput} type="text" size="30" required placeholder="ex)비행" />
                    <h2>노력치</h2>
                    <input id="stats" className={inputstyles.addinput} type="text" size="30" required placeholder="ex)A252 S252 H4" />
                    <h2>기술배치</h2>
                    <input id="skills" className={inputstyles.skillinput} type="text" size="50" required placeholder="ex)볼트태클, 아이언테일, 깨뜨리기, 누르기" />
                    <h2>도구</h2>
                    <input id="item" className={inputstyles.addinput} type="text" size="30" required placeholder="ex)전기구슬" />
                    <h2>조정의미</h2>
                    <textarea id="description" className={inputstyles.descriptinput} size="100" required placeholder="ex)물리형 최속 어태커"/>
                    <button type="submit" className={btnstyles.postbtn}>등록하기</button>
                </form>
            </div>
        </div>

        <Footer />
        </>
    );
}

export default Add;