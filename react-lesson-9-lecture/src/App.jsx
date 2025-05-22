import "./App.css";
import EmailForm from "./components/EmailForm";
import RegistrationForm from "./components/RegistrationForm";
import SimpleForm from "./components/SimpleForm";
import UsernameForm from "./components/UsernameForm";

function App() {
  return (
    <>
      <RegistrationForm />
      <SimpleForm />
      <EmailForm />
      <UsernameForm validationMode="onSubmit" />
    </>
  );
}

export default App;
