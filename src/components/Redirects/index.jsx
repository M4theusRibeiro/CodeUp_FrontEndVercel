// Redirecionamento.jsx
export default function Redirecionamento(navigate, value) {
    switch (value) {
        case '/login':
            setTimeout(() => {
                navigate('/login');
            }, 100);
            break;
        case '/cadastro':
            setTimeout(() => {
                navigate('/cadastro');
            }, 100);
            break;
        case '/terminal':
            setTimeout(() => {
                navigate('/terminal');
            }, 100);
            break;
        case '/':
            setTimeout(() => {
                navigate('/');
            }, 100);
            break;
        default:
            break;
    }
}
