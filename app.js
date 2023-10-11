import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
      import {
        getDatabase,
        ref,
        set,
        get,
        child,
      } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js";
      // import { firebaseConfig } from "./firebase-config.js"; // Import the Firebase configuration from an external file

      const firebaseConfig = {
        apiKey: "AIzaSyACce4grYk3L7D9gTsXW1hNV1HVtZUUTLo",
        authDomain: "registration-59130.firebaseapp.com",
        projectId: "registration-59130",
        storageBucket: "registration-59130.appspot.com",
        messagingSenderId: "766743602357",
        appId: "1:766743602357:web:0dd0b9a6378c7686d78afc",
      };

      const app = initializeApp(firebaseConfig);
      const db = getDatabase(app);

      document
        .getElementById("submit")
        .addEventListener("click", function (e) {
          e.preventDefault();

        //   // Check if the username or email already exists
        //   const usernameExists = await checkUsernameExists(username);
        // //   const emailExists = await checkEmailExists(email);

        //   if (usernameExists ) {
        //     alert("User already exists.");
        //     return;
        //   }

          set(ref(db, "user/" + document.getElementById("username").value), {
            username: document.getElementById("username").value,
            email: document.getElementById("email").value,
            phoneNumber: document.getElementById("phone").value,
            password: document.getElementById("password").value,
          });

          alert("Registration successful!");
        });

    //   async function checkUsernameExists(username) {
    //     const usernameRef = ref(db, "user/" + username);
    //     console.log(usernameRef);
    //     const usernameSnapshot = await get(usernameRef);
    //     return usernameSnapshot.exists();
    //   }