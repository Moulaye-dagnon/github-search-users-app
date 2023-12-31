import './content.css'
import Iconlocation from '../assets/icon-location.svg'
import Iconcompany from '../assets/icon-company.svg'
import Icontwitter from '../assets/icon-twitter.svg'
import Iconwebsite from '../assets/icon-website.svg'
export function Content({body, Mode}){
	const style = {
		background : Mode ? '#fff' : '#1E2A47' ,
		color : Mode ? '#4B6A9B' : '#FFF'	
	 }
	const username = body.name != "" ? body.name : body.login
	 const d = body.created_at
	const dateC = new Date(d.split("T")[0]) 
	var format = {
		'year': 'numeric', 
		'month' : 'short',
		'day' : 'numeric'
            }
	const date = dateC.toLocaleDateString('fr', format).trim().toUpperCase()	

	return <div style={style} className="content-container">
				<div className='img-avatar'>
					<img src={body.avatar_url} alt="" />
				</div>
				<div className='info-profil'>
					<div className='main-info'>
						<div className='name-profil'>
							<h1 className='user-name'>{username}</h1>
							<h3 className='user-login'> @{body.login}</h3>
						</div>
						<p className='Joined'>{date}</p>
					</div>
					<p className='bio'>
						{body.bio ?  body.bio : 'This profile has no bio'}
					</p>
					<div className='info-account' style={{	background : Mode ?'#F6F8FF' : '#141D2F' ,}}>
						<p>Repos <span>{body.public_repos}</span></p>
						<p>Followers <span>{body.followers}</span></p>
						<p>Following <span>{body.following}</span></p>
					</div>
					<div className='contact'>
						<div  className='icon-contact' style={{opacity: !body.location ? '0.4' :'1' }}>
							<img src={Iconlocation} alt="" />
							<span>
								{body.location ?  body.location : 'Not Available'}
							</span>
						</div>
						<a href={body.blog ? body.blog : ''} className='icon-contact' style={{opacity: !body.blog ? '0.4' :'1' }}>
							<img src={Iconwebsite} alt="" />
							<span>
								{body.blog ?  body.blog : 'Not Available'}
							</span>
						</a >
						<a href={body.twitter_username ? body.twitter_username : ''} className='icon-contact'  style={{opacity: !body.twitter_username ? '0.4' :'1' }}>
							<img src={Icontwitter} alt="" />
							<span>
								{body.twitter_username ?  body.twitter_username : 'Not Available'}
							</span>
						</a >
						<a href='https://github.com/github' className='icon-contact' style={{opacity: !body.company ? '0.4' :'1' }}>
							<img src={Iconcompany} alt="" />
							<span>
								{body.company ?  body.company : 'Not Available'}
							</span>
						</a >
					</div>

				</div>

		</div> 
		
	
}