import useSWR from "swr";
import fetcher from "@/lib/fetcher";

const useBillboard = () => {
    const { data, error, isValidating } = useSWR("/api/random", fetcher, {
        revalidateEvents: false,
        revalidateOnFOcus: false,
        revalidateOnReconnect: false,
    });
    const isLoading = !data && !error;
    return {
        data,
        error,
        isLoading,
    };
};
export default useBillboard;
