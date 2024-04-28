import useBillboard from "@/hooks/useBillboard";
import { AiOutlineInfoCircle } from "react-icons/ai";
import PlayButton from "./PlayButton";
import { useCallback } from "react";
import useInfoModal from "@/hooks/useInfoModal";

export default function Billboard() {
    const { data } = useBillboard();
    const { openModal } = useInfoModal();
    const handleOpenModal = useCallback(() => {
        openModal(data?.id);
    }, [openModal, data?.id]);

    return (
        <div className="relative h-[56.25vw]">
            <div className="flex items-center justify-center h-[56.25vw]">
                <video
                    className="w-1/2 object-cover h-[56.25vw] brightness-[60%]"
                    autoPlay
                    muted
                    loop
                    src="images/historia.mp4"
                    poster={data?.thumbnailUrl}
                ></video>
                <video
                    className="w-1/2 object-cover h-[56.25vw] brightness-[60%]"
                    autoPlay
                    muted
                    loop
                    src="images/historia.mp4"
                    poster={data?.thumbnailUrl}
                ></video>
            </div>

            <div className="absolute top-[30%] md:top-[40%] ml-4 md:ml-16">
                <p className="text-white text-xl md:text-5xl h-full w-[50%] lg:text-6xl font-bold drop-shadow-xl">
                    Nuestra historia de amor
                    {/* {data?.title} */}
                </p>
                <p className="text-white text-[8px] md:text-lg mt-3 md:mt-8 w-[90%] md:w-[80%] lg:w-[50%] drop-shadow-xl ">
                    La historia de amor de dos jóvenes que se conocen en el gym
                    y se enamoran en circunstancias inesperadas que los llevarán
                    a vivir una vida juntos.
                    {/* {data?.discription} */}
                </p>
                <div className="flex flex-row items-center mt-3 md:mt-4 gap-3">
                    <PlayButton movieId={data?.id} />
                    <button
                        disabled
                        onClick={handleOpenModal}
                        className="bg-white text-white bg-opacity-30 rounded-md py-1 md:py-2 px-2 md:px-4 w-auto text-xs lg:text-lg font-semibold flex flex-row items-center hover:bg-opacity-20 transition"
                    >
                        <AiOutlineInfoCircle className="mr-1" /> Mas información
                    </button>
                </div>
            </div>
        </div>
    );
}
