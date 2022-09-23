
import { ReactNode } from "react";

type Props = {
children: ReactNode;
};

const Body = ({children}:Props) =>
{
    return(
        <div className="max-w-max max-h-max bg-[#29CCC4]">
            {children}
        </div>
    )
}

export default Body