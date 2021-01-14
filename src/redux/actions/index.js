export const backToStartPage = () => {
  return {
    type: "BACK_TO_START_PAGE",
  };
};

export const toggleEditingMode = (data) => { 
  return {
    type: "TOGGLE_EDITING_MODE",
    payload: data,
  };
};

 

export const toggleMode = (data) => {
  return {
    type: "TOGGLE_MODE",
    payload: data,
  };
};

export const setOpacityValue = (data) => { 
  return {
    type: "SET_OPACITY_VALUE",
    payload: data,
  };
};

export const setPaddingValue = (data) => { 
  return {
    type: "SET_PADDING_VALUE",
    payload: data,
  };
};


export const SetTopEdgeValue = (data) => { 
  return {
    type: "SET_TOP_EDGE_VALUE",
    payload: data,
  };
};

export const SetLeftEdgeValue = (data) => { 
  return {
    type: "SET_LEFT_EDGE_VALUE",
    payload: data,
  };
};

export const setFontName = (data)=>{ 
  return{
    type:"SENT_FONT_NAME",
    payload: data,
  }
}
export const setFontSizeValue = (data) => { 
  return {
    type: "SENT_FONT_SIZE",
    payload: data,
  };
};

export const setText = (data) => {
  return {
    type: "SET_TEXT",
    payload: data,
  };
};

export const setColorValue = (data)=>{
  return{
    type: "SET_COLOR_VALUE",
    payload: data,
  }
}



export const setWidthValue = (data)=>{
  return{
    type:"SET_WIDTH_VALUE",
    payload: data,
  }
}

export const setHeightValue = (data)=>{ 
  return{
    type:"SET_HEIGHT_VALUE",
    payload: data,
  }
}

export const setCanvasWidth = (data)=>{
  return{
    type:"SET_CANVAS_WIDTH",
    payload: data,
  }
}

export const setCanvasHeight = (data)=>{
  return{
    type:"SET_CANVAS_HEIGHT",
    payload: data,
  }
}


