import ThemeToggler from "./ThemeToggler";
import logo from '../logo.svg';
let debounced;

const Header = ({setSearchTerm, setShowSearchGrid, showNewSearchGifs}) => {

    const debounceSearch = (e) => {
        let {value: searchKey} = e.target
        clearTimeout(debounced);
        debounced = setTimeout( _ => {
          if(!searchKey){
            setSearchTerm('')
            setShowSearchGrid(false)
            return
          }
    
          setSearchTerm(searchKey)
          setShowSearchGrid(false)
          showNewSearchGifs()
        }, 300)
    }

    return (<div className="header_wrapper is-flex is-justify-centered">
        <div className="header_content is-flex is-aligned-center is-spaced-between">
          <div className="is-flex is-aligned-center ">
          <img src={logo} className="logo"/>
          <h2>Giphy Store</h2>
          </div>
          <input type="text" onChange={debounceSearch} placeholder="Type to search" className="search-input"/>
          <ThemeToggler/>
        </div>
      </div>
    )
}

export default Header