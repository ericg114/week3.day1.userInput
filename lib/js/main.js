$(document).ready(function () {
    const submitButton = $("#submit_button");
    const formContainer = $(".form_container");
    const storyResult = $("#story_result");
    const mainTitle = $("#main_title");

    const titleInput = $("#title_input");
    const nounInput = $("#noun");
    const verbInput = $("#verb");
    const adjectiveInput = $("#adjective");
    const adverbInput = $("#adverb");
    const exclamationInput = $("#exclamation");

    titleInput.on("input", function () {
        mainTitle.text(titleInput.val());
    });

    submitButton.on("click", function (event) {
        event.preventDefault();

        const title = titleInput.val().trim();
        const noun = nounInput.val().trim();
        const verb = verbInput.val().trim();
        const adjective = adjectiveInput.val().trim();
        const adverb = adverbInput.val().trim();
        const exclamation = exclamationInput.val().trim();

        if (title === "" || noun === "" || verb === "" || adjective === "" || adverb === "" || exclamation === "") {
            alert("Please fill in all fields.");
        } else {
            const storyTemplate = `Last night, ${title} ate a ${noun} ${adverb}, and exclaimed "${exclamation}!" Today, they just had to ${verb}. What a ${adjective} day!`;
            storyResult.text(storyTemplate);

            formContainer.fadeOut(500);
        }
    });
});