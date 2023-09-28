import { ReactNode } from 'react';

type Props = {
    children?: ReactNode;
};

const Error = ({ children }: Props) => {
    return <div className="absolute text-sm text-red-600">{children}</div>;
};

export default Error;
2;
