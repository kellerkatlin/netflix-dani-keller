import useCurrentUser from "@/hooks/useCurrentUser";
import useFavorites from "@/hooks/useFavorites";
import axios from "axios";
import { useCallback, useMemo } from "react";
import { AiOutlineCheck, AiOutlinePlus } from "react-icons/ai";

interface FavoriteButtonProps {
    movieId: string;
}

export default function FavoriteButton({ movieId }: FavoriteButtonProps) {
    const { mutate: mutateFavorites } = useFavorites();
    const { data: curretUser, mutate } = useCurrentUser();

    const isFavorite = useMemo(() => {
        const list = curretUser?.favoriteIds || [];

        return list.includes(movieId);
    }, [curretUser, movieId]);

    const toggleFavorites = useCallback(async () => {
        let response;
        if (isFavorite) {
            response = await axios.delete("/api/favorite", {
                data: { movieId },
            });
        } else {
            response = await axios.post("/api/favorite", { movieId });
        }
        const updatedFavoriteIds = response.data.favoriteIds;
        mutate({
            ...curretUser,
            favoriteIds: updatedFavoriteIds,
        });
        mutateFavorites();
    }, [curretUser, isFavorite, movieId, mutate, mutateFavorites]);

    const Icon = isFavorite ? AiOutlineCheck : AiOutlinePlus;

    return (
        <div className="cursor-pointer group/item w-6 h-6 lg:w-10 lg:h-10 border-white border-2 rounded-full flex justify-center items-center transition hover:border-neutral-300">
            <Icon className="text-white" size={25} />
        </div>
    );
}
