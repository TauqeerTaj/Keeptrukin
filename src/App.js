import React, { useState, memo, useEffect, useReducer } from 'react';
import './SearchBar/SearchBar.css';
import SearchBar from './SearchBar/SearchBar';//import SearchBar Component
import ArtistList from './ArtistList/ArtistList';

// reducer for the component 
const myReducer = (state, action) => {
  switch (action.type) {
    case "mapping":
      return {
        ...state,
        data: [
          { name: "Adeel Arshad", id: "facebook.com/adeelarshad" },
          { name: "Adeel Amjad", id: "facebook.com/adeelamjad" },
          { name: "Adeel Bilal", id: "facebook.com/adeelbilal" },
        ].map(list => {
          if (list.name.toLowerCase().includes(state.searchTerm.toLowerCase())) {
            return {
              ...list,
              totalCount: state.totalCount++
            }
          }

        }),

      }
    case "searchTerm":
      return {
        searchTerm: action.payload,
      }
    default: return { ...state }
  }

}

// initial state for  the component
const initialState = {
  isLoading: false,
  data: null,
  totalCount: 0,
  searchTerm: ""
}
function App(props) {
  // const [name, setName] = useState("");
  const [state, dispatch] = useReducer(myReducer, initialState)
  // const [artistName] = useState([
  //   { name: "Adeel Arshad", id: "facebook.com/adeelarshad" },
  //   { name: "Adeel Amjad", id: "facebook.com/adeelamjad" },
  //   { name: "Adeel Bilal", id: "facebook.com/adeelbilal" },
  // ])
  useEffect(() => { }, [state.searchTerm])
  const onTextChange = e => {
    dispatch({ type: "searchTerm", payload: e.target.value });
    dispatch({ type: "mapping" });
  }
  const { data, searchTerm, totalCount } = state;
  console.log(state)
  // let filterList = artistName.filter((list => {
  //   return listData.name.includes(name);
  // })
  return (
    <div className="App">

      <div className="Maininput">
        <SearchBar name={searchTerm} onTextChange={onTextChange} show={searchTerm} />
        <div className="text-center"><strong>{totalCount}</strong></div>
        {data ? data.map((data) => {
          if (data) {
            return (
              <ArtistList name={data.name} id={data.id} show={searchTerm} />
            )
          }
        }) : ""}
        {/* {artistName.map(((listData, i) => {

          return (
            <div>
              {listData.name.toLocaleLowerCase().includes(name.toLowerCase()) ?
                <ArtistList name={listData.name} id={listData.id} show={name} key={i} />
                : null}
            </div>
          )
        }))
        } */}
      </div>
    </div>
  );
}


export default memo(App);
