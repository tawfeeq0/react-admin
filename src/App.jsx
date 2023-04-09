import Topbar from "./pages/global/Topbar";
import Sidebar from "./pages/global/Sidebar";
import { ProSidebarProvider } from "react-pro-sidebar";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import { useState } from "react";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <Router>
          <CssBaseline />
          <div className="app">
            <ProSidebarProvider>
              <Sidebar isSidebar={isSidebar}>
                <main className="content">
                  <Topbar />
                  <Routes>
                    <Route path="/" element={<Dashboard />} />
                  </Routes>
                </main>
              </Sidebar>
            </ProSidebarProvider>
          </div>
        </Router>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
