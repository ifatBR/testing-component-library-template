module.exports = {
  presets: [
    "@babel/preset-env",//! maybe not needed - but probably is
    "@babel/preset-react",//! maybe not needed
    "@babel/preset-typescript",//! maybe not needed
  ],
  plugins: [
    "@babel/plugin-proposal-class-properties",//! maybe not needed
    "@babel/plugin-transform-react-constant-elements",//! maybe not needed
    "@babel/plugin-proposal-optional-chaining", //!maybe not needed compare all to initial file
],
};
