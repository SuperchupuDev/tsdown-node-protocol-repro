//#region src/index.ts
function myOptionalChain() {
	var _process, _process$endsWith;
	return (_process = process) === null || _process === void 0 || (_process = _process.env) === null || _process === void 0 || (_process = _process.MY_VAR) === null || _process === void 0 || (_process$endsWith = _process.endsWith) === null || _process$endsWith === void 0 ? void 0 : _process$endsWith.call(_process, "yup");
}

//#endregion
export { myOptionalChain };