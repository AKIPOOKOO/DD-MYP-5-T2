document.addEventListener("DOMContentLoaded", function () {
  const localButton = document.getElementById("local-button");
  const newcomerButton = document.getElementById("newcomer-button");

  // Function to create a container
  const createContainer = (userInfo, containerId, userType) => {
    const container = document.createElement("div");
    container.classList.add("local-container-box");
    container.innerHTML = `
      <h2>${userInfo.name}</h2>
      <p><strong>Hobbies and Interests:</strong> ${userInfo.hobbies}</p>
      <p><strong>Personality:</strong> ${userInfo.personality}</p>
      <p><strong>Skills:</strong> ${userInfo.skills}</p>
      <button class="chat-button" data-user-type="${userType}" data-user-name="${userInfo.name}">Chat</button>
    `;

    const containerDiv = document.getElementById(containerId);
    if (containerDiv) {
      containerDiv.appendChild(container);
    }

    // Add event listener to chat button
    const chatButtons = document.querySelectorAll(".chat-button");
    chatButtons.forEach((button) => {
      button.addEventListener("click", function () {
        const userType = button.getAttribute("data-user-type");
        const userName = button.getAttribute("data-user-name");
        // Navigate to the chat page with user type and username
        window.location.href = `chat.html?userType=${userType}&userName=${userName}`;
      });
    });
  };

  if (localButton) {
    localButton.addEventListener("click", function () {
      const hobbies = document.getElementById("hobbies").value;
      const personality = document.getElementById("personality").value;
      const skills = document.getElementById("skills").value;
      const name = document.getElementById("name").value;

      const existingUserInfo = JSON.parse(localStorage.getItem("user-info")) || [];

      const userInfo = {
        name,
        hobbies,
        personality,
        skills,
      };

      existingUserInfo.push(userInfo);

      localStorage.setItem("user-info", JSON.stringify(existingUserInfo));

      document.getElementById("hobbies").value = "";
      document.getElementById("personality").value = "";
      document.getElementById("skills").value = "";
      document.getElementById("name").value = "";

      createContainer(userInfo, "local-containers", "local");
    });
  }

  if (newcomerButton) {
    newcomerButton.addEventListener("click", function () {
      const hobbies = document.getElementById("hobbies").value;
      const personality = document.getElementById("personality").value;
      const skills = document.getElementById("skills").value;
      const name = document.getElementById("name").value;

      const existingNewcomerInfo = JSON.parse(localStorage.getItem("newcomer-info")) || [];

      const newcomerInfo = {
        name,
        hobbies,
        personality,
        skills,
      };

      existingNewcomerInfo.push(newcomerInfo);

      localStorage.setItem("newcomer-info", JSON.stringify(existingNewcomerInfo));

      document.getElementById("hobbies").value = "";
      document.getElementById("personality").value = "";
      document.getElementById("skills").value = "";
      document.getElementById("name").value = "";

      createContainer(newcomerInfo, "newcomer-containers", "newcomer");
    });
  }
});
