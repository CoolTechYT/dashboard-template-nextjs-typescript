import { useEffect, useState } from "react";
import { uuid } from "@utils";

export const useToastPortal = () => {
    const [loaded, setLoaded] = useState(false);
    const [portalId] = useState(`toast-portal-${uuid()}`);
    useEffect(() => {
        const div = document.createElement('div');
        div.id = portalId;
        div.setAttribute("style", "position: fixed; bottom: 16px; right: 16px; z-index: 3;");
        document.body.prepend(div);
        setLoaded(true);

        return () => {
            document.body.removeChild(div);
        }
    }, [portalId]);

    return { loaded, portalId };
};