
export function myOptionalChain() {
  return process?.env?.MY_VAR?.endsWith?.('yup');
}
