import { useState } from "react";

const MessageBubble = ({ message }) => {
  return (
    <div className="chatbot__bubble">
      <div className="chat-icon">&#128540;</div>
      <div className="chat-message">
        <span>{message}</span>
      </div>
    </div>
  );
}

const Chatbot = () => {
  const [comments, setComments] = useState([]);

  const handleSend = (event) => {
    if (event.key !== 'Enter') return;

    // Make api call to post the mssage to server
    const message = event.target.value;
    setComments(pre => [...pre, message]);
    event.target.value = '';
  }

  return (
    <div className="container">
      <div className="chatbot">
        <div className="chatbot__message">
          {comments.map((comment, idx) => (
            <MessageBubble key={idx} message={comment} />
          ))}
        </div>

        <div className="chatbot__input">
          <input type="text" onKeyDown={handleSend} />
        </div>
      </div>
    </div>
  );

}

export default Chatbot;