import styled from "styled-components"

const SeriesContainer = ({className, name, air_date, episode, created}) => {
   return (<>
    <div className={className}>
      <h2>{name}</h2>
      <span className="namber">{episode}</span>
      {air_date && <ul>
        <li>
          <span>Дата выхода:</span> {air_date}
        </li>
        <li>
          <span >Дата создания:</span> {created}
        </li>
      </ul>
      }
      
    </div>
    </>)
}
export const Series = styled(SeriesContainer)`
  color: #e1e7e1;
  font-size: 15px;
  & .namber {
    color: #47c36a;
  }
   & li {
    list-style-type: none;
  }

  & span {
    font-size: 20px; 
  }
`