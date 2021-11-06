import { ReactNode } from "react";
import CoreFooter from "./CoreFooter";
import CoreHeader from "./CoreHeader";

type CoreLayoutParams = {
    children: ReactNode
}

export default function CoreLayout ({ children }) {
    return (
        <>
        <div className="flex flex-col items-center">
            <div className="max-w-6xl p-8 w-full">
                <CoreHeader />
                {children}
            </div>
        </div>
        <CoreFooter />
        </>
    )
}