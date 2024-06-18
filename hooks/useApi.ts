import { useEffect, useState } from "react";
import { Alert } from "react-native";

export const useApi = (fn: any) => {
    const [data, setData] = useState<any>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<any>(null);

    const fetchData = async () => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await fn();
            setData(response);
        } catch (error: any) {
            setError(error);
            Alert.alert('Error', error.message);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const refetchData = () => {
        fetchData();
    };

    return { data, isLoading, error, refetchData };
};
