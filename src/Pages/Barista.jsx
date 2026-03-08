import BaristaSection from "../components/BaristaSection/BaristaSection";
import CatchCopy from "../components/CatchCopy/CatchCopy";
import { catchCopy } from "./list/catchCopy";

export default function Barista() {
    return (
        <>
            <CatchCopy
                heading={catchCopy[2].header}
                first={catchCopy[2].firstLine}
                second={catchCopy[2].secondLine}
                third={catchCopy[2].theadLine}
                fourth={catchCopy[2].fourthLine}
                last={catchCopy[2].lastLine}
            />

            <BaristaSection />
        </>
    );
}
