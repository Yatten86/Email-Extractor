// Query and store references to key DOM elements: input and output textareas, button, and email count display.
const rawText = document.querySelector("textarea[name=textarea]");
const outputText = document.querySelector("textarea[name=output]");
const btn = document.querySelector("button");
const counter = document.querySelector(".counter");

// Attach an event listener to the button for the 'click' event.
btn.addEventListener("click", function () {
  // Retrieve the current text entered in the input textarea.
  let temp = rawText.value;

  // Define a regular expression to identify email addresses within the text.
  // This regex looks for patterns that resemble standard email addresses.
  let regEx = /([A-Za-z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi;

  // Use the regex to find all matches within the input text, storing them in emailData.
  let emailData = temp.match(regEx);

  // Initialize an array to keep track of unique email addresses, avoiding duplicates.
  let holder = [];

  // Proceed with processing only if emailData contains any found email addresses.
  if (emailData) {
    // Iterate over each found email address.
    for (let i = 0; i < emailData.length; i++) {
      // Check if the current email address is not already included in the holder array.
      if (holder.indexOf(emailData[i]) == -1) {
        // Add the unique email address to the holder array.
        holder.push(emailData[i]);
      }
    }

    // Update the counter display with the total number of unique emails found.
    counter.innerText = "E-mails found: " + holder.length;
    // Join the unique email addresses with "; " and display them in the output textarea.
    outputText.innerText = holder.join("; ");
  } else {
    // If no email addresses were found, inform the user through the UI.
    counter.innerText = "No E-mails found.";
    outputText.innerText = "";
  }

  // For debugging: Log the unique email addresses and the original text.
  console.log("Unique email text", holder);
  console.log("Original text", temp);
});
