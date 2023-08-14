// Content filtering
// Total: 000
const inappropriateWords = [
  'bad',
  'hate',
  'disgusting',
];

function isReviewValid(review) {
  const lowerCaseReview = review.toLowerCase();

  for (const word of inappropriateWords) {
    if (lowerCaseReview.includes(word)) {
      return false;
    }
  }

  return true;
}

function validateReview() {
  const reviewTextArea = document.getElementById('reviewTextArea');
  const inappropriateWordsAlert = document.getElementById('inappropriateWordsAlert');
  const review = reviewTextArea.value;

  if (isReviewValid(review)) {
    inappropriateWordsAlert.textContent = '';
    return true;
  } else {
    inappropriateWordsAlert.textContent = 'Warning: Inappropriate word detected';
    return false;
  }
}

const reviewTextArea = document.getElementById('reviewTextArea');
reviewTextArea.addEventListener('input', validateReview);

const reviewForm = document.getElementById('reviewForm');
reviewForm.addEventListener('submit', function (event) {
  if (!validateReview()) {
    event.preventDefault();
  }
});