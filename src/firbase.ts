import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyClLWgn72M921c-U_5wGuVnZ4NWchV41lY",
  authDomain: "test-project-49083.firebaseapp.com",
  projectId: "test-project-49083",
  storageBucket: "test-project-49083.appspot.com",
  messagingSenderId: "968002386304",
  appId: "1:968002386304:web:0130e4cf0f035d0dfbe965",
  databaseUrl: "https://test-project-49083-default-rtdb.firebaseio.com",
};

export const app = initializeApp(firebaseConfig);
