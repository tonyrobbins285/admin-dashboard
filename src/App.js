import { ColorModeContextProvider } from "./theme";
import { Routes, Route } from "react-router-dom";
import React from "react";
import Topbar from "./pages/global/Topbar";
import Sidebar from "./pages/global/Sidebar";
import Dashboard from "./pages/dashboard";
// import Team from "./pages/team";
// import Invoices from "./pages/invoices";
// import Contacts from "./pages/contacts";
// import Bar from "./pages/bar";
// import Form from "./pages/form";
// import Line from "./pages/line";
// import Pie from "./pages/pie";
// import FAQ from "./pages/faq";
// import Geography from "./pages/geography";
// import Calendar from "./pages/calendar";
function App() {
	return (
		<ColorModeContextProvider>
			<div className="app">
				<Sidebar />
				<main className="content">
					<Topbar />
					<Routes>
						<Route path="/" element={<Dashboard />} />
						{/* <Route path="/team" element={<Team />} /> */}
						{/* <Route path="/contacts" element={<Contacts />} /> */}
						{/* <Route path="/invoices" element={<Invoices />} /> */}
						{/* <Route path="/form" element={<Form />} /> */}
						{/* <Route path="/bar" element={<Bar />} /> */}
						{/* <Route path="/pie" element={<Pie />} /> */}
						{/* <Route path="/line" element={<Line />} /> */}
						{/* <Route path="/faq" element={<FAQ />} /> */}
						{/* <Route path="/geography" element={<Geography />} /> */}
						{/* <Route path="/calendar" element={<Calendar />} /> */}
					</Routes>
				</main>
			</div>
		</ColorModeContextProvider>
	);
}

export default App;
