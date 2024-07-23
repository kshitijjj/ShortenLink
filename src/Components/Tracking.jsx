/* import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Tracking = () => {
    const { shortId } = useParams(); // Access shortId directly from useParams
    console.log(shortId);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://cdpt.in/${shortId}`);
                if (response.status === 200) {
                    window.location.href = response.data.inputUrl; // Use window.location.href
                }
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, [shortId]); // Use shortId in the dependency array
    
    return null;
};

<<<<<<< HEAD
export default Tracking; *
export default Tracking;
 */
