import { Attachment } from "revolt-api/types/Autumn";
import styled, { css } from "styled-components";

export interface IconBaseProps<T> {
    target?: T;
    url?: string;
    attachment?: Attachment;

    size: number;
    hover?: boolean;
    animate?: boolean;
}

interface IconModifiers {
    /**
     * If this is undefined or null then the icon defaults to square, else uses the CSS variable given.
     */
    borderRadius?: string;
    hover?: boolean;
}

export default styled.svg<IconModifiers>`
    flex-shrink: 0;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;

        ${(props) =>
            props.borderRadius &&
            css`
                border-radius: var(${props.borderRadius});
            `}
    }

    ${(props) =>
        props.hover &&
        css`
            &:hover .icon {
                filter: brightness(0.8);
            }
        `}
`;

export const ImageIconBase = styled.img<IconModifiers>`
    flex-shrink: 0;
    object-fit: cover;

    ${(props) =>
        props.borderRadius &&
        css`
            border-radius: var(${props.borderRadius});
        `}

    ${(props) =>
        props.hover &&
        css`
            &:hover img {
                filter: brightness(0.8);
            }
        `}
`;
