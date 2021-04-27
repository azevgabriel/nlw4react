export default function Button({text, children}){
    return (
        <button>
            {text} + {children}
        </button>
    );
}