//#region src/index.ts
function getValue() {
	return true;
}
function getAnotherOne() {
	return false;
}
/* node:coverage ignore next */
function andOneMore() {
	return false;
}
function hey() {
	return "hey";
}

//#endregion
export { andOneMore, getAnotherOne, getValue, hey };