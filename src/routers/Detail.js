import Footer from "../components/Footer";
import divstyles from "../css/Div.module.css";
import { useParams } from "react-router-dom";
import { useEffect, useCallback, useState } from "react";
import btnstyles from "../css/Button.module.css";
import Pokemon from "../components/Pokemon";

function Detail() {
    const { id } = useParams(); //받아온 id값을 저장.
    const [detail, setDetail] = useState(""); //useState를 ""로 초기화 안해주니까 Uncaught TypeError: Cannot read properties 오류 발생.
    const getPokemonDetail = async () => { 
        const detailjson = await(
            await fetch(`http://127.0.0.1:8000/pokemons/${id}/`)
        ).json();
        setDetail(detailjson);
    };
    console.log(detail);//api가 state에 잘 들어갔나 확인
    useEffect(() => {
        getPokemonDetail();
    },[]);

    return(
        <>
        <div className={divstyles.maindiv}>
            <h1>{detail.name} 상세사항</h1>
            <div className={divstyles.menusdiv}></div>
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
        </div>

        <Footer />
        </>
    );
}

export default Detail;