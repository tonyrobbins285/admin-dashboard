import { ColorModeContextProvider } from "./theme";
import { Routes, Route } from "react-router-dom";
import React from "react";
import Topbar from "./pages/global/Topbar";
import Sidebar from "./pages/global/Sidebar";
import Dashboard from "./pages/dashboard";
import { ProSidebarProvider } from "react-pro-sidebar";
import Team from "./pages/team"
import Contacts from "./pages/contacts";
import Invoices from "./pages/invoices";
import Form from "./pages/form";
import Calendar from "./pages/calendar";
import FAQ from "./pages/faq";
// import Bar from "./pages/bar";
// import Line from "./pages/line";
// import Pie from "./pages/pie";
// import Geography from "./pages/geography";
function App() {
	return (
		<ColorModeContextProvider>
			<div className="app">
				<ProSidebarProvider>
					<Sidebar />
				</ProSidebarProvider>
				<main className="content">
					<Topbar />
					<Routes>
						<Route path="/" element={<Dashboard />} />
						<Route path="/team" element={<Team />} />
						<Route path="/contacts" element={<Contacts />} />
						<Route path="/invoices" element={<Invoices />} />
						<Route path="/form" element={<Form />} />
						<Route path="/calendar" element={<Calendar />} />
						<Route path="/faq" element={<FAQ />} />
						{/* <Route path="/bar" element={<Bar />} /> */}
						{/* <Route path="/pie" element={<Pie />} /> */}
						{/* <Route path="/line" element={<Line />} /> */}
						{/* <Route path="/geography" element={<Geography />} /> */}
					</Routes>
				</main>
			</div>
		</ColorModeContextProvider>
	);
}

export default App;
