import {Link} from "react-router-dom";
import divstyles from "../css/Div.module.css";
import btnstyles from "../css/Button.module.css";
import PropTypes from "prop-types";

//Pkrecord.js에서 호출하는 컴포넌트. api에서 전체 리스트를 가져와서 출력한다.
function Pokemons({id, name, ability, teratype, stats, item, description}){
    return(
        <div className={divstyles.partsdiv}>
            <h2><Link to={`/detail/${id}`}>{name}</Link></h2>
            <p>특성: {ability}</p>
            <p>테라스탈 타입: {teratype}</p>
            <p>노력치: {stats}</p>
            <p>아이템: {item}</p>
            <p>조정의미: {description}</p>
            <button className={btnstyles.modifybtn}>상세</button>
        </div>
    );
}

Pokemons.propTypes = {
    id:PropTypes.number.isRequired,
    name:PropTypes.string.isRequired,
    ability:PropTypes.string.isRequired,
    teratype:PropTypes.string.isRequired,
    stats:PropTypes.string.isRequired,
    item:PropTypes.string.isRequired,
    description:PropTypes.string,
}
export default Pokemons;