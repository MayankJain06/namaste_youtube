import "./App.css";
import Head from "../src/Components/Head";
import Body from "./Components/Body";
import Demo from "./Components/Demo";
import MainContainer from "./Components/MainContainer"
import { Provider } from "react-redux";
import store from "./utils/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import WatchPage from "./Components/WatchPage";
import Demo2 from "./Components/Demo2";

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
    },
    {
      path:"demo",
      element:<>
      <Demo />
      <Demo2 />
      </> 
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
