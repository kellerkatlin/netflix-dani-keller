import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import prismadb from "@/lib/prismadb";

const serverAuth = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const session = await getSession({ req });

        if (!session?.user?.email) {
            throw new Error("Not signed in");
        }

        const currentUser = await prismadb.user.findUnique({
            where: {
                email: session.user.email,
            },
        });

        if (!currentUser) {
            throw new Error("User not found");
        }

        res.status(200).json({ currentUser });
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
};

export default serverAuth;
