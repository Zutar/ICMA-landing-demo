import './Index.css';
import {Main, About, Services, CommunityMap} from './components/index';


function Index(){
    return (
        <div>
            <Main/>
            <About/>
            <Services/>
            <CommunityMap/>
        </div>
    );
}

export default Index;
