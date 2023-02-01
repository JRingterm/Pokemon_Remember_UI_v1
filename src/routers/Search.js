import divstyles from "../css/Div.module.css";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Pokemons from "../components/Pokemons";

function Search() {
    const { name } = useParams(); //받아온 name값을 저장.
    const [pokemons, setPokemons] = useState([]);
    const getNamepokemon = async () => { //id에 해당하는 api를 불러옴
        const detailjson = await(
            await fetch(`http://34.64.224.17:8000/pokemons/?name=${name}`) //DRF에서 filter로 구현한 필터링
        ).json();
        setPokemons(detailjson);
    };
    //console.log(pokemons);//api가 state에 잘 들어갔나 확인
    useEffect(() => {
        getNamepokemon();
    },[]);

    return(
        <>
        <div className={divstyles.maindiv}>
            <h1>{name} 검색결과</h1>
            <div className={divstyles.menusdiv}></div>
            <div className={divstyles.contentsdiv}>
                {pokemons.length === 0 ? 
                    <h2>검색결과 없음</h2> :
                    pokemons.map((record) =>
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
                    )
                }
            </div>
        </div>
        <Footer />
        </>
    );
}

export default Search;