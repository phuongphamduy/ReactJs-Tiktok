import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { publicRoutes } from '~/route';
import { DefaultLayout, HeaderOnly } from '~/components/Layout';
import { Fragment } from 'react';

function App() {
    return (
        <Router>
            <div className="App">
                {
                    <Routes>
                        {publicRoutes.map((item, index) => {
                            const Page = item.component;
                            let Layout = DefaultLayout;

                            if (item.layout) {
                                Layout = item.layout;
                            } else if (item.layout === null) {
                                Layout = Fragment;
                            }

                            return (
                                <Route
                                    path={item.path}
                                    element={
                                        <Layout>
                                            <Page />
                                        </Layout>
                                    }
                                />
                            );
                        })}
                    </Routes>
                }
            </div>
        </Router>
    );
}

export default App;
