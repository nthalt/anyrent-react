
const HostDetailInfo = () => {
  return (
    <div className="host-detail-info">
        <br /><br /><hr /><br /><br />
      <div className="host-card-container">
        <h1>Meet your Host</h1>
        <div className="profile-card">
          <div className="profile-header">
            <div className="profile-image">
              <img src="images/host.jpg" alt="Fernando" />
              <div className="heart-icon">❤️</div>
              <h2 className="profile-name">Fernando</h2>
              <div className="profile-badge">Superhost</div>
            </div>
            <div className="profile-stats">
              <div className="reviews">
                310 reviews
                <hr />
              </div>
              <div className="rating">
                4.92★ rating
                <hr />
              </div>
              <div className="profile-hosting">
                7 Years hosting
                <hr />
              </div>
            </div>
          </div>
        </div>
        <div className="host-details">
            <br />
          <div className="detail-item">
            <img src="images/host.jpg" alt="" />
            <span>Born in the 80s</span>
          </div>
          <div className="detail-item">
            <img src="images/chat.png" alt="" />
            <span>My work: Hospitality</span>
          </div>
          <br />
          <p>
            Hello world! I love traveling and I also love welcoming guests in my home country, Perú, meeting new...
          </p>
          <a href="#">Show more &gt;</a>
        </div>
        <div>
          <div className="superhost-info">
            <br />
            <h3>Fernando is a Superhost</h3>
            <p>
              Superhosts are experienced, highly rated hosts who are committed to providing great stays for guests.
            </p>
          </div>
          <br />
          <h3>Co-hosts</h3>
          <div className="co-hosts">
            <div className="co-host">
              <img src="images/host.jpg" alt="host1" />
              <span>Percy</span>
            </div>
            <div className="co-host">
              <img src="images/host.jpg" alt="host2" />
              <span>Raul</span>
            </div>
          </div>
        </div>
        <div className="host-details">
            <br />
          <h3>Host details</h3>
          <p>
            Response rate: 100%<br />
            Responds within an hour
          </p>
        </div>
        <br />
        <button className="material-button">Message Host</button>
      </div>
    </div>
  );
};

export default HostDetailInfo;
