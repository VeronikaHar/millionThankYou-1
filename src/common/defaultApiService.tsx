import axios, {AxiosError, AxiosResponse} from "axios";
import {appConfig} from "../appConfig";

function getHeaders() {
    return {
        headers: {
            Accept: "text/plain",
            "Content-Type": "application/json; charset=utf-8"
        }
    };
}

export async function get(url: string) {
    return await axios
        .get(appConfig.apiUrl + url, getHeaders())
        .then((response: AxiosResponse<any>) => {
            return response;
        }).catch((error: AxiosError) => {
            alert(error);
            throw error
        });
}

export async function post(url: string, payload: any) {
    return await axios
        .post(appConfig.apiUrl + url,
            payload,
            getHeaders()
        )
        .then((response: AxiosResponse<any>) => response)
        .catch((error: AxiosError) => {
            alert(error);
            throw error;
        });
}

export async function put(url: string, payload: any) {
    return await axios
        .put(appConfig.apiUrl + url,
            payload,
            getHeaders()
        )
        .then((response: AxiosResponse<any>) => {
            return response;
        }).catch((error: AxiosResponse) => {
            alert(error);
            throw error;
        });
}