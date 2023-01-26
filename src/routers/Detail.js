import Footer from "../components/Footer";
import divstyles from "../css/Div.module.css";
import btnstyles from "../css/Button.module.css";
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Pokemon from "../components/Pokemon";
import axios from "axios";

//메인화면에서 상세 버튼을 누르면, /detail/:id로 이동하면서 Detail.js를 불러옴
function Detail() {
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

    const onDelete = () => { //삭제 버튼 이벤트
        if(!window.confirm("정말 삭제하시겠습니까?")){
            
        }else{
            axios.delete(`http://127.0.0.1:8000/pokemons/${id}/`);
            alert("삭제되었습니다.");
            window.location.href = "/"; //alert에서 확인을 누르면 메인페이지로 돌아감
        }
    }

    return(
        <>
        <div className={divstyles.maindiv}>
            <h1>{detail.name} 상세사항</h1>
            <div className={divstyles.menusdiv}></div>
            <div className={divstyles.detailcontentsdiv}>
                <Pokemon
                    name={detail.name}
                    nature={detail.nature}
                    ability={detail.ability}
                    teratype={detail.teratype}
                    stats={detail.stats}
                    skills={detail.skills}
                    item={detail.item}
                    description={detail.description}
                />
                <Link to={`/modify/${id}`}><button className={btnstyles.modifybtn}>수정</button></Link>
                <button className={btnstyles.modifybtn} onClick={onDelete}>삭제</button>
            </div>
        </div>

        <Footer />
        </>
    );
}

export default Detail;