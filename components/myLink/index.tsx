
import React, {LegacyRef, ReactNode} from "react";
import Link from "next/link";
// `onClick`, `href`, and `ref` need to be passed to the DOM element
// for proper handling

/**
 *  passHref : 하위 컴포넌트로 href 속성을 전달해주는 역할
 *  legacyBehavior : 하위 태그를 a로 만들어주는 역할
 *
 *  a태그를 컴포넌트화 할때 꼭 써주기
 */

interface MyLinkProps {
    children?: ReactNode;
    onClick?: () => void;
    href?: string;
}

export default function MyLink(props:MyLinkProps){
    return (
        <Link href={props.href} onClick={props.onClick}>
            {props.children}
        </Link>
    )
}