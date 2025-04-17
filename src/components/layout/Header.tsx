
import { Bell, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Link } from "react-router-dom";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <div className="bg-chai-blue text-white p-1 rounded-md mr-2">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="currentColor" />
                  <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <span className="font-bold text-xl text-chai-darkblue">CrisisChai</span>
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-chai-gray hover:text-chai-blue px-3 py-2 font-medium">Dashboard</Link>
            <Link to="/identity" className="text-chai-gray hover:text-chai-blue px-3 py-2 font-medium">Identity</Link>
            <Link to="/distribution" className="text-chai-gray hover:text-chai-blue px-3 py-2 font-medium">Distribution</Link>
            <Link to="/verification" className="text-chai-gray hover:text-chai-blue px-3 py-2 font-medium">Verification</Link>
          </nav>

          <div className="flex items-center">
            <Button variant="ghost" size="icon" className="relative mr-2">
              <Bell className="h-5 w-5 text-chai-gray" />
              <span className="absolute top-1 right-1 block h-2 w-2 rounded-full bg-chai-red"></span>
            </Button>
            <Button className="hidden md:flex bg-chai-blue hover:bg-chai-darkblue">Connect Wallet</Button>
            
            {/* Mobile menu button */}
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

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              to="/" 
              className="block px-3 py-2 rounded-md text-base font-medium text-chai-gray hover:text-chai-blue hover:bg-gray-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              Dashboard
            </Link>
            <Link 
              to="/identity" 
              className="block px-3 py-2 rounded-md text-base font-medium text-chai-gray hover:text-chai-blue hover:bg-gray-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              Identity
            </Link>
            <Link 
              to="/distribution" 
              className="block px-3 py-2 rounded-md text-base font-medium text-chai-gray hover:text-chai-blue hover:bg-gray-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              Distribution
            </Link>
            <Link 
              to="/verification" 
              className="block px-3 py-2 rounded-md text-base font-medium text-chai-gray hover:text-chai-blue hover:bg-gray-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              Verification
            </Link>
            <Button className="w-full mt-3 bg-chai-blue hover:bg-chai-darkblue">
              Connect Wallet
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
