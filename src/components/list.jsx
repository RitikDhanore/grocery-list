import React, {useState} from "react";

function List() {
    var [totalCount, setTotalCount] = useState(0);
    var [count, setCount] = useState(0);
    var [count1, setCount1] = useState(0);
    const [hid, sethid] = useState(false);
    const [hidOne, sethidOne] = useState(false);
    

    function increase(){
        setCount(count + 1);
        setTotalCount(totalCount + 1);
       }
      function increaseOne(){
        setCount1(count1 + 1);
        setTotalCount(totalCount + 1);
      }
    function decrease(){
         setCount(count - 1);
        setTotalCount(totalCount - 1);
        }
      function decreaseOne(){
        setCount1(count1 - 1);
        setTotalCount(totalCount - 1);
      }
    function deleteItem(){
        sethid(true);
        setTotalCount(totalCount - count);
       }
       function deleteItemOne(){
        sethidOne(true);
        setTotalCount(totalCount - count1);
       }


    return ( 
        <div className = "main">
          <div className = "heading">
              <h1 style={{color: "red"}}>{totalCount}</h1>
              </div>
            <div className = "sideHeading" style={hid?{visibility: "hidden"}:null}>
             <h1 style={count === 0 ? {color: "blue"} : {color: "yellow"}}>{count}</h1>
             <button type="button" class="btn btn-success" onClick={decrease}>-</button>
             <button type="button" class="btn btn-success" onClick={increase}>+</button>
             <button type="button" class="btn btn-success" onClick={deleteItem}>delete</button>
            </div>
             <div className = "sideHeading" style={hidOne?{visibility: "hidden"}:null}>
             <h1 style={count1 === 0 ? {color: "blue"} : {color: "yellow"}}>{count1}</h1>
             <button type="button" class="btn btn-success" onClick={decreaseOne}>-</button>
             <button type="button" class="btn btn-success" onClick={increaseOne}>+</button>
             <button type="button" class="btn btn-success" onClick={deleteItemOne}>delete</button>
            </div>
          </div>
          
    );
}

export default List;