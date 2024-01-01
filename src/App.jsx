import { useState } from "react";
import "./App.css";
import IconMoon from "./assets/icon-moon.svg";
import IconSun from "./assets/icon-sun.svg";
import { Search } from "./component/Search";
import { UseFetch } from "./Hooks/usefetch";
import { Content } from "./component/content";
function App() {
  const [Mode, setMode] = useState(true);
  const [Inputvalue, setInputvalue] = useState("");
  const username = Inputvalue != "" ? Inputvalue : "octocat";
  const { data,Errorfound  } = UseFetch(
    `https://api.github.com/users/${username} `
  );
    console.log(Errorfound)

  const handlechangeMode = () => {
    setMode(!Mode);
  };
  

  const style = {
    backgroundColor: Mode ? "#F6F8FF" : "#141D2F",
    color: Mode ? "#2B3442" : "#FFF",
  };
  return (
    <div className="Container" style={style}>
		<header className="Header">
				<h1>devfinder</h1>
				<div className={Mode ? "Mode Mode-Moon" :"Mode Mode-Sun"} >
					{Mode ? "Dark" : "Light"}
					<button className="Mode" onClick={handlechangeMode}>
						{!Mode && <img src={IconSun}  alt="Icon of the sun" />}
						{Mode && <img src={IconMoon}  alt="Icon of the moon" />}
					</button>
				</div>
		</header>
      <main>
			<Search onChange={setInputvalue} Mode={Mode} ErrorFound={Errorfound} />
			{data  &&   <Content body={data} Mode={Mode} />}
      </main>
    </div>
  );
}

export default App;
