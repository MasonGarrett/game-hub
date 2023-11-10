import { HStack, Icon } from '@chakra-ui/react';
import { IconType } from 'react-icons';
import { BsGlobe } from 'react-icons/bs';
import {
    FaAndroid,
    FaApple,
    FaLinux,
    FaPlaystation,
    FaWindows,
    FaXbox,
} from 'react-icons/fa';
import { MdPhoneIphone } from 'react-icons/md';
import { SiNintendoswitch } from 'react-icons/si';
import { Platform } from '../hooks/useGames';

interface Props {
    platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
    const iconMap: { [key: string]: IconType } = {
        pc: FaWindows,
        playstation: FaPlaystation,
        xbox: FaXbox,
        mac: FaApple,
        linux: FaLinux,
        android: FaAndroid,
        ios: MdPhoneIphone,
        nintendo: SiNintendoswitch,
        web: BsGlobe,
    };

    return (
        <HStack marginY={1}>
            {platforms.map((platform) => (
                <Icon as={iconMap[platform.slug]} color="gray.500" />
            ))}
        </HStack>
    );
};

export default PlatformIconList;
