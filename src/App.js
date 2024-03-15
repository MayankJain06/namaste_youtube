import "./App.css";
import Head from "../src/Components/Head";
import Body from "./Components/Body";
import MainContainer from "./Components/MainContainer"
import { Provider } from "react-redux";
import store from "./utils/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import WatchPage from "./Components/WatchPage";

const appRouter = createBrowserRouter([{
  path:"/",
  element :<Body />,
  children:[
    {
      path:"/",
      element: <MainContainer />
    },
    {
      path:"watch",
      element: <WatchPage />
    }
  ]
}])

function App() {
  return (
    <Provider store={store}>
        <div>
      {/* <h1 className="text-3xl font-bold">Namaste React</h1> */}
       <Head/>
      <RouterProvider router={appRouter} />
       
      {/* ****
      
      *Head
      *Body
         --->SideBar
              --->Menu Items
         --->MainContainer
                --->ButtonsList
                --->Video Cards */}
    </div>
    </Provider>
  );
}

export default App;
