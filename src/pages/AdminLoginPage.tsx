import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/config';
import { useNavigate } from 'react-router-dom';
import Section from '../components/Section';
import Layout from '../Layout';

export default function AdminLoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate('/admin');
        } catch (err) {
            setError('Invalid email or password');
        }
    };

    return (
        <Layout navItems={[]}>
            <div className="pt-20 min-h-screen bg-slate-900">
                <Section className="flex items-center justify-center">
                    <div className="w-full max-w-md p-8 bg-slate-800/50 backdrop-blur-md rounded-2xl border border-slate-700">
                        <h2 className="text-3xl font-bold text-white mb-6 text-center">Admin Login</h2>

                        {error && (
                            <div className="bg-red-500/10 border border-red-500/50 text-red-400 px-4 py-2 rounded-lg mb-4 text-sm">
                                {error}
                            </div>
                        )}

                        <form onSubmit={handleLogin} className="space-y-4">
                            <div>
                                <label className="block text-slate-300 mb-2">Email</label>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full px-4 py-2 bg-slate-900/50 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-cyan-500 transition-colors"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-slate-300 mb-2">Password</label>
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full px-4 py-2 bg-slate-900/50 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-cyan-500 transition-colors"
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full py-3 bg-cyan-500 text-slate-900 font-bold rounded-lg hover:bg-cyan-400 transition-colors"
                            >
                                Login
                            </button>
                        </form>
                    </div>
                </Section>
            </div>
        </Layout>
    );
}
