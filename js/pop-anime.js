 document.addEventListener("DOMContentLoaded", () => {
    // Create the popup box dynamically
    const popupBox = document.createElement("div");
    popupBox.id = "popupBox";
    popupBox.classList.add("hidden");
    popupBox.setAttribute("role", "dialog");
    popupBox.setAttribute("aria-modal", "true");
    popupBox.setAttribute("aria-labelledby", "popupTitle");

    popupBox.innerHTML = `
        <div class="popup-content">
            <span id="closeButton" class="close" role="button" aria-label="Close">&times;</span>
            <h2 id="popupTitle">Information</h2>
            <p>Language is encoded in the video. Choose the language option in the video settings.</p>
            <img 
                src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEivkDrBYpt0YtR3dNuq-oh6T46GVeacRYbCun7OWV22dBw0az_ixioGalWFy16_Z7kBXnHziypf_NUtxhZB8d87MEMftYzBTvXb5rD7eLnNtAmvECPS_qOVu59nhnQKKKMZ_Wa4P2co1yTK1HtHbAVh4g7N35HssjovMIdhNMsFvfL3wn62lOoUh3qddBYo/s320/Screenshot%202024-12-30%20155107.png" 
                alt="Popup Info Image" 
                class="popup-image"
            >
        </div>
    `;
    document.body.appendChild(popupBox);

    // Add CSS styles dynamically
    const style = document.createElement("style");
    style.textContent = `
        body {
            font-family: Arial, sans-serif;
        }

        #popupBox {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.7);
            display: flex;
            justify-content: center;
            align-items: center;
            opacity: 0;
            visibility: hidden;
            transition: opacity 0.3s ease, visibility 0.3s ease;
            z-index: 1000;
        }

        #popupBox:not(.hidden) {
            opacity: 1;
            visibility: visible;
        }

        .popup-content {
            background-color: white;
            padding: 20px;
            border-radius: 10px;
            width: 400px;
            text-align: center;
            box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
            position: relative;
        }

        .popup-content .close {
            position: absolute;
            top: 10px;
            right: 10px;
            font-size: 24px;
            font-weight: bold;
            cursor: pointer;
            color: #333;
        }

        .popup-content h2 {
            margin: 0 0 15px;
            font-size: 20px;
            color: #444;
        }

        .popup-content p {
            margin: 0 0 15px;
            font-size: 16px;
            color: #666;
        }

        .popup-content .popup-image {
            width: 100%;
            height: auto;
            border-radius: 8px;
            margin-top: 15px;
        }

        button {
            padding: 10px 20px;
            font-size: 16px;
            cursor: pointer;
        }
    `;
    document.head.appendChild(style);

    // Handle popup functionality
    const popupButton = document.getElementById("popupButton");
    const closeButton = document.getElementById("closeButton");
    let closeTimer;

    popupButton.addEventListener("click", () => {
        popupBox.classList.remove("hidden");

        // Start a timer to close the popup after 8 seconds
        closeTimer = setTimeout(() => {
            popupBox.classList.add("hidden");
        }, 8000);
    });

    closeButton.addEventListener("click", () => {
        popupBox.classList.add("hidden");
        clearTimeout(closeTimer); // Clear the timer
    });

    popupBox.addEventListener("click", (event) => {
        if (event.target === popupBox) {
            popupBox.classList.add("hidden");
            clearTimeout(closeTimer); // Clear the timer
        }
    });
});
