const withAssetsManifest = require('next-assets-manifest');

module.exports = withAssetsManifest({
  //  async rewrites() {
  //   return [
  //     // we need to define a no-op rewrite to trigger checking
  //     // all pages/static files before we attempt proxying
  //     {
  //       source: '/:path*',
  //       destination: '/:path*'
  //     },
  //     {
  //       source: '/:path*',
  //       destination: `http://localhost:4502/:path*`
  //     }
  //   ]
  // },
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
