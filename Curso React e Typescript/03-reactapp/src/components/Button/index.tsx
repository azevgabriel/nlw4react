interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    text: string;
    children: React.ReactNode;
}

// extends para que o button receba as propriedades do button do HTML

export default function Button({text, children}: Props){
    return (
        <button>
            {text} + {children}
        </button>
    );
}