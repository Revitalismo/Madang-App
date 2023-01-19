import { IKContext } from "imagekitio-react";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import RouteLayout from "./navigation/RouteLayout";

const queryClient = new QueryClient();

function App() {

  const urlEndpoint = "https://ik.imagekit.io/Jul1an/MadangApp/";

  return (
    <QueryClientProvider client={queryClient}>
        <div className="App">
            <IKContext urlEndpoint={urlEndpoint}>
                <RouteLayout />
            </IKContext>
        </div>
        {/* <ReactQueryDevtools /> */}
    </QueryClientProvider>
  )
}

export default App
