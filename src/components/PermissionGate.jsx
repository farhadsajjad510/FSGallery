import { useEffect } from "react";
import { Camera } from "@capacitor/camera";

export default function PermissionGate() {

  useEffect(() => {
    (async () => {
      try {
        await Camera.requestPermissions({
          permissions: ["photos"]
        });
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);

  return null;
}
