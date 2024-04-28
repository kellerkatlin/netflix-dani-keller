import useMovie from "@/hooks/useMovie";
import { useRouter } from "next/router";
import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";

export default function Love() {
    const router = useRouter();
    const { movieId } = router.query;

    const { data } = useMovie(movieId as string);
    return (
        <div className="h-screen w-screen bg-black">
            <nav className="fixed w-full p-4 z-10 flex flex-row items-center gap-8 bg-black bg-opacity-70">
                <AiOutlineArrowLeft
                    onClick={() => router.push("/")}
                    className="text-white"
                    size={40}
                />
                <p className="text-white text-xl md:text-3xl font-bold">
                    <span className="font-light">Mirando: </span>
                    Nuestra historia de amor
                </p>
            </nav>
            <video
                autoPlay
                controls
                className="h-full w-full"
                src="/images/historia.mp4"
            ></video>
        </div>
    );
}
