// import { NavLink } from "react-router-dom";

function GalleryNavigation(props){
    const galleries = props.galleries

    const galleriesList = galleries.map((gallerie) => {
        return (<p>{gallerie.name}</p>)
    })

    return(
        <nav>
            <h1>Galleries</h1>
                {galleriesList}
            {/* <NavLink to="/" /> */}
        </nav>
    )
}

export default GalleryNavigation;