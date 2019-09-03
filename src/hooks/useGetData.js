import { useState, useEffect } from 'react';

//const API = 'https://us-central1-gndx-cv.cloudfunctions.net/me';
const API = 'https://us-central1-test-1-600e1.cloudfunctions.net/me';
//const API = 'public/me.json';

const useGetData = () => {
    const [ myData, setData ] = useState([]);

    useEffect(() => {
        fetch(API)
            .then(response => response.json())
            .then(data => setData(data));
    }, []);

    return myData;
}

export default useGetData;