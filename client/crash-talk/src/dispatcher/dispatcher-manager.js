import dispatchers from "./dispatchers";

const dispatcherManager = (_action) => {
  //액션 객체를 분석하여 적절한 디스패쳐 함수 실행
  const { type: actionType, data: actionData } = _action;

  if (actionType === "REGISTER") {
    return dispatchers.registerDispatcher(actionData);
  } else if (actionType === "JOIN_ROOM") {
    return dispatchers.joinRoomDispatcher(actionData);
  } else if (actionType === "LOGIN") {
    return dispatchers.loginDispatcher(actionData);
  }
};

export default dispatcherManager;
