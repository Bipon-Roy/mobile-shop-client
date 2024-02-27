import { useQuery } from "@tanstack/react-query";
import useAxiosUrl from "./useAxiosUrl";

//custom hook for providing phones data
const useProducts = () => {
    const axiosUrl = useAxiosUrl();
    const { data: phones = [], refetch } = useQuery({
        queryKey: ["phones"],
        queryFn: async () => {
            const res = await axiosUrl.get("/phones");
            return res.data;
        },
    });

    return [phones, refetch];
};

export default useProducts;
