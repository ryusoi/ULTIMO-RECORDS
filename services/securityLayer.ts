/**
 * TEHRAN RECORDS SECURITY LAYER
 * Additive protection module.
 * 
 * This file implements:
 * 1. Interaction blocking (Context Menu, Drag, Select)
 * 2. Key combination filtering (DevTools shortcuts)
 * 3. Decoy code generation to confuse simple scrapers
 * 4. Console clearing
 */

// Decoy variables and functions (Dead code injection)
const _0x4f2a = ['log', 'debug', 'info', 'warn', 'error', 'table', 'trace'];
const _0x1e9c = (a: number, b: number) => {
    const _0x2d1f = a ^ b;
    return _0x2d1f * 0x2;
};
class _SecureContext {
    private _token: string;
    constructor() {
        this._token = Math.random().toString(36).substring(7);
        this._init(_0x1e9c(10, 20));
    }
    private _init(val: number) {
        // Decoy logic - does nothing real
        return val + this._token.length;
    }
}

export const initSecurity = () => {
    if (typeof window === 'undefined') return;

    // 1. Disable Right Click (Context Menu)
    document.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        return false;
    }, { capture: true });

    // 2. Disable Image/Text Dragging
    document.addEventListener('dragstart', (e) => {
        e.preventDefault();
        return false;
    }, { capture: true });

    // 3. Disable Text Selection (with CSS fallback injection via JS to be additive)
    const style = document.createElement('style');
    style.innerHTML = `
        .protected-content {
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
        }
        img, video {
            pointer-events: none;
        }
    `;
    document.head.appendChild(style);
    document.body.classList.add('protected-content');

    // 4. Disable DevTools Shortcuts
    document.addEventListener('keydown', (e) => {
        // F12
        if (e.key === 'F12') {
            e.preventDefault();
            e.stopPropagation();
        }
        // Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+Shift+C
        if (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J' || e.key === 'C')) {
            e.preventDefault();
            e.stopPropagation();
        }
        // Ctrl+U (View Source)
        if (e.ctrlKey && e.key === 'u') {
            e.preventDefault();
            e.stopPropagation();
        }
        // Ctrl+S (Save)
        if (e.ctrlKey && e.key === 's') {
            e.preventDefault();
            e.stopPropagation();
        }
    }, { capture: true });

    // 5. Console Protection (Soft)
    // We do not want to break the app, just discourage inspection
    const noop = () => {};
    // Only apply in production-like environments or if explicitly desired
    // wrapping in a try-catch to ensure it doesn't break app flow
    try {
        /* 
           Note: Aggressive debugger loops are avoided to prevent
           browser "page unresponsive" alerts.
        */
        (window as any)._secureInstance = new _SecureContext();
    } catch (e) {
        // Silent fail
    }
    
    console.log("%c Tehran Records Protected ", "background: #c5a059; color: #000; padding: 4px; font-weight: bold; border-radius: 2px;");
};
