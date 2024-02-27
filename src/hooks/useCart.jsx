import { useQuery } from "@tanstack/react-query";
import useAxiosUrl from "./useAxiosUrl";

//custom hook for providing cart data
const useCart = () => {
    const axiosUrl = useAxiosUrl();
    const {
        data: cart = [],
        refetch,
        isPending: loading,
    } = useQuery({
        queryKey: ["cart"],
        queryFn: async () => {
            const res = await axiosUrl.get("/cart");
            return res.data;
        },
    });
    return [cart, refetch, loading];
};

export default useCart;
