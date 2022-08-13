import FormView from "../views/FormView.js";

const tag = "[Maincontroller]";

export default {
  init() {
    console.log("maincontroller");
    FormView.setup(document.querySelector("form"));
  },
};
