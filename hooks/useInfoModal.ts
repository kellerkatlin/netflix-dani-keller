import { create } from "zustand";

export interface ModalStoreInferface {
    movieId: string;
    isOpen: boolean;
    openModal: (movieId: string) => void;
    clodeModal: () => void;
}

const useInfoModal = create<ModalStoreInferface>((set) => ({
    movieId: "",
    isOpen: false,
    openModal: (movieId) => set({ movieId, isOpen: true }),
    clodeModal: () => set({ isOpen: false, movieId: undefined }),
}));

export default useInfoModal;
