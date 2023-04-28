import React from 'react';
import './Reviews.css';


function Reviews(props) {
  const { reviews } = props;

  return (
    <div className="reviews-container">
      <h2 className="reviews-title">Reviews</h2>
      <ul className="reviews-list">
        {reviews.map((review, index) => (
          <li key={index} className="review-item">
            <p className="review-author">{review.author}</p>
            <p className="review-comment">{review.comment}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Reviews;