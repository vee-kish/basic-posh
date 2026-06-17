// BasicPosh admin authentication
window.BasicPoshAdmin = (function () {
    const SESSION_KEY = 'basicposh_admin_session';
    const CREDENTIALS = {
        email: 'admin@basicposh.com',
        password: 'admin123',
    };

    function isLoggedIn() {
        return sessionStorage.getItem(SESSION_KEY) === 'true';
    }

    function login(email, password) {
        const normalizedEmail = (email || '').trim().toLowerCase();
        if (normalizedEmail === CREDENTIALS.email && password === CREDENTIALS.password) {
            sessionStorage.setItem(SESSION_KEY, 'true');
            return true;
        }
        return false;
    }

    function logout() {
        sessionStorage.removeItem(SESSION_KEY);
        window.location.href = 'login.html';
    }

    function requireAuth() {
        const path = window.location.pathname;
        const isLoginPage = path.endsWith('login.html');
        if (!isLoggedIn() && !isLoginPage) {
            window.location.href = 'login.html';
            return false;
        }
        if (isLoggedIn() && isLoginPage) {
            window.location.href = 'dashboard.html';
            return false;
        }
        return true;
    }

    return { isLoggedIn, login, logout, requireAuth };
})();
