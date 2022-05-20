import { ContactsProvider } from "../contexts/ContactsContext";
import { ConversationsProvider } from "../contexts/ConversationsProvider";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { Dashboard } from "./Dashboard";
import { Login } from "./LoginPage";


function App() {

  const [id, setId] = useLocalStorage('id')
  const dashboard = (
    <ConversationsProvider id={id}>
    <ContactsProvider >
      <Dashboard id={id} />
    </ContactsProvider>
    </ConversationsProvider>
  )

  return(
  <>
  {id ? dashboard :   <Login
    onIdSubmit={setId}
  />}

  </>)
}

export default App;
