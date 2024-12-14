import { useAppKitAccount } from "@reown/appkit/react";
import MintForm from "./MintForm";
import NFTS from "./NFTS";
import useWeb3Interactions from "@/hooks/useWeb3Interactions";

const Wallet = () => {
  const { address } = useAppKitAccount();
  const { balance, isLoading } = useWeb3Interactions();

  return (
    <div className="m-3 lg:m-4 flex flex-col items-center justify-center">
      <h2 className=" text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        Address
      </h2>
      <p className="mt-3 lg:mt-4">{address}</p>
      <p className="mt-3 lg:mt-4">
        {isLoading ? "Loading ..." : `${balance} NFT (S)`}
      </p>
      <MintForm />
    </div>
  );
};

export default Wallet;
