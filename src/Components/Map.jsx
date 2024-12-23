import ReactMapGL from 'react-map-gl'; 

const API_KEY = '<YOUR_API_KEY>'; 

function Map ({latitude, longitude}) {
    const [viewport, setViewport] = useState({ 
        latitude: latitude, 
        longitude: longitude, 
        
    },[latitude, longitude]); 

    useEffect(() => { 
        const a = { ...viewport }; 
        a.latitude = latitude; 
        a.longitude = longitude; 
        setViewport(a); 
    }, [lat, lon]); 

    return (
        <>
        <div className="map">
            <ReactMapGL 
            mapboxapi={ API_KEY} {...viewport} 
            onViewportChange={(viewport) => setViewport(viewport)} >
            </ReactMapGL>

        </div>
        </>
    )
}
export default Map