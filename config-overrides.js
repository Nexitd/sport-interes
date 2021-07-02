const path = require("path");
const { override, addWebpackAlias } = require("customize-cra");

module.exports = (config, env) => {
  return Object.assign(
    config,
    override(
      // add an alias for "our" imports
      addWebpackAlias({
        "@iso/assets": path.resolve(__dirname, "src/assets"),
        "@iso/components": path.resolve(__dirname, "src/components"),
        "@iso/api": path.resolve(__dirname, "src/api"),
        "@iso/containers": path.resolve(__dirname, "src/containers"),
        "@iso/slices": path.resolve(__dirname, "src/store/slices"),
        "@iso/utils": path.resolve(__dirname, "src/utils"),
      })
    )(config, env)
  );
};
