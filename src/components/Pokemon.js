
//Detail.js에서 호출하는 컴포넌트. id에 해당하는 개체를 불러온다.
function Pokemon({name, nature, ability, teratype, stats, skills, item, description}){
    return(
        <>
            <h2>{name}</h2>
            <p>성격: {nature}</p>
            <p>특성: {ability}</p>
            <p>테라스탈 타입: {teratype}</p>
            <p>노력치: {stats}</p>
            <p>기술배치: {skills}</p>
            <p>도구: {item}</p>
            <p>조정의미: {description}</p>
        </>
    );
}

export default Pokemon;