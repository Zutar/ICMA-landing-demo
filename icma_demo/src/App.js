import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Index, Error, Contacts, News, ComingSoon, Events, Diasporas, SocialProjects, PublicOrganizations} from './pages/index';
import {Layout} from './components/index';


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route index element={<Index/>}/>
                    <Route path={'/contacts'} element={<Contacts/>}/>
                    <Route path={'/news'} element={<News/>}/>
                    <Route path={'/services/community'} element={<ComingSoon/>}/>
                    <Route path={'/services/marketplace'} element={<ComingSoon/>}/>
                    <Route path={'/services/business'} element={<ComingSoon text={'Connect your own business to the platform to interact with its members!'}/>}/>
                    <Route path={'/services/banking'} element={<ComingSoon text={'Implementation of an online banking system with the issuance of your own card'}/>}/>
                    <Route path={'/services/publicOrg'} element={<PublicOrganizations/>}/>
                    <Route path={'/services/diasporas'} element={<Diasporas/>}/>
                    <Route path={'/services/realestate'} element={<ComingSoon/>}/>
                    <Route path={'/services/projects'} element={<SocialProjects/>}/>
                    <Route path={'/services/crowdfunding'} element={<ComingSoon text={'Listing of fundraising projects (support for interesting ideas, development of start-ups, helping people, reconstruction of destroyed territories)'}/>}/>
                    <Route path={'/services/events'} element={<Events/>}/>
                </Route>
                <Route path={'*'} element={<Error code={404}/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
