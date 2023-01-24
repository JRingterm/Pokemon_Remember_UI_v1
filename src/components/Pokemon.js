import {Link} from "react-router-dom";
import divstyles from "../css/Div.module.css";
import btnstyles from "../css/Button.module.css";

function Pokemon({name, nature, ability, teratype, stats, skills, item, description}){
    return(
        <div className={divstyles.detailcontentsdiv}>
            <h2>{name}</h2>
            <p>성격: {nature}</p>
            <p>특성: {ability}</p>
            <p>테라스탈 타입: {teratype}</p>
            <p>노력치: {stats}</p>
            <p>기술배치: {skills}</p>
            <p>도구: {item}</p>
            <p>조정의미: {description}</p>
            <button className={btnstyles.modifybtn}>수정</button>
        </div>
    );
}

export default Pokemon;