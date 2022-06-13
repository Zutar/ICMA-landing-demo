import './Index.css';
import {Main, About, Services, CommunityMap, Purpose, Partners} from './components/index';


function Index(){
    return (
        <div>
            <Main/>
            <About/>
            <CommunityMap/>
            <Services/>
            <Purpose/>
            <Partners/>
        </div>
    );
}

export default Index;
