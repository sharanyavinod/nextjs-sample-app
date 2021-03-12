import { MapTo } from '@adobe/aem-react-editable-components';
import { Text, TextEditConfig } from './AEMText';
import Image, { ImageEditConfig } from './AEMImage';

MapTo('wknd-spa-react/components/text')(Text, TextEditConfig);
MapTo('wknd-spa-react/components/image')(Image, ImageEditConfig);
