import GalleryNavigationItem from "../GalleryNavigationItem/GalleryNavigationItem.jsx"

function GalleryNavigation(props){
    const galleries = props.galleries;

    const galleriesList = galleries.map((gallerie) => {
        return  <GalleryNavigationItem gallerie={gallerie} key={gallerie.id}/>
    })

    return(
        <nav>
            <h1>Galleries</h1>
            <ul className = "names">
                 {galleriesList}

            </ul>
            
            {/* <NavLink to="/" /> */}
        </nav>
    )
}

export default GalleryNavigation;