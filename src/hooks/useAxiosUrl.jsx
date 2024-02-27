import axios from "axios";

//creating axios base url
const axiosUrl = axios.create({
    baseURL: "https://mobile-shop-server-nu.vercel.app",
});
const useAxiosUrl = () => {
    return axiosUrl;
};

export default useAxiosUrl;
