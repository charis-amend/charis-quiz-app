console.clear();

// form creating new cards:
//getting to the whole form
const formNewCard = document.querySelector('[data-js="formNewCard"]');
// getting  the inputs
const questionInput = document.querySelector('[data-js="question-input-js"]');
const answerInput = document.querySelector('[data-js="answer-input-js"]')
const tagInput = document.querySelector('[data-js="tag-input-js"]')
// and getting submit button 
const submitButton = document.querySelector('[data-js="forms-submit-button"]');
// getting the section where the new Questioncards go
const newCreatedQuestionsSection = document.querySelector('[data-js="newCreatedQuestionsSection"]')


// maximum length for form fields questioni and answer
const characterLeftQuestionInput = document.querySelector('[data-js="question-characters-left"]')
const MAX_CHARACTERSQUESTIONINPUT = 50;
const charactersLeftAnswerInput = document.querySelector('[data-js="answer-characters-left"]');
const MAX_CHARACTERSANSWERINPUT = 30;

formNewCard.addEventListener("submit", (event) => {
    event.preventDefault();

    // tried this-didnt work
    // const formNewCard = new FormData(event.target);
    // console.log("form results:", formNewCard);
    // const dataFromInputs = Object.fromEntries(formNewCard);
    // console.log(dataFromInputs);


    // this works:
    const newQuestionSubmitted = document.createElement("article");
    newQuestionSubmitted.classList.add("question-card");
    // event.target.{name of the html input field}. value
    // defining varibales for the values inside the input fields
    const questionCardInput = event.target.forms__questionInput.value;
    const answerCardInput = event.target.forms__answerInput.value;
    const tagCardInput = event.target.forms__tagInput.value;

    newQuestionSubmitted.innerHTML = `
        <h2 class="question-card__question">
            ${questionCardInput}</h2>
          <button
            class="question-card__bookmark-button"
            data-js="question-card-bookmark-button">
            <img
              class="question-card-bookmark-button__img"
              data-js="question-card-bookmark-picture"
              src="./resources/bookmark_unfilled.png"
              alt="unfilled-bookmark-pic" />
          </button>
          <button
            class="question-card_button-answer"
            data-js="question-card-button">
            SHOW ANSWER
          </button>
          <p
            class="question-card__answer"
            data-js="question-card-answer"
            hidden>
            ${answerCardInput}
          </p>
          <section class="question-card__tags-section">
            <ul class="question-card__tags-list">
              <li class="question-card__tag-item">${tagCardInput}</li>
            </ul>
          </section>
    `

    newCreatedQuestionsSection.append(newQuestionSubmitted);

    //reseting value inputs:
    event.target.reset();


    // adding answer button interacitiv:
    const answerShowHideButton = newQuestionSubmitted.querySelector('[data-js="question-card-button"]');
    answerShowHideButton.addEventListener("click", (event) => {
        const questionCardAnswer = document.querySelector('[data-js="question-card-answer"]');
        questionCardAnswer.hidden = !questionCardAnswer.hidden;
    });

    // adding bookmark button: 
    questionCardBookmarkButton.addEventListener("click", (eventBookmark) => {

        // say that if let questionCardBookmarked is as defined above (=default/false/unfilled) then...
        if (questionCardBookmarked) {
            questionCardBookmarkPicture.src = "./resources/bookmark_unfilled.png";
            questionCardBookmarkPicture.alt = "filled-bookmark-pic";
        }

        // if questionCardBookmarked is true/filled (!questionCardBookmarked = false) then...
        else if (!questionCardBookmarked) {
            questionCardBookmarkPicture.src = "./resources/bookmark_filled.png";
            questionCardBookmarkPicture.alt = "unfilled-bookmark-pic";
        }

        // then say if first condition was true (questionBookMarked = false) then change next time when user clicks: 
        questionCardBookmarked = !questionCardBookmarked
    });

});


// making maximum for question input field:
questionInput.addEventListener("input", (e) => {
    // what is being typed:
    console.log(e.target.value.length);
    characterLeftQuestionInput.textContent = MAX_CHARACTERSQUESTIONINPUT - parseInt(e.target
        .value.length);
});

// maxing maximum for answer input field
answerInput.addEventListener("input", (e) => {
    charactersLeftAnswerInput.textContent = MAX_CHARACTERSANSWERINPUT - parseInt(e.target.value.length);
});


