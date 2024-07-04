import React from "react";
import { Box } from "@mui/material";
import ButtonAppBar from "./AppBar";
import PermanentDrawerLeft from "./PermanentDrawer";
import { Provider } from "react-redux";
import { store } from "./store/store";
import Counter from "./components/usestatecounterbeautified";
import Counter1 from "./components/usestatecounter1";
import Counter2 from "./components/usestatecounter2beautified";
import Counter3 from "./components/usestatecounter3";
import Counter4 from "./components/usestatecounter4";

const CounterBox = ({ children, justifyContent, alignItems }) => (
  <Box
    component="main"
    sx={{
      flexGrow: 1,
      padding: 3,
      display: "flex",
      justifyContent: justifyContent,
      alignItems: alignItems,
      border: '0px solid gray', // Add a border for better visual differentiation
      boxSizing: "border-box", // Ensure padding and border are included in the element's total width and height
      minWidth: '100px', // Minimum width for the boxes
    }}
  >
    {children}
  </Box>
);
function App() {
  return (
    <div className="app">
      <Provider store={store}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            height: "160vh",
            backgroundImage: "linear-gradient(grey,white,black,grey)" // Change background color here
          }}
        >
          <ButtonAppBar /><Box sx={{ display: "flex", flexDirection: "row", marginTop: "64px" }}>
            <PermanentDrawerLeft />
            <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 3 }}>

              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <CounterBox justifyContent="flex-start" alignItems="flex-start">
                  <Counter />
                </CounterBox>
                <CounterBox justifyContent="flex-end" alignItems="flex-start">
                  <Counter1 />
                </CounterBox>
              </Box>

             {/* <Box sx={{ display: "flex", justifyContent: "center" }}>
                <CounterBox justifyContent="center" alignItems="center">
                  <Counter2 />
                </CounterBox>
                </Box>

              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <CounterBox justifyContent="flex-start" alignItems="flex-end">
                  <Counter3 />
                </CounterBox>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}> 
                <CounterBox justifyContent="flex-end" alignItems="flex-end">
                  <Counter4 />
                </CounterBox>*/}

                </Box>
              </Box>
            </Box>

      </Provider>
    </div>
  );
}

export default App;