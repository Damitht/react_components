import { GoBell, GoCloudDownload, GoDatabase } from 'react-icons/go';
import Button from './Button';

function App(){
    const handleClick = () => {
        console.log('handleClick !!!');
    };

    const handleMounseEnter = () => {
        console.log('handleMounseEnter !!!');
    };

    const handleMouseLeave = () => {
        console.log('handleMouseLeave !!!');
    };

    return (<div>
        <div>
            <Button 
            primary 
            rounded 
            outline 
            className="mb-5"
            onClick={handleClick}>
                <GoBell />
                Click Me !!!
            </Button>
        </div>
        <div>
            <Button 
            secondary 
            rounded 
            outline 
            onMouseEnter={handleMounseEnter}>
                <GoCloudDownload />
                Buy now !
            </Button>
        </div>
        <div>
            <Button success rounded outline onMouseLeave={handleMouseLeave}>
                <GoDatabase />
                See Deal
            </Button>
        </div>
        <div>
            <Button warning rounded outline>Hide Ads</Button>
        </div>
        <div>
            <Button danger rounded outline>Delete</Button>
        </div>
    </div>);
}

export default App;