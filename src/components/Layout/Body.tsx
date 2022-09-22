
import { ReactNode } from "react";

type Props = {
children: ReactNode;
};

const Body = ({children}:Props) =>
{
    return(
        <div className="mx-auto max-w max-w-full">
            {children}
        </div>
    )
}

export default Body