//#region src/index.d.ts
/*
this is the best function ever made
*/
declare function getValue(): boolean;
// #region not the best function ever
declare function getAnotherOne(): boolean;
/* node:coverage ignore next */
declare function andOneMore(): boolean;
// hey
declare function hey(): string;
//#endregion
export { andOneMore, getAnotherOne, getValue, hey };