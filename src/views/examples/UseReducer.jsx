import React, { useReducer } from "react";
import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from '../../components/layout/SectionTitle'

import { initialState, reducer } from '../../store/config'





const UseReducer = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="UseReducer">
      <PageTitle
        title="Hook UseReducer"
        subtitle="Uma outra forma de ter estado em componentes funcionais!"
      />
      <SectionTitle title="Exercício 1" />
      <div className="center">
        {state.user ? (
          <span className="text">{state.user.name}</span>
        ) : (
          <span className="text">Sem usuário</span>
        )}
        <span className="text">{state.number}</span>
        <div>
          <button
            className="btn"
            onClick={() => dispatch({ type: "login", payload: "Junior" })}
          >
            Login
          </button>
          <button
            className="btn"
            onClick={() => dispatch({ type: "add2ToNumber" })}
          >
            +2
          </button>
        </div>
      </div>
      <SectionTitle title="Desafio" />
      <div className="center">
        <div>
            <button className="btn"
            onClick={() => dispatch({type: "mult7ToNumber"})}>x 7</button>
            <button className="btn"
            onClick={() => dispatch({type: "div25ToNumber"})}>/ 25</button>
            <button className="btn"
            onClick={() => dispatch({type: "addNToNumber", n: 100})}>+100</button>
        </div>

      </div>
    </div>
  );
};

export default UseReducer;
