import { useState } from "react";
import PrivateRoutes from "../router/PrivateRoutes";
import PublicRoutes from "../router/PublicRoutes";

const Authenticator = () => {
  const [isAuthed, setIsAuthed] = useState(true);
  return <>{isAuthed ? <PrivateRoutes /> : <PublicRoutes />}</>;
};

export default Authenticator;
