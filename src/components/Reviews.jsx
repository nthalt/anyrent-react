const Reviews = () => {
  return (
    <div className="reviews">
      <br />
      <br />
      <hr />
      <br />
      <br />
      <h3>No reviews (yet)</h3>
      <div className="review-detail">
        <div className="review-detail-icon">
          <button>&#11088;</button>
        </div>
        <div className="other-review">
          This host has 310 reviews for other places to stay.
          <button className="other-review-button">Show other reviews</button>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
