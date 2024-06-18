// api.js
// import { useGlobalContext } from '@/context/GlobalProvider';
import axios from 'axios';
import * as SecureStore from 'expo-secure-store';


const apiUrl = process.env.EXPO_PUBLIC_API_URL;
// const { setIsLoggedIn } = useGlobalContext()

const api = axios.create({
    baseURL: apiUrl
});

// Request Interceptor
api.interceptors.request.use(
    async (config) => {
        const token = await SecureStore.getItemAsync('authToken');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        // setIsLoggedIn(false)
        return Promise.reject(error);
    }
);

// Response Interceptor
api.interceptors.response.use(
    (response) => {
        return response;
    },
    async (error) => {
        const originalRequest = error.config;
        if (error.response.status === 401 && !originalRequest._retry) {
            // setIsLoggedIn(false)
            // const newToken = await refreshAuthToken();
            // if (newToken) {
            //     await AsyncStorage.setItem('authToken', newToken);
            //     api.defaults.headers.Authorization = `Bearer ${newToken}`;
            //     originalRequest.headers.Authorization = `Bearer ${newToken}`;
            //     return api(originalRequest);
            // }
        }
        // setIsLoggedIn(false)
        console.log(error.response.data);
        return Promise.reject(error.response.data);
    }
);

// const refreshAuthToken = async () => {
//     try {
//         const response = await axios.post('https://your-api-url.com/refresh-token', {
//             token: await AsyncStorage.getItem('refreshToken'),
//         });
//         return response.data.token;
//     } catch (error) {
//         await AsyncStorage.removeItem('authToken');
//         await AsyncStorage.removeItem('refreshToken');
//         // Handle the error, possibly redirect to login screen
//         return null;
//     }
// };

export default api;
