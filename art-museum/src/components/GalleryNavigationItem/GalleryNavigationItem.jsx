import {NavLink} from 'react-router-dom';

const GalleryNavigationItem = ({gallerie}) => {

   return (<NavLink to ={`${gallerie.id}`}><li className = "names">{gallerie.name}</li></NavLink>)
}

export default GalleryNavigationItem;