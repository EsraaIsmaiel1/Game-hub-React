import bullsEye from '../assets/bulls-eye.c2c9c868899620d91a31.webp';
import thumbsUp from '../assets/thumbs-up.25a87c1e02591e9a7b65.webp';
import meh from '../assets/meh.facd017f5ce39bda3191.webp';
import { Image, ImageProps } from '@chakra-ui/react';

interface Props {
  rating: number;
}
const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;
  const emojiMao: { [key: number]: ImageProps } = {
    3: { src: meh, alt: 'meh', boxSize: '25px' },
    4: { src: thumbsUp, alt: 'recommended', boxSize: '25px' },
    5: { src: bullsEye, alt: 'exceptional', boxSize: '35px' },
  };

  return <Image {...emojiMao[rating]} marginTop={1} />;
};

export default Emoji;
