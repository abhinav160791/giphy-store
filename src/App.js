import Header from "./components/Header";

import { Grid } from '@giphy/react-components'
import { GiphyFetch } from '@giphy/js-fetch-api'
import { useState } from 'react';

import './App.css';

const gf = new GiphyFetch('8qckunS2ykbnSixfa48q26shsZG2OWMM')

function App() {
  const [showSearchGrid, setShowSearchGrid] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')

  const fetchTrendingGifs = (offset) => gf.trending({ offset, limit: 20 })

  const fetchSearchGifs = (offset) => gf.search(searchTerm, { offset, limit: 20 })

  const showNewSearchGifs = () => {
    setShowSearchGrid(true)
  }

  return (
    <div className="App">
      <Header setSearchTerm={setSearchTerm} setShowSearchGrid={setShowSearchGrid} showNewSearchGifs={showNewSearchGifs}/>
      <div className="trending_grids_wrapper is-flex is-justify-centered">
        {!showSearchGrid && <Grid width={1280} columns={4} fetchGifs={fetchTrendingGifs} noLink={true}/>}
      </div>
      <div className="search_grids_wrapper is-flex is-justify-centered">
        {showSearchGrid && <Grid width={1280} columns={4} fetchGifs={fetchSearchGifs} noLink={true}/>}
      </div>
    </div>
  );
}

export default App;
