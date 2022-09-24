
import { ReactNode } from "react";

type Props = {
children: ReactNode;
};

const Body = ({children}:Props) =>
{
    return(
        <div className="min-h-screen bg-[#29CCC4]">
            {children}
        </div>
    )
}

export default Body