import React, { useState } from 'react'
import './App.css'; 
import { BsSearch } from 'react-icons/bs'; 

function App() { 
	const employeeList = ["Ajith webdeveloper"
		, "Balu Testing"
		, "Balaji webdeveloper"
		, "Karthi Testing"
		, "Kannan Bpo"
		, "Hari Testing"
		, "Ezhil webdeveloper"
		, "Ravi Bpo"
		, "Saravanan Bpo"
		, "Anbu webdeveloper"
		, "Kumar Testing"
		, "Dharun webdeveloper"
		, "Vijay Testing"
		, "Shiva webdeveloper"]; 
	const [employees, setEmployees] = useState(employeeList); 
	const [searchVal, setSearchVal] = useState(""); 
	function handleSearchClick() { 
		if (searchVal === "") { setEmployees(employeeList); return; } 
		const filterBySearch = employeeList.filter((name) => { 
			if (name.toLowerCase() 
				.includes(searchVal.toLowerCase())) { return name; } 
		}) 
		setEmployees(filterBySearch); 
	} 
	const mystyle = { 
		marginLeft: "600px", 
		marginTop: "20px", 
		fontWeight: "700"
	}; 

	return ( 
		<div> 
			<div style={mystyle}> 
				<input onChange={e => setSearchVal(e.target.value)}> 
				</input> 
				<BsSearch onClick={handleSearchClick} /> 
			</div> 
			<div> 

				{employees.map((employee) => { 
					return ( 
						<div style={mystyle}>{employee}</div> 
					) 
				}) 
				} 

			</div> 
		</div> 
	); 
} 

export default App;
