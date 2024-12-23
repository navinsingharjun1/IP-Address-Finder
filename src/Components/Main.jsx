import { useEffect, useState } from "react";
import axios from "axios";
import Map from "react-map-gl";

function Main() {
    const [ipDetails, setIpDetails] = useState([]);
    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);

    useEffect(() => {
        axios.get("https://ipapi.co/json/")
            .then((response) => {
                setIpDetails(response.data);
                setLatitude(response.data.latitude);
                setLongitude(response.data.longitude);
            })
            .catch((error) => {
                console.error("Error fetching IP details:", error);
            });
    }, []);

    if (!ipDetails.ip) {
        return <p>Loading...</p>;
    }

    return (
        <>
            <h1>IP Address Finder</h1>
            <div>
                <p>What is my IPv4 address?</p>
                <h2>{ipDetails.ip}</h2>

                <p>Approximate Location:</p>
                <h2>{ipDetails.city}, {ipDetails.region}, {ipDetails.country_name}</h2>

                <p>Internet Service Provider (ISP):</p>
                <h2>{ipDetails.org}</h2>
            </div>
           
        </>
    );
}

export default Main;
