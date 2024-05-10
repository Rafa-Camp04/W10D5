import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import harvardArt from './data/harvardArt';
import GalleryNavigation from './components/GalleryNavigation';


console.log(harvardArt);

const router = createBrowserRouter([
  { 
  path: "galleries",
  element: <GalleryNavigation galleries={harvardArt.records}/>
  }
]);

function App() {
  return <RouterProvider router={router}/>;
}

export default App;