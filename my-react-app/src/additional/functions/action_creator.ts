function actionCreator(type: string) {
  return (payload: any) => ({
    type,
    payload,
  });
}
function actionResetCreator(type: string) {
  return () => ({
    type,
  });
}

export { actionCreator, actionResetCreator };
