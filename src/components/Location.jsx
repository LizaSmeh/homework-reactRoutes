import styled from "styled-components"
 
const LocationContainer = ({className,name, type, dimension, created}) => {
 return (<>
    <div className={className}>
      <h2>{name}</h2>
      {type && <ul>
        <li>
          <span>Тип:</span> {type}
        </li>
        <li>
          <span >Расположение:</span> {dimension}
        </li>
        <li>
          <span >Дата создания:</span> {created}
        </li>
      </ul>
      }
      
    </div>
    </>)
}
export const Location = styled(LocationContainer)`
  color: #e1e7e1;
  font-size: 15px;
   & li {
    list-style-type: none;
  }

  & span {
    font-size: 20px; 
  }
`