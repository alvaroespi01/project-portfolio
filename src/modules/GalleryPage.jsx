import covidDataAnalytics from '../assets/Covid-Dashboard.png'
import mexicoTravel from '../assets/Mexico-Plaza.jpg'
import californiaWineTour from '../assets/Napa-Valley-Castle.jpg'
import velocityExperiment from '../assets/Velocity-Expirement.jpg'
import subaruWiring from '../assets/Subaru-Horn-Wiring-Diagram.jpg'



function GalleryPage(){
    // const ifmages = [covidDataAnalytics, mexicoTravel, californiaWineTour, velocityExperiment, subaruWiring];

    const images = [
        {
            filepath: 'src/assets/Covid-Dashboard.png',
            caption: "Nevada COVID-19 dashboard that highlights historical hospitalization trends from 2021 to 2024.",
            title: "2024 Alvaro Espinoza"
        },

        {
            filepath: 'src/assets/Mexico-Plaza.jpg',
            caption: "A plaza in Tlaquepaque, Mexico",
            title: "2024 Alvaro Espinoza"
        },

        {
            filepath: 'src/assets/Napa-Valley-Castle.jpg',
            caption: "This is a landscape photo of the Castello di Amorosa vineyard in Napa Valley, California.",
            title: "2024 Alvaro Espinoza"
        },

        {
            filepath: 'src/assets/Velocity-Expirement.jpg',
            caption: "A photo showing a computer program tracking the velocity of an object.",
            title: "2024 Alvaro Espinoza"
        },

        {
            filepath: 'src/assets/Subaru-Horn-Wiring-Diagram.jpg',
            caption: "This is a wiring diagram to install an aftermarket horn on a 2005 Subaru Forester.",
            title: "2024 Alvaro Espinoza"
        }

    ]


    return (
        <>
            <h2>Photo Gallery</h2> 
            <p>A  collection of our big moments and adventures over the years. Dive into the nostalgia and relive the magic!</p>     
            <article className="gallery">
                { 
                    images.map((image)=>
                        <figure>
                            <img src={image.filepath} alt={image.caption} title={image.title} />
                            <figcaption>{image.caption}</figcaption>
                        </figure>
                    )
                }
            </article>
        </>
    )
}
export default GalleryPage;