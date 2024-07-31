import PropTypes from "prop-types";

const Location = ({ address }) => {
  return (
    <div className="location">
      <br />
      <br />
      <hr />
      <br />
      <br />
      <h3>Where you&apos;ll be</h3>
      <br />
      <p>{address}</p>
      <br />
      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d166673.88835247644!2d-77.05576186241075!3d-12.042807536888045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c5f619ee3ec7%3A0x14206cb9cc452e4a!2z4Kay4Ka_4Kau4Ka-LCDgpqrgp4fgprDgp4E!5e0!3m2!1sbn!2sbd!4v1721040981057!5m2!1sbn!2sbd"
          width="70%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div>
        <br />
        <button className="show-more-button">Show more &gt;</button>
      </div>
    </div>
  );
};

Location.propTypes = {
  address: PropTypes.string.isRequired,
};

export default Location;
