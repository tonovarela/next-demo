import { PropsWithChildren, FC } from "react";


export const DarkLayout: FC<PropsWithChildren> = ({ children }) => {
    return (
        <div style={{
            backgroundColor: 'rgba(1,1,0,0.5)',
            borderRadius: '5px',
            padding: '10px',
        }}>
            <h1>Dark Layout</h1>
            {children}
        </div>

    )
};

