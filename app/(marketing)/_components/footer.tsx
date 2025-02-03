import { Button } from "@/components/ui/button"

import { Logo } from "./logo"

export const Footer = () => {
  return (
    <div className="flex flex-col space-y-2 w-full p-6 bg-background z-50 dark:bg-[#141414]">
      <div className="flex items-center">
        <Logo />
        <div className="md:ml-auto w-full justify-between md:justify-end flex items-center gap-x-2 text-muted-foreground">
          <Button variant="ghost" size="sm">
            Privacy Policy
          </Button>
          <Button variant="ghost" size="sm">
            Terms & Conditions
          </Button>
        </div>
      </div>
      <p className="p-2 text-center border-t text-sm">
        &copy; Created By Shubham Awasthi ({new Date().getFullYear()})
      </p>
    </div>
  )
}