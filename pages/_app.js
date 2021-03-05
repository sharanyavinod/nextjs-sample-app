import { ModelManager } from "@adobe/aem-spa-page-model-manager";
import CustomModelClient from '../lib/CustomModelClient';

const modelClient = new CustomModelClient('http://localhost:4502');
ModelManager.initializeAsync({
    modelClient
});

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
