import { ThemeProvider } from "@/components/context/theme-provider";
import { LoadingProvider } from "@/components/context/LoadingProvider";
import Loader from "@/components/ui/Loader/Loader";
import Layout from "@/Layout";
import { Provider } from "react-redux"; 
import { store } from "@/redux/store";       

function App() {
  return (
    //for accessing states of reducers from redux store
    <Provider store={store}> 
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <LoadingProvider>
          <Loader />
          <Layout />
        </LoadingProvider>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
