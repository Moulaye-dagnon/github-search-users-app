import './Search.css'
import IconSearch from '../assets/icon-search.svg'
import { useState } from 'react'
export function Search({onChange, Mode }){
	const [Inputvalue,setInputvalue] = useState('')
	 const handleSubmit = (e)=>{
		e.preventDefault()
		onChange(Inputvalue)	
	 }
	 const style = {
		background : Mode ? '#fff' : '#1E2A47' ,
		color : Mode ? '#2B3442' : '#FFF'	
	 }
	return < form onSubmit={handleSubmit} className="Input">
		<label htmlFor="Icon_search">
			<img src={IconSearch} alt="" />
		</label>
		<input type="text"
		id='Icon_search'
		placeholder='Search GitHub username…'
		value={Inputvalue}
		onChange={e=> setInputvalue(e.target.value)}
		style={style}
		 />
		<button type='submit'> Search</button>
	</form>
}