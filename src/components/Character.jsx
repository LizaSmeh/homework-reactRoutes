import styled from "styled-components";

const CharcterContainer = ({className, name, status, species, type, gender, image, created}) => {
  return (<>
    <div className={className}>
      <div className="charBase">
         
      <img src={image} width='200px'/>
      <h2>{name}</h2>
      </div>
     
      {status && <ul>
        <li>
          <span>Статус:</span> {status}
        </li>
        <li>
          <span >Вид:</span> {species}
        </li>
        <li>
          <span >Тип:</span> {type}
        </li>
        <li>
          <span >Пол:</span> {gender}
        </li>
        <li>
          <span >Дата создания:</span> {created}
        </li>
      </ul>
      }
      
    </div>
    </>)
}
export const Character = styled(CharcterContainer)`
color: #e1e7e1;
  & .charBase {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: 20px;
  }
 
  & li {
    list-style-type: none;
  }

  & span {
    font-size: 20px; 
  }
  
`