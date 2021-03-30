import { MapTo } from '@adobe/aem-react-editable-components';
import { Text, TextEditConfig } from './AEMText';
import Image, { ImageEditConfig } from './AEMImage';

MapTo('mysitetest/components/text')(Text, TextEditConfig);
MapTo('mysitetest/components/image')(Image, ImageEditConfig);
