import MenuComponent from "@/components/MenuComponent";
import {ReactNode} from "react";
import {SearchProvider} from "@/context/searchContext";
import "./global.css";

export const metadata = {
    title: "Home",
};

export default function RootLayout({children}: { children: ReactNode }) {
    return (
        <SearchProvider>
            <html lang="en">
            <body className="bg-gray-900 text-white font-sans">
            <div className="fixed top-0 left-0 w-full z-10">
                <MenuComponent/>
            </div>

            <main className="pt-16 pb-12 bg-gradient-to-t from-blue-300 to-blue-400 mt-5">
                <div className="container mx-auto px-6">
                    {children}
                </div>
            </main>
            </body>
            </html>
        </SearchProvider>
    );
}
