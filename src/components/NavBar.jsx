import { Route, Routes, NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";

const NavBarContainer = ({className}) => {
const navigate = useNavigate();
   return (<div className={className}>
		<ul>
        <li>
          <NavLink style={({isActive}) => isActive ? {color: '#47c36a'}: {color: '#e1e7e1'}} to="/categories/characters">Герои</NavLink>
        </li>
        <li>
          <NavLink style={({isActive}) => isActive ? {color: '#47c36a'}: {color: '#e1e7e1'}} to="/categories/locations">Локации</NavLink>
        </li>
        <li>
          <NavLink style={({isActive}) => isActive ? {color: '#47c36a'}: {color: '#e1e7e1'}} to="/categories/episodes">Эпизоды</NavLink>
        </li>
      </ul>
      <div className="btn">
	  <button onClick={()=>navigate(-1)}>Вернуться назад</button>
	  <button onClick={()=>navigate('/')}>Главная </button>
      </div>
	</div>)
}

export const NavBar = styled(NavBarContainer)`
& ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
};
& li{
    list-style-type: none;
};

& .btn {
    display: flex;
    justify-content: center;
    gap: 10px;
};
& button {
    width: 200px;
    color: #e1e7e1;
}

   `