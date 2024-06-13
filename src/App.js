import Button from './Button';

function App(){
    return (<div>
        <div>
            <Button primary rounded outline>Click Me !!!</Button>
        </div>
        <div>
            <Button secondary rounded outline>Buy now !</Button>
        </div>
        <div>
            <Button success rounded outline>See Deal</Button>
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