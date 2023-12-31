import { useEffect, useState } from "react";

export function UseFetch(url, option={}){
	const [data, setdata] = useState(null)
	const[loading , setloading] = useState(true)
	
	useEffect(()=>{
		fetch(url,{
			...option,
			headers: {
				'Accept': 'Application/json',
				...option.headers
			}
		})
		.then(repond => repond.json())
		.then(data => setdata(data))
		.finally(r => setloading(false))
	},[url])
	return { 
		data : data,
		loading : loading
	}
}