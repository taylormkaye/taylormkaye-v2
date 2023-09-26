import './line.scss';

type Props = {
    className?: string;
};

const Line = ({ className }: Props) => {
    return <hr className={`line ${className}`} />;
};

export default Line;
