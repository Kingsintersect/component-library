import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "@styles/poppins.font.css"
import "@styles/globals.css";
import Navbar from "@components/headers/NavigationBar";
import ScrollIndicator from "@components/scrollindicator/ScrollIndicator";
import { navmenu } from "@lib/constants";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Reuseable React Components",
    description: "A library for reuseable react components",
};

const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <main className='root'>
            <div className="root-container">
                <div className="wrapper">
                    <ScrollIndicator />
                    <Navbar navItems={navmenu} withNotification withStatus className="bg-blue-600" />
                    {children}
                </div>
            </div>
        </main>
    )
}

export default layout