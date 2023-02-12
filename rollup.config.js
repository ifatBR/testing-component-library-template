
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";
import dts from "rollup-plugin-dts";
import svgr from "@svgr/rollup";
import babel from "@rollup/plugin-babel";
const packageJson = require("./package.json");

export default [
  {
    external: [ 
      'react',//!This is important so the package uses the react of the repo that uses it
      'react-dom'//!This is important so the package uses the react of the repo that uses it
    ],
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      resolve(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
      postcss(),
      svgr(),
      babel({extensions: [ '.js', '.jsx', '.ts', '.tsx' ]}), //!The extensions allow the bubble config + optional-chaining to  work
    ],
  },
  {
    input: "dist/esm/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
    external: [
      /\.(css|less|scss)$/
    ],
  },
];