import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import prismadb from "@/lib/prismadb";

const serverAuth = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const session = await getSession({ req });

        if (!session?.user?.email) {
            return res.status(401).json({ error: "Not signed in" });
        }
        const currentUser = await prismadb.user.findUnique({
            where: {
                email: session.user.email,
            },
        });
        if (!currentUser) {
            return res.status(401).json({ error: "User not found" });
        }
        return res.status(200).json({ currentUser });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Internal server error" });
    }
};

export default serverAuth;
