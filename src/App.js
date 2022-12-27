import './App.css';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import {Nav} from './components/Nav';
import {Search} from './components/Search'
import {CharacterList} from './components/CharacterList'
import {ComicsList} from './components/ComicsList'
import {CharacterDetails} from './components/CharacterDetails'
import {ComicsDetails} from './components/ComicsDetails'
function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Search/>
          <Nav/>
          <Routes>
            <Route path='/' element={<CharacterList/>}/>
            <Route path='/comics' element={<ComicsList/>}/> 
            <Route path='/character/:name' element={<CharacterDetails/>}/>
            <Route path='/comics/:id' element={<ComicsDetails/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
