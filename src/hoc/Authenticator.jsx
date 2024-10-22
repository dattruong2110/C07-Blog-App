import { useEffect, useState } from "react";
import PrivateRoutes from "../router/PrivateRoutes";
import PublicRoutes from "../router/PublicRoutes";
import { useSelector } from "react-redux";

const Authenticator = () => {
  const [isAuthed, setIsAuthed] = useState(false);
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    if (
      auth &&
      auth.user &&
      auth.user.data &&
      Array.isArray(auth.user.data.roles) &&
      (auth.user.data.roles.includes("ROLE_SUPER_ADMIN") ||
        auth.user.data.roles.includes("ROLE_ADMIN"))
    ) {
      setIsAuthed(true);
    } else {
      setIsAuthed(false);
    }
  }, [auth]);

  return (
    <>
      {isAuthed ? (
        <>
          <PrivateRoutes />
          <PublicRoutes isAuthed={isAuthed} />
        </>
      ) : (
        <PublicRoutes />
      )}
    </>
  );
};

export default Authenticator;
