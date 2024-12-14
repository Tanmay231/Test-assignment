import { TestNFTAddress } from "@/constants";
import { useEffect, useState } from "react";
import { TestNFTAbi } from "@/contracts/abi";
import { useAppKitAccount } from "@reown/appkit/react";
import { useReadContract, useWriteContract } from "wagmi";
import { useToast } from "./use-toast";

const useWeb3Interactions = () => {
  const { address, isConnected } = useAppKitAccount();
  const [userNFTs, setUserNFTs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const {
    writeContract,
    status: mintStatus,
    isPending: isMinting,
    isSuccess: mintSuccess,
    isError: mintError,
    error: mintErrorDetails,
  } = useWriteContract();

  const balanceResult = useReadContract({
    abi: TestNFTAbi,
    address: TestNFTAddress,
    functionName: "balanceOf",
    args: [address],
    enabled: Boolean(address && isConnected),
  });

  const mintToken = async (uri) => {
    if (!uri) return;
    try {
      writeContract({
        abi: TestNFTAbi,
        address: TestNFTAddress,
        functionName: "mint",
        args: [uri],
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Mint error.",
      });
    }
  };

  useEffect(() => {
    if (mintSuccess) {
      balanceResult.refetch();
      toast({
        variant: "success",
        title: "New NFT Minted",
      });
    } else {
    }
  }, [isMinting]);

  return {
    balance: balanceResult.data ? Number(balanceResult.data) : 0,
    nfts: userNFTs,
    isLoading: isLoading || balanceResult.isLoading,
    error: balanceResult.error,
    mintToken,
    isMinting,
    mintSuccess,
    mintError,
    mintErrorDetails,
    mintStatus,
  };
};

export default useWeb3Interactions;
