import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const MockLoginInfo = () => {
  return (
    <Card className="bg-blue-50 border-blue-200">
      <CardHeader>
        <CardTitle className="text-blue-800 text-sm">
          🧪 Mock Mode - Test Credentials
        </CardTitle>
      </CardHeader>
      <CardContent className="text-xs space-y-2">
        <div>
          <strong>Customer:</strong>
          <br />
          Email: customer@test.com
          <br />
          Password: customer123
        </div>
        <div>
          <strong>Penjual:</strong>
          <br />
          Email: penjual@test.com
          <br />
          Password: penjual123
        </div>
        <div>
          <strong>Admin:</strong>
          <br />
          Email: admin@test.com
          <br />
          Password: admin123
        </div>
      </CardContent>
    </Card>
  );
};

export default MockLoginInfo;
