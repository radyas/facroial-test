import axios from "axios";

const baseUrl = 'http://localhost:3000/metrics/';

export default function getMetrics(){
    return axios.get(baseUrl)
}

export function addMetric(metric){
    return axios.post(baseUrl, metric)
}