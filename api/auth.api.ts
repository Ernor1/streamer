import axios from 'axios'
import * as SecureStore from 'expo-secure-store';
import api from './api';

const apiUrl = process.env.EXPO_PUBLIC_API_URL;
type Credentials = {
    email: string
    password: string
}
async function saveAuthToken(token: string) {
    try {
        await SecureStore.setItemAsync('authToken', token);
    } catch (error) {
        console.error('Error storing auth token:', error);
    }
}


export async function removeAuthToken() {
    try {
        await SecureStore.deleteItemAsync('authToken');
    } catch (error) {
        console.error('Error removing auth token:', error);
    }
}


export const login = async (cred: Credentials) => {
    try {
        const response = await api.post(`${apiUrl}/auth/login`, cred)
        await saveAuthToken(response.data.data.token)
        return response.data
    } catch (error) {
        console.log("error response");
        console.log(error);
        throw error
    }

}

export const getProfile = async () => {
    try {
        console.log("here");
        const response = await api.get(`${apiUrl}/profile/me`)
        return response.data
    } catch (error) {
        console.log(error);
        throw error
    }

}


