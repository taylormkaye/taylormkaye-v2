type Props = {
    color?: string,
    width?: string,
    height?: string,
};
const IconArrowDown = ({
    color = 'currentColor',
    width = '25px',
    height,
}: Props) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 25.43 25.43"
            fill={color}
            height={height}
            width={width}
        >
            <path d="M23.57 10.19h1.86L13.25 25.43h-1.08L0 10.19h1.86l10.13 12.77V0h1.44v22.97l10.14-12.78z" />
        </svg>
    );
};
export default IconArrowDown;
