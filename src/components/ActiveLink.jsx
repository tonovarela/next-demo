import { useRouter } from "next/router";

import Link from "next/link";

const style = {
    color: "#0070f3",
    textDecoration: "underline"
}
export const ActiveLink = ({ texto, href }) => {
    const { asPath } = useRouter();

    return (
        <Link href={href}>
            <label style={asPath === href ? style : null}>{texto}</label>
        </Link>
    )
};

