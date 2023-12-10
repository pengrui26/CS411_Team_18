import { useState } from "react";

function Chat() {
  const chatIframeStyle = {
    position: "fixed",
    bottom: "24%",
    right: "1%",
    width: "450px",
    height: "350px",
    borderRadius: "15px",
    border: "none",
    boxShadow: "0 19px 38px lightgray, 0 15px 12px lightgray",
    paddingTop: "50px",
    backgroundColor: "rgb(162, 162, 162)",
  };

  const chatButtonStyle = {
    position: "fixed",
    bottom: "3%",
    right: "2%",
    backgroundColor: "gray",
    color: "white",
    border: "none",
    padding: "10px 20px",
    borderRadius: "80px",
    cursor: "pointer",
    height: "140px",
    width: "140px",
    fontSize: "27px",
  };

  const [chatVisible, setChatVisibility] = useState(false);

  return (
    <div>
      {chatVisible && (
        <div>
          <iframe
            id="chat_iframe"
            style={chatIframeStyle}
            src="https://jerry-deployment.vercel.app/page"
          >
            <p>iframe source loading failed.</p>
          </iframe>
          <button
            type="button"
            style={chatButtonStyle}
            onClick={() => setChatVisibility(false)}
          >
            Close chat
          </button>
        </div>
      )}
      <div>
        {!chatVisible && (
          <button
            type="button"
            style={chatButtonStyle}
            onClick={() => setChatVisibility(true)}
          >
            Chat to AI
          </button>
        )}
      </div>
    </div>
  );
}

export default Chat;
