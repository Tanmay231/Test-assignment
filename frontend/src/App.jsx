import { useAppKitAccount } from "@reown/appkit/react";
import Wallet from "./Components/Wallet";

function App() {
  const { isConnected } = useAppKitAccount();

  return (
    <main className=" bg-app-black w-screen h-screen p-3 lg:p-4 text-white flex items-center justify-center">
      {isConnected ? <Wallet /> : <appkit-button />}
    </main>
  );
}

export default App;
