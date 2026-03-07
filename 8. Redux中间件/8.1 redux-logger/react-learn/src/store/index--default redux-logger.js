import { createStore } from "../redux";
import reducer from "./reducer";
import { createDeleteUserAction } from "./action/userAction";
import { createSetLoginUserAction } from "./action/loginUserAction";
import { v4 as uuid } from "uuid";
import applyMiddleware from "../redux/applyMiddleware";
import logger from "redux-logger";

const store = createStore(reducer, applyMiddleware(logger));

store.dispatch(createDeleteUserAction(1));
store.dispatch(createSetLoginUserAction({ id: uuid(), name: "用户 login", age: 1 }));

