import React, { useEffect, useRef, useState } from "react";
import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";


const merge = function(s1, s2) {

    const l1 = s1.split('')
    const l2 = s2.split('')
    let arrayMerged = []

    l1.map((item, i) => { 
       return ( arrayMerged.push(l1[i]), arrayMerged.push(l2[i])
               
        ) 
    })

    return arrayMerged
     
    
}

const UseRef = (props) => {
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");

  const count = useRef(0);
  const myInput1 = useRef(null);
  const myInput2 = useRef(null);

  useEffect(
    function () {
      count.current = count.current + 1;
      myInput2.current.focus()
      
      
    },
    [value1]
  );
  useEffect(
    function () {
      count.current = count.current + 1;
      myInput1.current.focus()
      
      
    },
    [value2]
  );

  return (
    <div className="UseRef">
      <PageTitle
        title="Hook UseRef"
        subtitle="Retorna um objeto mutável com a propriedade .current!"
      />
      <SectionTitle title="Exercício 01" />
      <div className="center">
        <div>
          <span className="text">Valor: </span>
          <span className="text">{merge(value1, value2)} [</span>
          <span className="text red">{count.current}</span>
          <span className="text">]</span>
        </div>
        <div className="center">
            <input
              ref={myInput1}
              type="text"
              className="input"
              value={value1}
              onChange={(e) => setValue1(e.target.value)}
            />
        </div>
      </div>
      <SectionTitle title="Exercício 02" />
      <div className="center">
          <input
            ref={myInput2}
            type="text"
            className="input"
            value={value2}
            onChange={(e) => setValue2(e.target.value)}
          />
      </div>
    </div>
  );
};

export default UseRef;
