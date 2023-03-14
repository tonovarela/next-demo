import { useRouter } from "next/router";

import Link from "next/link";
import { CSSProperties, FC } from "react";

const style:CSSProperties = {
    color: "#0070f3",
    textDecoration: "underline",    
}

interface Props {
    texto: string;
    href: string;
}

export const ActiveLink: FC<Props> = ({ texto, href }) => {
    const { asPath } = useRouter();

    return (
        <Link href={href}>
            <label style={asPath === href ? style : undefined}>{texto}</label>
        </Link>
    )
};

