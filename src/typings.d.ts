// Typings reference file, see links for more information
// https://github.com/typings/typings
// https://www.typescriptlang.org/docs/handbook/writing-declaration-files.html

declare var System: any;
// Need to use NodeRequire when using Electron
// declare var require: any;

// Declare any node modules to be used here
// Need to do this until able to modify webpack config in Angular CLI
declare var fs: any;
declare var electron: any;
declare var clipboard: any;
declare var path: any;
declare var window: Window;
declare var __dirname: string;
declare var PouchDB: any;