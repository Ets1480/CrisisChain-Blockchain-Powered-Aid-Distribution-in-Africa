
import { Bell, Menu, Wallet, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useCallback, useEffect } from "react";
import { Link } from "react-router-dom";
import { ThemeToggle } from "../theme/ThemeToggle";
import { toast } from "sonner";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState<string>("");
  const [isMetaMaskInstalled, setIsMetaMaskInstalled] = useState(false);

  useEffect(() => {
    const checkMetaMask = () => {
      const isInstalled = typeof window.ethereum !== 'undefined' && window.ethereum.isMetaMask;
      setIsMetaMaskInstalled(isInstalled);
    };
    
    checkMetaMask();
  }, []);

  const handleWalletConnect = useCallback(async () => {
    if (!isMetaMaskInstalled) {
      toast.error(
        "MetaMask is required", 
        {
          description: "Please install MetaMask to connect your wallet",
          action: {
            label: "Install MetaMask",
            onClick: () => window.open('https://metamask.io/download/', '_blank')
          }
        }
      );
      return;
    }

    try {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      setIsWalletConnected(true);
      setWalletAddress(accounts[0]);
      toast.success("Wallet connected successfully!", {
        description: `Connected with address ${accounts[0].slice(0, 6)}...${accounts[0].slice(-4)}`
      });
    } catch (error) {
      console.error("User denied wallet connection");
      toast.error("Failed to connect wallet", {
        description: "Please try again and approve the connection request in MetaMask"
      });
    }
  }, [isMetaMaskInstalled]);

  const formatAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  return (
    <header className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <div className="bg-primary text-primary-foreground p-1 rounded-md mr-2">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="currentColor" />
                  <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <span className="font-bold text-xl text-foreground">CrisisChai</span>
            </Link>
          </div>

          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-muted-foreground hover:text-primary px-3 py-2 font-medium">Dashboard</Link>
            <Link to="/identity" className="text-muted-foreground hover:text-primary px-3 py-2 font-medium">Identity</Link>
            <Link to="/distribution" className="text-muted-foreground hover:text-primary px-3 py-2 font-medium">Distribution</Link>
            <Link to="/verification" className="text-muted-foreground hover:text-primary px-3 py-2 font-medium">Verification</Link>
          </nav>

          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5 text-muted-foreground" />
              <span className="absolute top-1 right-1 block h-2 w-2 rounded-full bg-destructive"></span>
            </Button>
            <Button 
              onClick={handleWalletConnect}
              className="hidden md:flex items-center space-x-2 bg-primary hover:bg-primary/90"
              disabled={!isMetaMaskInstalled && isWalletConnected}
            >
              <Wallet className="h-4 w-4" />
              <span>
                {isWalletConnected 
                  ? formatAddress(walletAddress)
                  : isMetaMaskInstalled 
                    ? 'Connect Wallet'
                    : 'Install MetaMask'
                }
              </span>
            </Button>
            
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link 
              to="/" 
              className="block px-3 py-2 rounded-md text-base font-medium text-muted-foreground hover:text-primary hover:bg-muted"
              onClick={() => setMobileMenuOpen(false)}
            >
              Dashboard
            </Link>
            <Link 
              to="/identity" 
              className="block px-3 py-2 rounded-md text-base font-medium text-muted-foreground hover:text-primary hover:bg-muted"
              onClick={() => setMobileMenuOpen(false)}
            >
              Identity
            </Link>
            <Link 
              to="/distribution" 
              className="block px-3 py-2 rounded-md text-base font-medium text-muted-foreground hover:text-primary hover:bg-muted"
              onClick={() => setMobileMenuOpen(false)}
            >
              Distribution
            </Link>
            <Link 
              to="/verification" 
              className="block px-3 py-2 rounded-md text-base font-medium text-muted-foreground hover:text-primary hover:bg-muted"
              onClick={() => setMobileMenuOpen(false)}
            >
              Verification
            </Link>
            <Button 
              onClick={handleWalletConnect}
              className="w-full mt-3 bg-primary hover:bg-primary/90"
            >
              <Wallet className="h-4 w-4 mr-2" />
              {isWalletConnected ? 'Connected' : 'Connect Wallet'}
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
