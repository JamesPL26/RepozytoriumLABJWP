import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useLayoutEffect, useRef, useState } from "react";
export default function LayoutEffectExample() {
    const boxRef = useRef(null);
    const [height, setHeight] = useState(0);
    useLayoutEffect(() => {
        if (boxRef.current) {
            setHeight(boxRef.current.getBoundingClientRect().height);
        }
    }, []);
    return (_jsxs("div", { children: [_jsx("div", { ref: boxRef, style: { padding: "54px", background: "#ddd" }, children: "Mierz\u0119 swoj\u0105 wysoko\u015B\u0107!" }), _jsxs("p", { children: ["Wysoko\u015B\u0107: ", height, "px"] })] }));
}
