import NextuiAlert from "nextui-alert";

import { Button } from "@nextui-org/button";
import { PizzaIcon } from "lucide-react";

function App() {
  return (
    <main className="container flex justify-center min-w-full py-14">
      <div className="max-w-md flex flex-col gap-4">
        <h1 className="text-xl">NextUI Alert Demo</h1>

        <h2 className="text-lg">Basic</h2>

        <NextuiAlert severity="danger" title="Danger Alert">
          Something went wrong with your request.
        </NextuiAlert>

        <h2 className="text-lg">Variants and Severity</h2>

        <NextuiAlert severity="success" variant="solid" title="Success">
          Operation completed successfully!
        </NextuiAlert>

        <NextuiAlert severity="warning" variant="bordered" title="Warning">
          Proceed with caution!
        </NextuiAlert>

        <h2>Adding Close Functionality</h2>

        <NextuiAlert
          severity="danger"
          title="Closable Alert"
          onClose={() => console.log("Alert closed!")}
        >
          Click the button to dismiss this alert.
        </NextuiAlert>

        <h2>Customizing Content</h2>

        <NextuiAlert
          severity="warning"
          title="Reward Received"
          startContent={<PizzaIcon />}
          endContent={
            <Button size="sm" variant="bordered" color="warning">
              Eat Now
            </Button>
          }
        >
          You've got a Pizza!
        </NextuiAlert>

        <NextuiAlert severity="info" variant="bordered" startContent={false}>
          This alert doesn't have an icon.
        </NextuiAlert>
      </div>
    </main>
  );
}

export default App;
