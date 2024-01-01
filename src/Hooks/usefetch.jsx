import { useEffect, useState } from "react";

export function UseFetch(url, option={}){
	const [data, setdata] = useState(null)
	const [Errorfound , setErrorfound ] = useState(false)
	useEffect(()=>{
		async function userfetch (api){
			setErrorfound(false)
			try {
				const reponse = await  fetch(api,{
					...option,
					headers: {
						'Accept': 'Application/json',
						...option.headers
					}
				})
				if(reponse.ok){
					const Data = await reponse.json()
					setdata(Data)
				}else{
					throw new Error('Error chargement')
				}
				
			} catch (e) {
				setErrorfound(true)
			}
		}
		userfetch(url)
		
	},[url])
	return { 
		data : data,
		Errorfound : Errorfound
	}
}