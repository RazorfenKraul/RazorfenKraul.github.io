const overallRatingCbs = document.querySelectorAll('.overall-rating-cb');
const clearBtn = document.querySelector('.clear-btn');
const addHeadlineInp = document.querySelector('.add-headline-inp');
const writtenReviewInp = document.querySelector('.written-review-inp');
const reviewForm = document.querySelector('.review-form');

function clearRating() {
  overallRatingCbs.forEach(function(overallRatingCb){
    overallRatingCb.className = 'overall-rating-cb fa fa-star-o';
  });
}

function fillRating(overallRatingCb) {
  overallRatingCb.addEventListener('click', function(){
    clearRating();
    let curCb = overallRatingCb;
    while(curCb) {
      curCb.className = 'overall-rating-cb fa fa-star';
      curCb = curCb.previousElementSibling;
    }
  });
}

function addReviewHandler(e) {
  e.preventDefault();

  const headline = addHeadlineInp.value.trim();
  const review = writtenReviewInp.value.trim();
  const rating = document.querySelectorAll('.overall-rating-cb.fa-star');

  if(headline.length && review.length && rating.length) {
    alert('Successfully posted!');
    addHeadlineInp.value = '';
    writtenReviewInp.value = '';
    clearRating();
  } else {
    alert('Content missing');
  }
} 

clearBtn.addEventListener('click', clearRating);
overallRatingCbs.forEach(function(overallRatingCb){
  fillRating(overallRatingCb);
});
reviewForm.addEventListener('submit', addReviewHandler);