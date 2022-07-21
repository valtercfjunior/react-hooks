import React, { useEffect, useState } from "react";
import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";

function calcFatorial(n) {
  if (n < 0) return -1;
  if (n === 0) return 1;
  return calcFatorial(n - 1) * n;
}

const UseEffect = (props) => {
  const [num, setNum] = useState(1);
  const [fatorial, setFatorial] = useState(1);
  const [status, setStatus] = useState('');
  

  useEffect(
    function () {
      setFatorial(calcFatorial(num));
    },
    [num]
  );

  useEffect(
    function () {
        setStatus(num % 2 === 0 ? "Par" : "Ímpar")

    },[num])

  return (
    <div className="UseEffect">
      <PageTitle
        title="Hook UseEffect"
        subtitle="Permite executar efeitos colaterais em componentes funcionais!"
      />

      <div>
        <div className="center">
          <input
            type="number"
            className="input"
            value={num}
            onChange={(e) => setNum(e.target.value)}
          />
        </div>
        <SectionTitle title="Exercício 01" />
        <div className="center">
          <div>
            <span className="text">Fatorial: </span>
            <span className="text red">
              {fatorial === -1 ? "Não existe" : fatorial}
            </span>
          </div>
        </div>
      </div>
      <SectionTitle title="Exercício 02" />
      <div className="center">
        <div>
          <span className="text">Status: </span>
          <span className="text red">{status}</span>
        </div>
      </div>
    </div>
  );
};

export default UseEffect;
