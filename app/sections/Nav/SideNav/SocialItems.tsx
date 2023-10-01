import IconEnvelope from '@/app/components/Icons/IconEnvelope';
import IconGithub from '@/app/components/Icons/IconGithub';
import IconInstagram from '@/app/components/Icons/IconInstagram';
import IconLinkedin from '@/app/components/Icons/IconLinkedin';
import Button from '@/app/components/Button/Button';
import IconCopy from '@/app/components/Icons/IconCopy';
import { toast } from 'react-toastify';

const onCopy = () => {
    navigator.clipboard.writeText('hello@taylormkaye.com');
    toast('Email copied to clipboard');
};

export const SocialItems = [
    {
        icon: IconGithub,
        url: 'https://github.com/taylormkaye',
        tooltip: <>taylormkaye</>,
    },
    {
        icon: IconInstagram,
        url: 'https://www.instagram.com/taylormkaye',
        tooltip: <>taylormkaye</>,
    },
    {
        icon: IconLinkedin,
        url: 'https://www.linkedin.com/in/taylormkaye/',
        tooltip: <>taylormkaye</>,
    },
    {
        icon: IconEnvelope,
        url: 'mailto: hello@taylormkaye.com',
        tooltip: <>hello@taylormkaye.com</>,
        button: (
            <Button
                className="flex h-[28px] w-[28px] rounded-full bg-transparent p-1"
                onClick={onCopy}
            >
                <IconCopy height="18px" width="18px" />
            </Button>
        ),
    },
];
