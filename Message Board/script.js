function addMessage() {
    // Get the message from the text area
    var message = document.getElementById("messageInput").value;

    // Check if the message is not empty
    if (message.trim() !== "") {
        // Create a new paragraph element
        var paragraph = document.createElement("p");

        // Create a text node with the message
        var textNode = document.createTextNode(message);

        // Append the text node to the paragraph
        paragraph.appendChild(textNode);

        // Get the messages container and append the new paragraph
        var messagesContainer = document.getElementById("messages");
        messagesContainer.appendChild(paragraph);

        // Clear the text area for the next message
        document.getElementById("messageInput").value = "";
    }
}
