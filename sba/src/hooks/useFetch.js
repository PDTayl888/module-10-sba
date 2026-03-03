import { useState, useEfect } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState();
    const [error, setError] = useState();

    const fetchData = async () => {
        useEffect(() => {
        if (!url) return;

        const controller = new AbortController();

        try {
            const response = await fetch(url, { signal: controller.signal});

            if (!response.ok) throw new Error('response not ok');
            const result = await response.json();

            setData(result);
            setError(null);

        } catch (error) {
            setError(error);
        } finally {
            
        }
    }

        })
}