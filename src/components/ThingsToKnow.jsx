
const ThingsToKnow = () => {
  return (
    <div className="things-to-know">
      <h2>Things to know</h2>
      <div className="info-columns">
        <div className="house-rules">
          <h3>House rules</h3>
          <p>Check-in after 4:00 PM</p>
          <p>Checkout before 11:00 AM</p>
          <p>2 guests maximum</p>
          <a href="#" className="show-more">Show more</a>
        </div>
        <div className="safety-property">
          <h3>Safety & property</h3>
          <p>Carbon monoxide alarm not reported</p>
          <p>Smoke alarm not reported</p>
          <p>Not suitable for children and infants</p>
          <a href="#" className="show-more">Show more</a>
        </div>
        <div className="cancellation-policy">
          <h3>Cancellation policy</h3>
          <p>Add your trip dates to get the cancellation details for this stay.</p>
          <a href="#" className="add-dates">Add dates</a>
        </div>
      </div>
      <div className="report-listing2">
        <hr />
        <br />
        &#127859;
        <a href="#" className="report-link"><b>Report this listing</b></a>
      </div>
    </div>
  );
};

export default ThingsToKnow;
