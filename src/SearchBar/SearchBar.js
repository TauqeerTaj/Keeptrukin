import React, { Component } from 'react';
import './SearchBar.css';// import Search Bar CSS file 

class SearchBar extends Component {
    render() {
        return (
            <div>
                <form className="inputSection">
                    <input type="text" placeholder="Search artist" value={this.props.name} onChange={this.props.onTextChange} className="font-weight-bold" />
                    <i className="fas fa-search"></i>

                </form>
            </div>
        );
    }
}
export default SearchBar;

// class SearchBar extends Component {
//     state = {
//         name: "",
//         nameList: [
//             "tauqeer",
//             "tauseef",
//             "qadeer"
//         ]
//     }
//     onsubmit = (e) => {
//         e.preventDefault();
//     }
//     onTextChange = (e) => {
//         this.setState({ name: e.target.value })
//     }
//     render() {
//         return (
//             <div>
//                 <div className="Maininput">
//                     <form onSubmit={this.onsubmit} className="inputSection">
//                         <input type="search" placeholder="Search artist" value={this.state.name} onChange={this.onTextChange} />
//                         <i className="fas fa-search"></i>
//                     </form>
//                     <div className="mt-4">
//                         {this.state.nameList.filter(
//                             (list) => {
//                                 return list.startsWith(this.state.name);
//                             }
//                         ).map(data => {
//                             return <li>{data}</li>
//                         })}
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }
// export default SearchBar;