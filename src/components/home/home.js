import './home.css';
import {enableScroll, disableScroll} from '../../utils/scroll';
import PartnerBubble from '../partner-bubble/PartnerBubble';

const Home = () => {

    return (
    <div className="home">
        < div className="about-container home-container">
            <h1 className="home-header">Mario Strikers Competitive</h1>           
            <span>Welcome to the home for all things Mario Strikers! </span>
            <div className="information-container">
                <div className="sms-column">SMS</div>
                <div className="msc-column">MSC</div>
            </div>
        </div>
        
        <div className="partners-container home-container">
            <h1 className="home-header">PARTNERS</h1>
            <div className="partnerBubble">
            <PartnerBubble  title="Strikers Discord" description="The home for all things competitive Mario Strikers" image="discord_logo.png" link="https://discord.gg/mariostrikers" />
            </div>
        </div>
    </div>
    )
}
export default Home;