import React, { useState } from "react";
import image from "../images/todo.png";

function Todolist() {
  const [inputdata, setinputdata] = useState("");
  const [itmes, setitmes] = useState([]);
  const [togglesubmit, settogglesubmit] = useState(true);
  const [isedititrm, setisedititem] = useState(null);
  const additem = () => {
    if (!inputdata) {
    } else if (inputdata && !togglesubmit) {
      setitmes(
        itmes.map((elem) => {
          if (elem.id === isedititrm) {
            return { ...elem, name: inputdata };
          }
          return elem;
        })
      );
      settogglesubmit(true);
      setinputdata("");
      setisedititem(null);
    } else {
      const allinputdata = {
        id: new Date().getTime().toLocaleString(),
        name: inputdata,
      };
      setitmes([...itmes, allinputdata]);
      setinputdata("");
    }
  };
  const deletitem = (idex) => {
    const updateditems = itmes.filter((elem) => {
      return idex !== elem.id;
    });
    setitmes(updateditems);
  };
  const edititem = (id) => {
    let newedititems = itmes.find((elem) => {
      return elem.id === id;
    });
    settogglesubmit(false);
    setinputdata(newedititems.name);
    setisedititem(id);
  };
  const removeall = () => {
    setitmes([]);
  };
  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <img src={image} alt="image"></img>
            <h2 className="title">
              <span className="title-word title-word-1">Add </span>
              <span className="title-word title-word-2">Your </span>
              <span className="title-word title-word-3">List </span>
              <span className="title-word title-word-4">Hear </span>
            </h2>
          </figure>
          <div className="additems">
            <input
              type="text"
              placeholder="✍️ Add Items..."
              value={inputdata}
              onChange={(e) => {
                setinputdata(e.target.value);
              }}
            ></input>

            {togglesubmit ? (
              <i
                class="fa-solid fa-square-plus fa-2xl add"
                title="Add Item"
                onClick={additem}
                style={{ color: "#b21f1f" }}
              ></i>
            ) : (
              <i
                class="fa-regular fa-pen-to-square fa-lg editagain"
                title="Update Item"
                onClick={additem}
                style={{ color: "bf2b2b" }}
              ></i>
            )}
          </div>
          <div className="showitems">
            {itmes.map((elem) => {
              return (
                <div className="eachitmes" key={elem.id}>
                  <h3>{elem.name}</h3>
                  <i
                    class="fa-regular fa-pen-to-square fa-lg edit"
                    title="Edit Item"
                    onClick={() => edititem(elem.id)}
                    style={{ color: "#2ca540" }}
                  ></i>
                  <i
                    class="fa-solid fa-trash fa-lg delet"
                    title="Delete Item"
                    onClick={() => deletitem(elem.id)}
                    style={{ color: "#ef3434" }}
                  ></i>
                </div>
              );
            })}
          </div>
          <div className="showitems">
            <button onClick={removeall}>
              <span class="first"></span>
              <span class="second"></span>
              <span class="third"></span>
              <span class="fourth"></span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Todolist;
