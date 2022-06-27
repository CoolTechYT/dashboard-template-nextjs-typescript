import { useEffect, useState } from "react";
import { uuid } from "@utils";

export const useModalPortal = () => {
    const [loaded, setLoaded] = useState(false);
    const [portalId] = useState(`modal-portal-${uuid()}`);

    useEffect(() => {
        const div = document.createElement('div');
        div.id = portalId;
        div.setAttribute("style", "position: fixed; top: 0px; left: 0px; z-index: 2;");
        document.body.prepend(div);
        setLoaded(true);

        return () => { document.body.removeChild(div); }
    }, [portalId]);

    return { loaded, portalId };
};