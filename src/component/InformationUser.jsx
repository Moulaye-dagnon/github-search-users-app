import "./InformationUser.css";
export function InformationUser({ body, Mode }) {
  const style = {
    background: Mode ? "#fff" : "#1E2A47",
    color: Mode ? "#4B6A9B" : "#FFF",
  };
  const username = body.name ? body.name : body.login;
  const dateAndTime = body.created_at;
  const dateOnly = new Date(dateAndTime.split("T")[0]);
  var format = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  const dateUser = dateOnly
    .toLocaleDateString("fr", format)
    .trim()
    .toUpperCase();

  return (
    <div style={style} className="content-container">
      <div className="img-avatar">
        <img src={body.avatar_url} alt="" />
      </div>
      <div className="info-profil">
        <div className="main-info">
          <div className="name-profil">
            <h1 className="user-name">{username}</h1>
            <h3 className="user-login"> @{body.login}</h3>
          </div>
          <p className="Joined">{dateUser}</p>
        </div>
        <p className={`bio ${!body.bio ? "bio-empty" : ""}`}>
          {body.bio ? body.bio : "This profile has no bio"}
        </p>
        <div
          className="info-account"
          style={{ background: Mode ? "#F6F8FF" : "#141D2F" }}
        >
          <p>
            Repos <span>{body.public_repos}</span>
          </p>
          <p>
            Followers <span>{body.followers}</span>
          </p>
          <p>
            Following <span>{body.following}</span>
          </p>
        </div>
        <div className="contact">
          <div
            className="icon location"
            style={{ opacity: !body.location ? "0.4" : "1" }}
          >
            {body.location ? body.location : "Not Available"}
          </div>
          <a
            href={body.blog ? body.blog : ""}
            className="icon blog"
            style={{ opacity: !body.blog ? "0.4" : "1" }}
          >
            {body.blog ? body.blog : "Not Available"}
          </a>
          <a
            href={body.twitter_username ? body.twitter_username : ""}
            className="icon twitter"
            style={{ opacity: !body.twitter_username ? "0.4" : "1" }}
          >
            {body.twitter_username ? body.twitter_username : "Not Available"}
          </a>
          <a
            href={
              body.company
                ? `https://github.com/${body.company.replace("@", "")}`
                : "Not Available"
            }
            className="icon company"
            style={{ opacity: !body.company ? "0.4" : "1" }}
          >
            {body.company ? body.company.replace("@", "") : "Not Available"}
          </a>
        </div>
      </div>
    </div>
  );
}
