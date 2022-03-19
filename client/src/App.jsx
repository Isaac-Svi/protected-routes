import { useState } from 'react';
import './App.css';
import { Switch, Route, Link } from 'react-router-dom';
import { AuthProvider } from './providers/AuthProvider';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
    return (
        <AuthProvider>
            <div className='App'>
                <nav>
                    <Link to='/'>Home</Link>
                    <br />
                    <Link to='/secret'>Secret</Link>
                </nav>
                <br />
                <br />
                <br />
                <Switch>
                    <Route path='/' exact component={() => <div>Home</div>} />
                    {/* <Route
                        path='/secret'
                        exact
                        component={() => <div>secret</div>}
                    /> */}
                    <ProtectedRoute
                        path='/secret'
                        exact
                        component={() => <div>secret</div>}
                        redirect='/bob'
                    />
                </Switch>
            </div>
        </AuthProvider>
    );
}

export default App;
