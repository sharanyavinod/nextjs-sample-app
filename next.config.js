const withAssetsManifest = require('next-assets-manifest');

module.exports = withAssetsManifest({
  assetsManifest: {
    output: "../public/asset-manifest.json",
    publicPath: true,
    transform: (assets, manifest) => {
        const entrypoints = [];
      	for(let file in assets) {
        	entrypoints.push(assets[file]);
        }
        return {
          files: assets,
          entrypoints: entrypoints
        };
      },
       done(manifest) {
          console.log( `${manifest}` );
      }
  }
});
