import { DATA } from "../../data";
import { DEFAULT_DATA } from "../../data";

export const editorReducer = (state = DATA, action) => {
  switch (action.type) {
    case "BACK_TO_START_PAGE":
      return { ...DEFAULT_DATA };
    case "SET_TEXT":
      return { ...state, value: action.payload };
    case "TOGGLE_EDITING_MODE":
      return { ...state, type: action.payload };
    case "SET_OPACITY_VALUE":
      return { ...state, opacity: action.payload };
    case "SENT_FONT_SIZE":
      return { ...state, fontSize: action.payload };
    case "SENT_FONT_NAME":
      return { ...state, fontPath: action.payload };
    case "TOGGLE_MODE":
      return { ...state, mode: action.payload };
    case "SET_COLOR_VALUE":
      return { ...state, color: action.payload };
    case "SET_PADDING_VALUE":
      return { ...state, padding: action.payload };
    case "SET_WIDTH_VALUE":
      return {
        ...state,
        imageCropParams: { ...state.imageCropParams, width: action.payload },
      };
    case "SET_HEIGHT_VALUE":
      return {
        ...state,
        imageCropParams: { ...state.imageCropParams, height: action.payload },
      };
    case "SET_TOP_EDGE_VALUE":
      return {
        ...state,
        imageCropParams: { ...state.imageCropParams, top: action.payload },
      };
    case "SET_LEFT_EDGE_VALUE":
      return {
        ...state,
        imageCropParams: { ...state.imageCropParams, left: action.payload },
      };
       
      case "SET_CANVAS_WIDTH":
          return { ...state, canvasWidth: action.payload };
      case "SET_CANVAS_HEIGHT":
            return { ...state, canvasHeight: action.payload };
    default:
      return state;
  }
};
