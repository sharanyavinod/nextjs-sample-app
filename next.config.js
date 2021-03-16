const withAssetsManifest = require('next-assets-manifest');
const { NEXT_PUBLIC_AEM_HOST_URI } = process.env;

module.exports = withAssetsManifest({
  async headers() {
    return [
        {
          source: '/api/getNextProps',
          headers: [
            {
              key: 'Access-Control-Allow-Origin',
              value: NEXT_PUBLIC_AEM_HOST_URI
            },
          ],
        },
      ]
  },
  assetsManifest: {
    output: "../public/asset-manifest.json",
    transform: (assets, manifest) => {
        const entrypoints = [];
      	for(let file in assets) {
            if(assets[file].endsWith(".js") || assets[file].endsWith(".css")) {
            	entrypoints.push(assets[file]);
            }
        }
        return {
          files: assets,
          entrypoints: entrypoints
        };
      }
  }
});
