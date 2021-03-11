import { ResponsiveGrid, MapTo, withMappable } from '@adobe/aem-react-editable-components';
import { Text, TextEditConfig } from './AEMText';

export default withMappable(ResponsiveGrid, {
    resourceType: 'wcm/foundation/components/responsivegrid'
});

MapTo('wknd-spa-react/components/text')(Text, TextEditConfig);
