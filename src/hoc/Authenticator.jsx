import { useState } from "react";
import PrivateRoutes from "../router/PrivateRoutes";
import PublicRoutes from "../router/PublicRoutes";

const Authenticator = () => {
  const [isAuthed, setIsAuthed] = useState(false);
  return <>{isAuthed ? <PrivateRoutes /> : <PublicRoutes />}</>;
};

export default Authenticator;
