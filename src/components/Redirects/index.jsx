// Redirecionamento.jsx
export default function Redirecionamento(navigate, value) {
    switch (value) {
        case '/login':
            setTimeout(() => {
                navigate('/login');
            }, 1000);
            break;
        case '/cadastro':
            setTimeout(() => {
                navigate('/cadastro');
            }, 1000);
            break;
        case '/terminal':
            setTimeout(() => {
                navigate('/terminal');
            }, 1000);
            break;
        default:
            break;
    }
}
